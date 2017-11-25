### Button

This is a marked

::: 
```js
    render() {
        return (
            <div>
                <Button
                    type="primary">
                    I'm a Button
                </Button>
                <Button
                    type="success">
                    I'm a Button
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
