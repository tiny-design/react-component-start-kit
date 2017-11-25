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
        //edit display state
        this.state = {
            toggleEditorState: true
        };
    }

    componentDidMount() {
        this._renderSource(this.props.doc);
        this.setState({toggleEditorState: false});
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
                <div className="toggle-button" onClick={this._togglePreviewerOnClick.bind(this)}>Toggle Code Editor</div>
                <div style={{display: this.state.toggleEditorState? 'block': 'none'}}>
                    <Editor
                        value={this.editDoc}
                        onChange={code => this._renderSource(code)}
                    />
                </div>
            </div>
        );
    }

    _togglePreviewerOnClick() {
        this.setState({toggleEditorState: !this.state.toggleEditorState});
    }
}

Previewer.propTypes = {
    doc: PropTypes.string,
};