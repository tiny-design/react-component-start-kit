/**
 * Created by wangdi on 23/11/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const Babel = require('@babel/standalone');
import {Button} from '../../../lib';

export default class Previewer extends Component {

    constructor(props) {
        super(props);
        this.playerId = `${parseInt(Math.random() * 1e9).toString(36)}`;
    }

    componentDidMount() {
        const args = ['React', 'ReactDOM', 'Button'];
        const argv = [React, ReactDOM, Button];

        const jsCode = Babel.transform(`class Demo extends React.Component{
            ${this.props.doc}
         }

         ReactDOM.render(<Demo />, document.getElementById('${this.playerId}'))`,
            {
                presets: ['es2015', 'react']
            });

        args.push(jsCode.code);
        new Function(...args).apply(null, argv);
    }

    render() {
        return (
            <div id={this.playerId}/>
        );
    }

}