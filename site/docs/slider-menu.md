## Menu
### SliderMenu

Define a menu with slider effect.

:::
```js
    render() {
        return (
            <div>
                <SliderMenu displayLength={4}
                            style={{width: "400px"}}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8]
                                        .map((d) => <MenuItem key={d}>
                                                              TAB {d + 1}
                                                    </MenuItem>)}
                </SliderMenu>
            </div>
        );
    }
```
:::

#### API

| Option | Description |
| ------------- | ----------- |
| className | Component className. |
| style | Component style. |
| displayLength | The length of tabs to display in the menu. |

### MenuItem

Define a menu tab, embeddable to any Menu components.

#### API

| Option | Description |
| ------------- | ----------- |
| className | Component className. |
| style | Component style. |
| onClick | The onClick event trigger. |