/**
 * Created by wangdi on 23/11/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Previewer from './Previewer';

export default class Markdown extends Component {

    constructor(props) {
        super(props);
        this.components = new Map;

        let index = -1;
        let js = '';
        this.md = require('markdown-it')({}).use(require('markdown-it-container'), '', {
            render: (tokens, idx) => {
                if (tokens[idx].nesting === 1) {        //container_rg_open
                    index++;
                    if (tokens[idx + 1].info === 'js') {
                        js = tokens[idx + 1].content;
                    }

                    return this._formatOpening(index, js);
                } else {                                  //container_rg_close
                    return this._formatClosing();
                }
            }
        });
    }

    _formatOpening(index, js) {
        this.components.set(index, React.createElement(Previewer, {doc: js}));

        return (
            `<div class="example-container">
                <div id="${index}"></div>
                <details style="display: none">
                    <summary>Toggle Code Snippets</summary>
                    <div class="code-container">`
        );
    }

    _formatClosing() {
        return (
            `</div>
            </details>
            </div>`
        );
    }

    componentDidMount() {
        this.renderDOM();
    }

    componentDidUpdate() {
        this.renderDOM();
    }

    renderDOM() {
        for (const [id, component] of this.components) {
            const div = document.getElementById(id);

            if (div instanceof HTMLElement) {
                ReactDOM.render(component, div);
            }
        }
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.md.render(this.readDoc())}}/>
        );
    }

}