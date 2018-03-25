import Markdown from '../../libs/Markdown';

export default class Notification extends Markdown {

    readDoc() {
        return require('../../../docs/notification.md');
    }
}