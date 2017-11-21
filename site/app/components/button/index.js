import Markdown from '../../lib/Markdown';

export default class Button extends Markdown{

    readDoc(){
        return require('../../../docs/button.md');
    }
}