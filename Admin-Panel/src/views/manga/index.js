import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Config/Firebase';
import loader from '../../images/loader.gif'
// import { depthFrom } from 'array-flatten';
import '../../index.css'
import { Button } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

class Manga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangaList: [],
            page: 1
        }
    }
    componentDidMount() {
        this.PaginationPage()
    }
    PaginationPage = (e) => {
        var a = e - 1;
        var pages = a > 0 ? a : 0;
        var mangaList = [];

        db.collection(`Page_${pages}`).orderBy("title").get()
            .then(doc => {
                console.log(doc.docs);
                for (var i = 0; i < doc.docs.length; i++) {
                    var data = doc.docs[i].data();
                    data.docId = doc.docs[i].id;
                    if (data.image) {
                        mangaList.push(data);
                        var sortedArray = mangaList.sort((a, b) => (a.alias > b.alias && a.author > b.author && a.view > b.view && a.rating > b.rating) ?
                            1 : (b.alias > a.alias && b.author > a.author && b.view > a.view && b.rating > a.rating) ? -1 : 0)

                    }
                }

                this.setState({ mangaList: sortedArray });
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }

    render() {
        const { mangaList } = this.state;
        return (
            <div className="App">
                <h1>Manga List</h1>
                {!mangaList.length && <img src={loader} style={{ margin: '10px 50px 0px 26%', width: '45%' }} />}

                {mangaList && mangaList.map((value, index) => {
                    return <div onClick={() => this.props.history.push({
                        pathname: `/manga/ShowDetails`,
                        state: {
                            manga: value,
                            page: this.state.page
                        }
                    })} style={listContainer}>
                        {value.image[2] == "/" ? <img src={`https://cdn.mangaeden.com/mangasimg/${value.image}`} style={{ width: '70px', paddingLeft: '20px' }} /> :
                            <img src={value.image} style={{ width: '70px', paddingLeft: '20px' }} />}
                        <span style={{ marginLeft: '15px' }}>{value.title}</span>
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
export default Manga;
const listContainer = {
    border: '1px solid #dad7d7',
    marginBottom: '10px',
    fontSize: '17px',
    lineHeight: '90px',
}
