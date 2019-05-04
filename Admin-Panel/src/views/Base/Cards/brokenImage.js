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
        this.state = {
            mangaList: [],
            page: 1,
            show: true

        }
    }

    componentDidMount() {
        this.PaginationPage();
    }
    PaginationPage = (e) => {
        this.setState({ show: true })
        var a = e - 1;
        var pages = a > 0 ? a : 0;
        var mangaList = [];

        db.collection(`Page_${pages}`).where("image", "==", null).get()
            .then(doc => {
                for (var i = 0; i < doc.docs.length; i++) {
                    var data = doc.docs[i].data();
                    data.docId = doc.docs[i].id;
                    if (data.length !== 0) {
                        mangaList.push(data);
                        var sortedArray = mangaList.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0)
                        this.setState({ mangaList: sortedArray });
                        break;
                    } else {
                        this.setState({ show: false })
                    }
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }


    render() {
        const { mangaList } = this.state;
        return (
            <div className="App">
                <h1>Failed/Broken Image List</h1>
                {this.state.show && !mangaList.length && <img src={loader} style={{ margin: '10px 50px 0px 26%', width: '45%' }} />}

                {!this.state.show && !mangaList.length ? <center><p style={{
                    marginTop: "10%", marginBottom: "10%"
                }}>No failed Images on this page...</p></center> : null}

                {mangaList.length !== 0 ? mangaList.map((value, index) => {
                    return <div key={index} onClick={() => this.props.history.push({
                        pathname: `/manga/ShowDetails`,
                        state: {
                            manga: value,
                            page
                        }
                    })} style={listContainer}>
                        <img src={`https://cdn.mangaeden.com/mangasimg/${value.image}`} style={{ width: '70px', paddingLeft: '20px' }} />
                        <span style={{ marginLeft: '15px' }}>{value.title}</span>
                    </div>
                }) : null}
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