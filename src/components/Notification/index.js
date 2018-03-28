import React from 'react';
import classNames from 'classnames';

export class Notification extends React.Component {

    state = {
        ripple: false,
        active: false,
    };

    rippleEvent = {};

    _onBtnClick() {
        let self = this;
        clearTimeout(self.rippleEvent);
        self.setState({ripple: true, active: !self.state.active});
        self.rippleEvent = setTimeout(() => {
            self.setState({ripple: false});
        }, 300)
    }

    render() {
        const {children, className, style, reverse} = this.props;
        const finalClassName = classNames(
            'tiny-notification',
            this.state.ripple ? 'ripple' : '',
            this.state.active ? 'active' : '',
            className
        );

        const finalContainerClassName = classNames(
            'tiny-notification__container',
            reverse ? 'right' : ''
        );
        return (<div className={finalClassName}
                     style={style}>
            <div className="tiny-notification__btn"
                 onClick={this._onBtnClick.bind(this)}>
                <svg t="1521975242016"
                     className="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     p-id="2173"
                     width="100"
                     height="100">
                    <defs>
                        <style type="text/css"></style>
                    </defs>
                    <path
                        d="M384.12985 837.818182 197.818182 837.818182C159.261091 837.818182 128 801.346912 128 756.363635 128 711.380365 159.261091 674.909088 197.818182 674.909088L215.272727 674.909088 215.272727 450.909091C215.272727 302.641455 305.861818 179.115636 425.966545 151.380364 432.040727 102.039273 468.049455 64 512 64 555.950545 64 591.959273 102.039273 598.033455 151.380364 718.155635 179.115636 808.72727 302.641455 808.72727 450.909091L808.72727 674.909088 826.181818 674.909088C864.738912 674.909088 896 711.380365 896 756.363635 896 801.346912 864.738912 837.818182 826.181818 837.818182L639.870207 837.818182C636.829855 905.823571 580.757298 960 512 960 443.267596 960 387.171517 905.823571 384.12985 837.818182Z"
                        p-id="2174" fill="#ffffff"></path>
                </svg>
            </div>
            <div className="tiny-notification__container-arrow"></div>
            <div className={finalContainerClassName}>
                {children}
            </div>
        </div>);
    }
}