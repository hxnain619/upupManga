import React from 'react';
import Card from './card';
// Loader 
import Loader from '../global/loader';
import Paginations from './pagination';

class MangasCard extends React.Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this)
        this.state = {
            mangaImage: [],
            loading: false
        }

    }
    render() {
        return (
            <div className="container mangas-image-container card-main-container">
                {this.state.loading ? <Loader /> : null}
                <div className="row">
                    {this.renderCards()}
                </div>
                <Paginations fetch={this.fetch} />
            </div>
        )
    }

    renderCards() {
        let temp = [];
        for (let i = 0; i < this.state.mangaImage.length; i++) {
            temp.push(
                <div key={i} className="col s12 l4">
                    <Card data={this.state.mangaImage[i]} />
                </div>
            )
        }
        return temp;
    }
    componentDidMount() {
        this.fetch()
    }

    fetch(page) {
        this.setState({ loading: true })
        fetch(`https://www.mangaeden.com/api/list/0/?p=${page > 0 ? page - 1 : 0}&I=500`)
            .then(res => {
                var manga = res.json();
                return manga;
            })
            .then(data => {
                this.setState({ loading: false })
                var temp = []
                if (data !== undefined) {
                    data.manga.forEach((element) => {
                        fetch(`https://www.mangaeden.com/api/manga/${element.i}/`)
                            .then(data => {
                                return data.json()
                            })
                            .then(data => {
                                if (data !== undefined) {
                                    temp.push(data)
                                    this.setState({ mangaImage: temp })
                                }
                                return temp;
                            })
                            .catch(err => {
                                this.setState({ loading: false })
                                console.log(err)
                            })
                    });
                }
            })
            .catch(err => {
                this.setState({ loading: false })
                console.log(err)
            })
    }

}

export default MangasCard;