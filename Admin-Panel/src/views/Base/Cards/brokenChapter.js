import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import firebase from '../../Config/Firebase';
import loader from '../../../images/loader.gif';
import Pagination from 'react-js-pagination';
import '../../../index.css';

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

var page = 0;

class Cards extends Component {
    constructor(props) {
        super(props);
        this.PaginationPage = this.PaginationPage.bind(this)
        this.state = {
            mangaList: [],
            page: 1,
            show: true

        }
    }

    componentDidMount() {
        this.PaginationPage(0);
        
    }
    PaginationPage = (e) => {
        console.log(e,"function just ran");
        
        this.setState({ show: true })
        var a = e - 1;
        var pages = a > 0 ? a : 0;
        var mangaList2 = [];
        var mangaList = [];
        db.collection(`CHAPTER_PAGE_${pages}`).get()
            .then(doc => {
                for (var i = 0; i < doc.docs.length; i++) {
                    var data = doc.docs[i].data();
                    data.docId = doc.docs[i].id;
                    console.log("before loop", data);

                    for (var j = 0; j < data.ChapterImages.length; j++) {
                        if (data.ChapterImages[j] == null) {
                            mangaList2.push(data)
                            this.setState({ show: false })
                            break;
                        } else {
                            this.setState({ show: false })
                        }
                    }
                    console.log("after first loop", mangaList2, this.state.show);

                    mangaList2.forEach(data => {
                        db.collection(`Page_${pages}`).orderBy("title").get().then(doc => {
                            for (var i = 0; i < doc.docs.length; i++) {
                                var data1 = doc.docs[i].data();
                                data1.docId = doc.docs[i].id;

                                if (data.ChapterGetFromMangaId === data1.docId) {
                                    mangaList.push(data1);
                                    this.setState({ mangaList: mangaList, show: false });
                                    break;
                                } else {
                                    this.setState({ show: false })
                                }
                            }
                        })
                    })
                }
            }).catch((error) => {
                this.setState({ show: false })
                console.log("Error getting document:", error);
            });
    }


    render() {
        const { mangaList } = this.state;
        console.log(mangaList);

        return (
            <div className="App">
                <h1>Failed/Missing Chapter Images</h1>
                {console.log(this.state.show)
                }
                {this.state.show && !mangaList.length && <img src={loader} style={{ margin: '10px 50px 0px 26%', width: '45%' }} />}

                {!this.state.show && !mangaList.length ? <center><p style={{
                    marginTop: "10%", marginBottom: "10%"
                }}>No failed Chapter on this page...</p></center> : null}

                {this.state.show && mangaList.length && mangaList.map((value, index) => {
                    return <div onClick={() => this.props.history.push({
                        pathname: `/manga/ShowDetails`,
                        state: {
                            manga: value,
                            page
                        }
                    })} style={listContainer}>
                        <img src={`https://cdn.mangaeden.com/mangasimg/${value.image}`} style={{ width: '70px', paddingLeft: '20px' }} />
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

export default Cards;

const listContainer = {
    border: '1px solid #dad7d7',
    marginBottom: '10px',
    fontSize: '17px',
    lineHeight: '90px',
}