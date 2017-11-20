/**
 * Created by wangdi on 20/11/17.
 */
import React, {Component} from 'react';
import marked from 'marked';
import button from '../docs/button.md';

class App extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: marked(button)}} />
        );
    }
}

export default App