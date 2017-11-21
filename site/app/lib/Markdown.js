import React, {Component} from 'react';
const md = require('markdown-it')();
import Prism from 'prismjs';

export default class Markdown extends Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: md.render(this.readDoc())}}/>
        );
    }

}