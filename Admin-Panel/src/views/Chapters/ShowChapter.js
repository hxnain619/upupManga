import React, { Component } from 'react';
import firebase from '../Config/Firebase';
import loader from '../../images/loader.gif';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Table } from 'react-bootstrap';
import swal from 'sweetalert';

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

class ShowChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chptPages: '',
            page: 0,
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        var page = id.slice(0, 1);
        var docId = id.slice(1, id.indexOf('-'));
        db.collection(`CHAPTER_PAGE_${page < 0 ? 0 : page - 1}`).doc(docId).get()
            .then(doc => {
                if (doc.exists) {
                    const chptPages = doc.data().ChapterImages;
                    const chptId = doc.id;
                    this.setState({ chptPages, chptId, page })
                } else {
                    return null
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    }


    DeleteDoc = async () => {
        const { id } = this.props.match.params;
        var page = id.slice(0, 1);
        var docId = id.slice(1, id.indexOf('-'));
        var mangaId = id.slice(id.indexOf('-') + 1);
        this.DeleteChapterFromMangaDetails(mangaId, docId);
        this.AddDeleteChapterToFirebase(docId);
        db.collection(`CHAPTER_PAGE_${page}`).doc(docId).delete().then(() => {
            swal("Poof! You deleted manga successfully!", { icon: "success" });
            this.props.history.push('/chapters');

        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    DeleteChapterFromMangaDetails = (mangaId, docId) => {
        const { page } = this.state;

        db.collection(`Page_${page}`).doc(mangaId).get()
            .then(doc => {
                var chapters = doc.data().chapters;
                chapters.filter((value, index) => {
                    if (value['3'] === docId) {
                        chapters.splice(index, 1);
                    }
                })
                db.collection(`Page_${page}`).doc(mangaId).update({
                    chapters
                })
                    .then(() => {
                        swal("Poof! You deleted manga successfully!", { icon: "success" });

                    })
                    .catch(error => {
                        console.error("Error updating document: ", error);
                    });

                console.log("Document successfully deleted!");


            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
    }

    AddDeleteChapterToFirebase = async (id) => {
        const { chptPages, page } = this.state;
        db.collection(`DELETED_IMAGES_${page}`).doc(id).set({ chptPages })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    render() {
        const { chptPages, chptId } = this.state;
        const { id } = this.props.match.params;

        return (
            <div >

                <div className="jumbotron">
                    <h1 style={titleCss}>Chapter Pages</h1>

                    <Button bsStyle="success" style={edit_btn} onClick={() => {
                        swal({
                            title: "Are you sure?",
                            text: `Do you really want to delete this manga?`,
                            icon: "info",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    this.DeleteDoc();
                                } else {
                                    swal("Your request is cancelled!", { icon: "error" });
                                    console.log("ohh");
                                }
                            });
                    }}>Delete Chapter</Button>

                    <Button bsStyle="success" style={edit_btn} onClick={() => this.props.history.push({
                        pathname: '/chapters/ShowChapter/EditChapter',
                        state: {
                            chptPages,
                            chptId,
                            id
                        }
                    })}>Edit Images</Button>
                </div>

                <div className="container" style={crouselCss}>
                    <div className="row">
                        <div className="col-sm-6 col-md-8 col-lg-8">
                            <Carousel showArrows={true}>
                                {chptPages.length && chptPages.map((value, index) => {
                                    return <div>
                                        {value[2] == "/" ? <img src={`https://cdn.mangaeden.com/mangasimg/${value}`} style={img} /> :
                                            <img src={value} style={img} />}
                                        {/* <p className="legend">Page no {index + 1}</p> */}
                                    </div>
                                })}

                            </Carousel>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default ShowChapter;

const titleCss = {
    display: 'inline',
    marginLeft: '18px',
    marginTop: '18px',
    textAlign: 'center',
    margin: "1em 0 0.5em 0",
    color: "#343434",
    fontWeight: "normal",
    fontFamily: "'Ultra', sans-serif",
    fontSize: "36px",
    lineHeight: "42px",
    textTransform: "uppercase",
    textShadow: "0 2px white, 0 3px #777",
    marginTop: '-8px'
}
const img = {
    width: '90%',
    marginBottom: '-10%'
}
const crouselCss = {
    width: "100%",
    margin: "0 auto",
    alignItems: 'center',
}
const edit_btn = {
    float: 'right',
    margin: "2% 2% 0 0",
    marginTop: '-10px'
}
