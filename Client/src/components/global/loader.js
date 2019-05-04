import React from 'react';

class Loader extends React.Component {

    render() {
        return (
            <div className="loader">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer" >
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.body.setAttribute('data-page', 'loader');
    }

    componentWillUnmount() {
        if (document.body.hasAttribute('data-page')) {
            document.body.removeAttribute('data-page');
        }
    }

}

export default Loader;