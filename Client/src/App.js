import React from 'react';
import AppRouter from './AppRouter/AppRouter';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <AppRouter />
            </div>
        );
    }
    
}

export default App;
