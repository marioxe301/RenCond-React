# RenCond-React
Conditional Render React Component with Typescript
# How to use
Yo can install the package directly using the Node Package Manager

```sh
npm install rencond-react
```

# Usage
The component have 5 attributes:

| Attribute | Require? | Description | Type |
| --------- | -------- | ----------- | ---- |
| ComponentIf | **Yes** | The functional component that would render if the If condition is True | **React FC**
| ComponentElse | **No** | The functional component that would render if the If condition is False | **React FC**
| RenderIf | **Yes** | Condition used for the render of the component | **boolean**
| ComponentIfProps | **No** | Props you can send to the If Component | **any**
| ComponentElseProps | **No** | Props you can send to the Else Component | **any**

### Import
```js
import RenCond from 'rencond-react'
```
### Use
```html import RenCond from 'rencond-react'
<RenCond
 ComponentIf={someComponent}
 RenderIf={condition}
/>
```
# Example
Simple example of the usage
### Code (Example)
![Code Example](/assets/example-code.png "Usage Example")
