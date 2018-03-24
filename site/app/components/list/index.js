import Markdown from '../../libs/Markdown';

export default class List extends Markdown {

    readDoc() {
        return require('../../../docs/list.md');
    }
}