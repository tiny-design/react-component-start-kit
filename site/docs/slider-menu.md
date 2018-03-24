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

| Props | Description | Default Value |
| ------------- | ----------- | ----------- |
| className | Component className. | null |
| style | Component style. | null |
| displayLength | The number of tabs to display in the menu. | 3 |

### MenuItem

Define a menu tab, embeddable to any Menu components.

#### API

| Props | Description | Default Value |
| ------------- | ----------- | ----------- |
| className | Component className. | null |
| style | Component style. | null |
| onClick | The onClick event trigger. | null |


&nbsp;
