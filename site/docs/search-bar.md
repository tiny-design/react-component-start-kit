## Search Bar
### Basic
Define search input textbox.

:::
```js
    constructor(props) {
       super(props);
       this.state = {
            suggestions: []
       };
    }

    render() {
        return (
            <SearchBar autocomplete
                       onInputChange={this._onInputChange.bind(this)}>
                       {this.state.suggestions}
            </SearchBar>
        );
    }

    renderSuggestions() {
        return Debounce(
            (self, suggestions)=>{
                self.setState({suggestions});
            }, 400);
    }

    _onInputChange(evt) {
        // request suggestions here
        const suggestions = evt.target.value?[
              <li>Suggestion for {evt.target.value}...</li>,
              <li>Suggestion for {evt.target.value}...</li>,
              <li>Suggestion for {evt.target.value}...</li>]:[];
        this.renderSuggestions(this, suggestions);
    }

```
:::

#### API

| Props | Description | Default Value |
| ------------- | ----------- | ----------- |
| className | Component className. | null |
| style | Component style. | null |
| autocomplete | Auto-completion of input | false |
| onInputChange | Event trigger for input change | null |


&nbsp;
