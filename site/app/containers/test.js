import React from 'react';
import {Notification} from '../../../src/components/Notification';
import {ListItem} from "../../../src/components/List";
import '../../../src/styles/notification.css';

export default class TestPage extends React.Component {
    render() {
        return (<div className="test">
            <Notification reverse>
                <ListItem>
                    Message 1
                </ListItem>
                <ListItem>
                    Message 2
                </ListItem>
                <ListItem>
                    Message 3
                </ListItem>
            </Notification>
        </div>);
    }
}