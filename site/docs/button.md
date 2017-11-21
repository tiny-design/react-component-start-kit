### Button

This is a marked

```js
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: marked(button)}} />
        );
    }
}
```

This element `div` is a wrapper.

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
