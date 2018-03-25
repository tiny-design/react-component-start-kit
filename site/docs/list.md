## List
### Basic
Define an animated list.

:::
```js
    render() {
            const items = [];
            for (let i = 0; i < 4; i++) {
                items.push(<ListItem>
                    <div style={{
                        height: "50px",
                        width: "50px",
                        backgroundColor: "#75ADFF",
                        borderRadius: "5px"
                    }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{
                            height: "5px",
                            width: "50px",
                            backgroundColor: "#8f8f8f",
                            borderRadius: "5px",
                            marginTop: "5px",
                            marginBottom: "5px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        }}/>
                        {
                            [1, 2].map((d) => <div key={d} style={{
                                height: "5px",
                                width: "100px",
                                backgroundColor: "#8f8f8f",
                                borderRadius: "5px",
                                marginTop: "5px",
                                marginBottom: "5px",
                                marginLeft: "10px",
                                marginRight: "10px"
                            }}/>)
                        }
                    </div>
                </ListItem>);
            }
        return (
            <List style={{
                        width: "300px",
                  }}>{items}</List>
        );
    }
```
:::

### Custom Animation

:::
```js
    render() {
            const items = [];
            for (let i = 0; i < 4; i++) {
                items.push(<ListItem>
                    <div style={{
                        height: "50px",
                        width: "50px",
                        backgroundColor: "#75ADFF",
                        borderRadius: "5px"
                    }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{
                            height: "5px",
                            width: "50px",
                            backgroundColor: "#8f8f8f",
                            borderRadius: "5px",
                            marginTop: "5px",
                            marginBottom: "5px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        }}/>
                        {
                            [1, 2].map((d) => <div key={d} style={{
                                height: "5px",
                                width: "100px",
                                backgroundColor: "#8f8f8f",
                                borderRadius: "5px",
                                marginTop: "5px",
                                marginBottom: "5px",
                                marginLeft: "10px",
                                marginRight: "10px"
                            }}/>)
                        }
                    </div>
                </ListItem>);
            }
        return (
            <List style={{
                        width: "300px",
                  }}
                  animation={{easing: 'easeInOutQuad',
                              height: ['70%', '110%', '100%'],
                              width: ['120%', '70%', '100%']}}
                  >{items}</List>
        );
    }
```
:::

#### API

| Props | Description | Default Value |
| ------------- | ----------- | ----------- |
| className | Component className. | null |
| style | Component style. | null |
| animation | Animation object of the list. | null |

*p.s. All animations from [AnimeJS](http://animejs.com/documentation/) are supported*

### ListItem

Define a list item, embeddable to any List components.

#### API

| Props | Description | Default Value |
| ------------- | ----------- | ----------- |
| className | Component className. | null |
| style | Component style. | null |
| onClick | The onClick event trigger. | null |


&nbsp;
