import React, {Component} from 'react';
import {HashRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import SideBar from './components/SideBar';
import ListPage from './components/list';
import SearchBarPage from './components/search-bar';
import SliderMenuPage from './components/slider-menu';
import {SliderMenu} from '../../lib/SliderMenu';
import {MenuItem} from '../../lib/MenuItem';
import {List, ListItem} from '../../lib/List';
import {SearchBar} from '../../lib/SearchBar';
import {Debounce} from "../../lib/Utils";

class App extends Component {

    render() {
        return (
            <div className="demo">
                <SideBar/>
                <main>
                    <Switch>
                        <Route exact path="/"
                               component={SliderMenuPage}/>
                        <Route path="/components/slider-menu"
                               component={SliderMenuPage}/>
                        <Route path="/components/list"
                               component={ListPage}/>
                        <Route path="/components/search-bar"
                               component={SearchBarPage}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App