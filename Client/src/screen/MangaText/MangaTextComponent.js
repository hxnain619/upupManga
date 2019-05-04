
import React from 'react';
import Nav from '../../components/global/nav';
import Header from '../../components/global/header';
import Footer from '../../components/global/footer';
import UpupGirl from '../../components/global/upupgirl';
import Girl from '../../components/global/girl';
import BackTop from '../../components/global/backTop';
import SearchModal from '../../components/global/searchModal';
import Collections from '../../components/MangaCollection/collections';
import ChatBox from '../../components/global/chatbox';

import M from 'materialize-css';
import $ from 'jquery';

class MangaText extends React.Component{
    render(){
        return(
            <div className="app">
                <Nav/>
                <Header text="mangas collection"   />
                <Collections />                
                <Footer />
                <UpupGirl />
                <Girl />
                <BackTop />
                <SearchModal />
                <ChatBox />
                
            </div>
        );
    }    
    componentDidMount(){

        //JQuery Initialization

        let select = document.querySelectorAll('select'),
        sidenav = document.querySelectorAll('.sidenav'),
        dropdown = document.querySelectorAll('.dropdown-trigger'),
        collapsible = document.querySelectorAll('.collapsible'),
        datepicker = document.querySelectorAll('.datepicker'),
        modal = document.querySelectorAll('.modal'),
        tabs = document.querySelectorAll('.tabs'),
        slider = document.querySelectorAll('.carousel');
    

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown,{coverTrigger : false});
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        M.Tabs.init(tabs);
        M.Carousel.init(slider,{fullWidth:true,indicators:true});

        $('#back-top').each(function(){
            $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
            });
        });


    }
}

export default MangaText;
