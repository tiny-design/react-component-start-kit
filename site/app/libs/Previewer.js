/**
 * Created by wangdi on 23/11/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const Babel = require('@babel/standalone');
import {Button} from '../../../lib';
import Editor from './Editor';

export default class Previewer extends Component {

    constructor(props) {
        super(props);
        this._renderSource = this._renderSource.bind(this);
        this.playerId = `${parseInt(Math.random() * 1e9).toString(36)}`;
        this.editDoc = this.props.doc;
    }

    componentDidMount() {
        this._renderSource(this.props.doc);
    }

    _renderSource(doc) {
        const args = ['React', 'ReactDOM', 'Button'];
        const argv = [React, ReactDOM, Button];

        const jsCode = Babel.transform(`class Demo extends React.Component{
            ${doc}
         }

         ReactDOM.render(<Demo />, document.getElementById('${this.playerId}'))`,
            {
                presets: ['es2015', 'react']
            });

        args.push(jsCode.code);
        this.editDoc = doc;
        new Function(...args).apply(null, argv);
    }

    render() {
        return (
            <div className="tiny-previewer-container">
                <div className="canvas" id={this.playerId}/>
                <div onClick={this._togglePreviewerOnClick.bind(this)}>
                    <Editor
                        value={this.editDoc}
                        onChange={code => this._renderSource(code)}
                    />
                </div>
            </div>
        );
    }

    _togglePreviewerOnClick(){

    }
}

Previewer.propTypes = {
    doc: PropTypes.string,
};