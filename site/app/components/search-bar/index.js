import Markdown from '../../libs/Markdown';

export default class SearchBar extends Markdown {

    readDoc() {
        return require('../../../docs/search-bar.md');
    }
}