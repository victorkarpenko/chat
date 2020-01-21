import React from 'react';

import {Auth, Home} from "./pages";
import {Route} from "react-router";

const App = () => {
    return (
        <div className="App">
            <Route exact path={['/', '/login']} component={Auth}/>
            <Route path={'/im'} component={Home}/>

        </div>
    );
};


export default App;
