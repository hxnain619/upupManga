import React, { Component, lazy, Suspense } from 'react';
import firebase from '../Config/Firebase';
import { Button, FormControl, Form, Table, Col } from 'react-bootstrap';

var db = firebase.firestore();

// db.settings({
//   timestampsInSnapshots: true
// });

var searchTimeout = "";
var chapterQuantity = 0;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangaId: [],
      chaptersId: [],
      chp: [],
      AllData: [],
      searchText: '',
      filterList: []
    }
  }

  componentDidMount() {
    this.FetchDataFromDatabase();
  }

  FetchDataFromDatabase = async () => {
    const { AllData } = this.state;

    var a = 0;
    var isData = true;
    do {
      db.collection(`Page_${a}`).get()
        .then(querySnapshot => {
          if (querySnapshot.docs.length) {
            querySnapshot.forEach(doc => {
              var data = doc.data();
              data.page = a;
              AllData.push(data);
              chapterQuantity = chapterQuantity + data.chapters_len;
            });

            this.setState({ AllData });
            console.log(chapterQuantity);
            a++
          } else {
            isData = false;
            console.log("Empty field");
          }
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
          isData = false;
        });
      await new Promise(resolve => setTimeout(resolve, 2000));

    } while (isData)

  }

  SearchingStuff = (event) => {
    event.preventDefault();
    var value = event.target.value;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      this.searching(value);
    }, 500);
  }

  searching = (value) => {
    const { AllData } = this.state;
    var filterArray = AllData.filter(data => {
      return (data.title.toLowerCase().slice(0, value.length) === value.toLowerCase() ||
        data.author.toLowerCase().slice(0, value.length) === value.toLowerCase() ||
        data.alias.toLowerCase().slice(0, value.length) === value.toLowerCase());
    })
    var uniqueValues = []
    for (var i = 0; i < filterArray.length; i++) {
      var isFound = false;
      for (var a = 0; a < uniqueValues.length; a++) {
        if (uniqueValues[a].title === filterArray[i].title || uniqueValues[a].author === filterArray[i].author || uniqueValues[a].alias === filterArray[i].alias) {
          isFound = true;
        }
      }
      if (!isFound) {
        uniqueValues.push(filterArray[i])
      }
    }
    this.setState({
      searchText: value,
      dataList: uniqueValues
    });
  }
  Cancel = () => { this.setState({ searchText: null }) }

  GoToDetails = (obj) => {
    this.props.history.push({
      pathname: `/manga/ShowDetails`,
      state: {
        manga: obj,
        page: obj.page
      }
    })
  }


  render() {
    const { mangaId, chaptersId, chapterList, chp, dataList, AllData, searchText } = this.state;

    return (
      <div>
        <div className='container'>
          <h5 className="jumbutron">Mangas <span class="badge badge-primary">{AllData.length}</span></h5>
          <hr />
          <h5 className="jumbutron">Chapters <span className="badge badge-primary">{chapterQuantity}</span></h5>
          <hr />
        </div>

        {/* <br/> */}
        <b>Search through Alias, Artist and Author</b>
        <br />
        <br />

        <Col sm="6">
          <Form.Control
            type="text"
            style={{ marginBottom: '30px' }}
            placeholder="Search..."
            onChange={this.SearchingStuff}
          />
        </Col>
        {dataList && <Button bsstyle="success" onClick={this.Cancel} style={CancelBtn}>Cancel</Button>}


        {dataList && <div>
          {searchText && dataList.map((value, index) => {
            return <span key={index} onClick={this.GoToDetails.bind(this, value)}>
              {value.alias.toLowerCase().includes(searchText.toLowerCase()) &&
                <li style={ListContainer}>{value.alias} <span style={searchItem}>Alias</span></li>}

              {value.artist.toLowerCase().includes(searchText.toLowerCase()) &&
                <li style={ListContainer}>{value.artist} <span style={searchItem}>Artist</span></li>}

              {value.author.toLowerCase().includes(searchText.toLowerCase()) &&
                <li style={ListContainer}>{value.author} <span style={searchItem}>Author</span></li>}
            </span>
          })}
        </div>}

      </div>
    );
  }
}

export default Dashboard;

const CancelBtn = {
  float: "right",
  marginTop: "-65px"
}

const searchItem = {
  float: "right",
  color: '#747f87'
}

const ListContainer = {
  margin: '7px',
  padding: '13px',
  border: "2px solid #0f0f0f0d",
  boxShadow: "1px 1px 1px 0px #888888",
  cursor: 'pointer'
}

const Theading = {
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize: '20px',
  padding: '6px'
}

const th = {
  textAlign: 'center',
  color: 'rgb(105, 114, 123)',
}

const td = {
  color: '#6a6e71',
  marginLeft: '10px',
  padding: '7px',
  textAlign: 'center',
}