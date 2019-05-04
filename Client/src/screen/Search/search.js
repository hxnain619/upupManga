import React from 'react';
import Nav from '../../components/global/nav';
import Footer from '../../components/global/footer';
import UpupGirl from '../../components/global/upupgirl';
import Girl from '../../components/global/girl';
import BackTop from '../../components/global/backTop';
import SearchModal from '../../components/global/searchModal';
import M from 'materialize-css';
import $ from 'jquery';
import UserDetail from '../../components/UserDetail/UserDetail';
import Form from '../../components/login/form';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: false,
        }
    }

    selectNavForPage() {

        if (this.state.loginStatus) {
            return <Nav activeLink="user profile" loginStatus={false} />;
        }
        else {
            return <Nav activeLink="login" loginStatus={false} />
        }

    }

    render() {

        return (
            <div className='app'>
                {this.selectNavForPage()}
                <div className="container mangas-text-collection-container">
                    <div className="row">
                        <div className="col s12 ">
                            <div className='search'>
                                <div class="card horizontal" >
                                    <div  class="card-image">
                                        <img style={{height: '100%', width: '100%'}} src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg" />
                                    </div>
                                    <div class="card-stacked">
                                        <div class="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#!" className="btn btn-small waves-effect waves-light btn-primary btn-sm">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <UpupGirl />
                <Girl />
                <BackTop />
                <SearchModal />
            </div>

        )
    }
    selectMainContentForPage() {

        if (this.state.loginStatus) {
            return <UserDetail />
        }
        else {
            return <Form />
        }

    }

    componentDidMount() {

        //JQuery Initialization

        let select = document.querySelectorAll('select'),
            sidenav = document.querySelectorAll('.sidenav'),
            dropdown = document.querySelectorAll('.dropdown-trigger'),
            collapsible = document.querySelectorAll('.collapsible'),
            datepicker = document.querySelectorAll('.datepicker'),
            modal = document.querySelectorAll('.modal'),
            tabs = document.querySelectorAll('.tabs');


        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown, { coverTrigger: false });
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        M.Tabs.init(tabs);

        $('#back-top').each(function () {
            $(this).click(function () {
                $('html,body').animate({ scrollTop: 0 }, 'slow');
                return false;
            });
        });


    }
}
export default Search;