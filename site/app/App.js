/**
 * Created by wangdi on 20/11/17.
 */
import React, {Component} from 'react';
import ButtonPage from '../app/components/button';
import {Button, Alert} from '../../lib/index';

class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={()=>{alert('hha')}}>Click</Button>
                <Alert>This is a alert</Alert>
                <ButtonPage/>

            </div>
        );
    }
}

export default App