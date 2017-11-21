import React, {Component} from 'react';
import marked from 'marked';
import Prism from 'prismjs';

// marked.setOptions({
//     highlight: function (code) {
//         return Prism.highlight(code, Prism.languages.javascript);
//     }
// });

export default class Markdown extends Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: marked(this.md())}}/>
        );
    }
}