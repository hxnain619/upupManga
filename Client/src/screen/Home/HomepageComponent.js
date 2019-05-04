import React from 'react';
import Nav from '../../components/global/nav';
import Header from '../../components/global/header';
import LatestMangas from '../../components/home/latestMangas';
import MangaCategories from '../../components/home/mangaCategories';
import RecentMangas from '../../components/home/recentMangas';
import Footer from '../../components/global/footer';
import UpupGirl from '../../components/global/upupgirl';
import Girl from '../../components/global/girl';
import BackTop from '../../components/global/backTop';
import SearchModal from '../../components/global/searchModal';
import ChatBox from '../../components/global/chatbox';

import M from 'materialize-css';
import $ from 'jquery';


class HomePageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginStatus : false,
        }

        if(this.state.loginStatus){
            this.state.headerText = "user profile";
            document.title = "User Profile | Upupmanga";
        }
        else{
            this.state.headerText = "login to your account"
        }

    }

    render(){
        return(
            <div className="app">
                <Nav activeLink = "home"/>
                <Header text="read your favorite mangas!" /> 
                <LatestMangas />
                <MangaCategories />
                <RecentMangas />
                <Footer />
                <UpupGirl />
                <Girl/>
                <BackTop />
                <SearchModal />
                <ChatBox />
            </div>
        );
    }
  
    componentDidMount(){
        fetch('https://blooming-reef-50820.herokuapp.com/api/login').then(res => console.log(res))
        //JQuery Initialization

        let select = document.querySelectorAll('select'),
        sidenav = document.querySelectorAll('.sidenav'),
        dropdown = document.querySelectorAll('.dropdown-trigger'),
        collapsible = document.querySelectorAll('.collapsible'),
        datepicker = document.querySelectorAll('.datepicker'),
        modal = document.querySelectorAll('.modal');
    

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown,{coverTrigger : false});
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        
        $('#back-top').each(function(){
            $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
            });
        });

        
    }
}

export default HomePageComponent;
