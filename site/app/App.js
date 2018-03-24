import React, {Component} from 'react';
import SliderMenuPage from './components/slider-menu';
import {SliderMenu} from '../../lib/SliderMenu';
import {MenuItem} from '../../lib/MenuItem';

class App extends Component {

    render() {
        return (
            <div className="demo">
                <main>
                    <SliderMenuPage/>
                </main>
            </div>
        );
    }
}

export default App