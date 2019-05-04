import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcons from '../global/fontAwesomeIcons';
import NewsLetter from '../global/newsLetter';
// Loader 
import Loader from '../global/loader';
import Paginations from '../mangaImage/pagination';
import Scrollchor from 'react-scrollchor'

class Collections extends React.Component {
    constructor(props) {
        super(props)
        this.fetch = this.fetch.bind(this)
        this.state = {
            mangaList: [],
            loading: false
        }
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
                var temp = [];
                this.setState({ loading: false })
                data.manga.forEach((element) => {
                    temp.push(element)
                    this.setState({ mangaList: temp })
                });
            })
            .catch(err => {
                this.setState({ loading: false })
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container mangas-text-collection-container">
                {this.state.loading ? <Loader /> : null}
                <div className="row">
                    <div className="col s12 l7">
                        <ul class="pagination">
                            <Scrollchor to='##'> <li class="waves-effect anchor"><Link to="#!">#</Link></li></Scrollchor>
                            <Scrollchor to='#a'><li class="waves-effect anchor"><Link to="#!">A</Link></li></Scrollchor>
                            <Scrollchor to='#b'> <li class="waves-effect anchor"><Link to="#!">B</Link></li></Scrollchor>
                            <Scrollchor to='#c'><li class="waves-effect anchor"><Link to="#!">C</Link></li></Scrollchor>
                            <Scrollchor to='#d'><li class="waves-effect anchor"><Link to="#!">D</Link></li></Scrollchor>
                            <Scrollchor to='#e'> <li class="waves-effect anchor"><Link to="#!">E</Link></li></Scrollchor>
                            <Scrollchor to='#f'> <li class="waves-effect anchor"><Link to="#!">F</Link></li></Scrollchor>
                            <Scrollchor to='#g'> <li class="waves-effect anchor"><Link to="#!">G</Link></li></Scrollchor>
                            <Scrollchor to='#h'> <li class="waves-effect anchor"><Link to="#!">H</Link></li></Scrollchor>
                            <Scrollchor to='#i'> <li class="waves-effect anchor"><Link to="#!">I</Link></li></Scrollchor>
                            <Scrollchor to='#j'><li class="waves-effect anchor"><Link to="#!">J</Link></li></Scrollchor>
                            <Scrollchor to='#k'><li class="waves-effect anchor"><Link to="#!">K</Link></li></Scrollchor>
                            <Scrollchor to='#l'> <li class="waves-effect anchor"><Link to="#!">L</Link></li></Scrollchor>
                            <Scrollchor to='#m'> <li class="waves-effect anchor"><Link to="#!">M</Link></li></Scrollchor>
                            <Scrollchor to='#n'><li class="waves-effect anchor"><Link to="#!">N</Link></li></Scrollchor>
                            <Scrollchor to='#o'> <li class="waves-effect anchor"><Link to="#!">O</Link></li></Scrollchor>
                            <Scrollchor to='#P'> <li class="waves-effect anchor"><Link to="#!">P</Link></li></Scrollchor>
                            <Scrollchor to='#q'><li class="waves-effect anchor"><Link to="#!">Q</Link></li></Scrollchor>
                            <Scrollchor to='#r'> <li class="waves-effect anchor"><Link to="#!">R</Link></li></Scrollchor>
                            <Scrollchor to='#s'> <li class="waves-effect anchor"><Link to="#!">S</Link></li></Scrollchor>
                            <Scrollchor to='#t'><li class="waves-effect anchor"><Link to="#!">T</Link></li></Scrollchor>
                            <Scrollchor to='#u'> <li class="waves-effect anchor"><Link to="#!">U</Link></li></Scrollchor>
                            <Scrollchor to='#v'> <li class="waves-effect anchor"><Link to="#!">V</Link></li></Scrollchor>
                            <Scrollchor to='#w'> <li class="waves-effect anchor"><Link to="#!">W</Link></li></Scrollchor>
                            <Scrollchor to='#x'> <li class="waves-effect anchor"><Link to="#!">X</Link></li></Scrollchor>
                            <Scrollchor to='#y'><li class="waves-effect anchor"><Link to="#!">Y</Link></li></Scrollchor>
                            <Scrollchor to='#z'><li class="waves-effect anchor"><Link to="#!" >Z</Link></li></Scrollchor>
                        </ul>
                        <div className="row">
                            <div className="col s12">
                                <ul className="collection with-header">
                                    <li id='#' className='collection-header'><h4>#</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] < 10) {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='a' className='collection-header'><h4>A</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'a') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='b' className='collection-header'><h4>B</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'b') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='c' className='collection-header'><h4>C</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'c') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='d' className='collection-header'><h4>D</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'd') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='e' className='collection-header'><h4>E</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'e') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='f' className='collection-header'><h4>F</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'f') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='g' className='collection-header'><h4>G</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'g') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='h' className='collection-header'><h4>H</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'h') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='i' className='collection-header'><h4>I</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'i') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='j' className='collection-header'><h4>J</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'j') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li  id='k' className='collection-header'><h4>K</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'k') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='l' className='collection-header'><h4>L</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'l') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='m' className='collection-header'><h4>M</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'm') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='n' className='collection-header'><h4>N</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'n') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='o' className='collection-header'><h4>O</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'o') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='p' className='collection-header'><h4>P</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'p') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='q' className='collection-header'><h4>Q</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'q') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='r' className='collection-header'><h4>R</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'r') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='s' className='collection-header'><h4>S</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 's') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='t' className='collection-header'><h4>T</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 't') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='u' className='collection-header'><h4>U</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'u') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='v' className='collection-header'><h4>V</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'v') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='w' className='collection-header'><h4>W</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'w') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='x' className='collection-header'><h4>X</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'x') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id='y' className='collection-header'><h4>Y</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'y') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                    <li id="z" className='collection-header'><h4>Z</h4></li>
                                    {this.state.mangaList.map((data, i) => {
                                        if (data.a[0] === 'z') {
                                            return (<li className='collection-item' key={i}><Link to='/mangabio'> {data.a}</Link></li>)
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 l5 mangas-social-container">
                        <div className="row">
                            <div className="col s12">
                                <h4>social media</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12" id="social-btn-container">
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses="fab fa-facebook-f" />
                                </Link>
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses="fab fa-twitter" />
                                </Link>
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses="fab fa-linkedin-in" />
                                </Link>
                                <Link to="/text list" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses="fas fa-rss" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h4>categories</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <Link to="/text list" className="btn-badges">comedy</Link>
                                <Link to="/text list" className="btn-badges">drama</Link>
                                <Link to="/text list" className="btn-badges">romance</Link>
                                <Link to="/text list" className="btn-badges">martial arts</Link>
                                <Link to="/text list" className="btn-badges">drama</Link>
                                <Link to="/text list" className="btn-badges">romance</Link>
                                <Link to="/text list" className="btn-badges">comedy</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h4>newsletter</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <NewsLetter />
                            </div>
                        </div>
                    </div>
                </div>
                <Paginations fetch={this.fetch} />
            </div>
        )
    }
}

export default Collections;