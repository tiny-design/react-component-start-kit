### Button

This is a marked

::: 
```js
    render() {
        return (
            <div>
                <Button
                    type="primary">
                    <span>I'm a Button</span>
                </Button>
                <Button
                    type="success">
                    <span>I'm a Button</span>
                </Button>
            </div>
        );
    }
```
:::

This element `div` is a wrapper.

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
