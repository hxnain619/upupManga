import React, { Component } from 'react';
import firebase from '../Config/Firebase';
import loader from '../../images/loader.gif';
import { Button } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../index.css';

const CHAPTERLIST = "https://www.mangaeden.com/api/chapter/";

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapterList: [],
      page: 1
    }
  }

  componentDidMount() {
    this.PaginationPage()
  }
  PaginationPage(e) {
    var a = e - 1;
    var pages = a > 0 ? a : 0;
    var chapterList = [];

    db.collection(`Page_${pages}`).orderBy("title").get()
      .then(doc => {
        for (var i = 0; i < doc.docs.length; i++) {
          var data = doc.docs[i].data();
          var detailId = doc.docs[i].id;
          if (data.chapters.length) {
            var chp = [];
            for (let j = 0; j < data.chapters_len; j++) {
              if (data.chapters[j]) {
                var page = data.chapters[j]['2'];
                var id = data.chapters[j]['3'];
                chp.push({ page, id });
              }
            }
            data.chapters = chp;
          }

          data.mangaId = detailId;
          chapterList.push(data);
          var sortedArray = chapterList.sort((a, b) => (a.alias > b.alias && a.author > b.author && a.view > b.view && a.rating > b.rating) ?
            1 : (b.alias > a.alias && b.author > a.author && b.view > a.view && b.rating > a.rating) ? -1 : 0)
          }
          
        this.setState({ chapterList: sortedArray });

      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
  }


  render() {
    const { chapterList, showIndex, showButtons } = this.state;
    
    return (
      <div className="App">
        <h1>Chapter List</h1>
        {chapterList.length == 0 && <img src={loader} style={{ margin: '10px 50px 0px 26%', width: '45%' }} />}

        {chapterList && chapterList.map((value, index) => {
          return <div style={listContainer}>
            <div onClick={() => this.setState({ showButtons: !showButtons, showIndex: index })} >
              {/* <img src={`https://cdn.mangaeden.com/mangasimg/${value.image}`} style={imgCss} /> */}
              {value.image[2] == "/" ? <img src={`https://cdn.mangaeden.com/mangasimg/${value.image}`} style={imgCss} /> :
                            <img src={value.image} style={imgCss} />}

              <span style={Chapter_link} >{value.alias}</span></div>

            {/*  ONCLICK TO SHOW THE SELECTIVE CHAPTER'S TOPICS AND Btn TO OPEN THAT BOOK */}
            {showButtons && showIndex === index && <div>
              {value.chapters.map(data => {
                return <div>
                  <b style={{ margin: '0px 20px 0px 13px' }}>.</b>
                  {data.page}
                  {console.log(value.mangaId, "manga id",this.state.page,"state with page",data.id,"data id")
                  }
                  <Button bsStyle="success" onClick={() => this.props.history.push(`/chapters/ShowChapter${this.state.page}${data.id}-${value.mangaId}`)} style={buttonCss} >
                    Open this book</Button>
                </div>
              })}
            </div>}

          </div>
        })}
        <Pagination
          hideFirstLastPages
          prevPageText={<i className="fa fa-chevron-left" ></i>}
          nextPageText={<i className="fa fa-chevron-right" ></i>}
          pageRangeDisplayed={5}
          activePage={this.state.page}
          itemsCountPerPage={50}
          totalItemsCount={1000}
          onChange={(e) => {
            this.setState({ page: e })
            this.PaginationPage(e)
          }}
        />
      </div>
    )
  }
}

export default Charts;

const Chapter_link = {
  cursor: 'pointer',
  marginLeft: '15px'
}

const buttonCss = {
  float: 'right',
  margin: '28px 10px 0px 0px',
  cursor: 'pointer'
}
const listContainer = {
  border: '1px solid #dad7d7',
  marginBottom: '10px',
  fontSize: '17px',
  lineHeight: '90px',
}
const imgCss = {
  width: '70px',
  paddingLeft: '20px',
  cursor: 'pointer',
}