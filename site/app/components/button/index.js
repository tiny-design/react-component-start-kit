import Markdown from '../../libs/Markdown';

export default class Button extends Markdown{

    readDoc(){
        return require('../../../docs/button.md');
    }
}