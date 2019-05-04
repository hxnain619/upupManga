import React from 'react';
import InputField from './partials/inputField';
import {Link} from 'react-router-dom';

class SearchModal extends React.Component{
    render(){
        return(
            <div id="search-modal" className="modal">
                <div className="modal-content">
                    <form>
                        <div className="row">
                            <div className="col s12">
                                <h3>search for mangas</h3>
                                <div className="divider"></div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <InputField  required="yes" type="text" placeholder="Enter Manga Name"
                            id="search-input-name" classes="col l10 offset-l1 s12"  />
                            
                            <InputField type="text" placeholder="Enter Author Name"
                            id="search-input-author" classes="col l10 offset-l1 s12"  />
                            
                            <div className="input-field col l10 offset-l1 s12">
                                <select multiple id="search-category-select" >
                                    <option>Any</option>
                                    <optgroup label="Basic Genres">
                                        <option>Comedy</option>
                                        <option>Drama</option>
                                        <option>School Life</option>
                                        <option>Shounen</option>
                                        <option>Romance</option>
                                    </optgroup>
                                    <optgroup label="More Genres">
                                        <option>Genre 1</option>
                                        <option>Genre 2</option>
                                        <option>Genre 3</option>
                                    </optgroup>
                                </select>
                                <label htmlFor="search-category-select">Filter Popular Mangas</label>
                            </div>

                            <div className="col l10 offset-l1 s12">
                                <select id="rating-cateogory-select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <label htmlFor="rating-cateogry-select">Ratings</label>
                            </div>

                            <div className="input-field col s12 l10 offset-l1">
                                <input type="text" className="datepicker" id="search-from-date"/>
                                <label htmlFor="search-from-date">From</label>
                            </div>

                            <div className="input-field col s12 l10 offset-l1">
                                <input type="text" className="datepicker" id="search-to-date"/>
                                <label htmlFor="search-to-date">To</label>
                            </div>

                            <div className="input-field col s12 l10 offset-l1 ">
                                <button type="submit" className="btn btn-large btn-primary" onClick={(e) => this.search(e)}>
                                   <Link to='/search' style={{color: 'white'}}> Search</Link>
                                </button>
                            </div>


                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a  href='#!' className="modal-close waves-effect btn-flat">close</a>
                </div>

            </div>
        )
    }
    
    search(event){
        event.preventDefault();
    }
}

export default SearchModal;

