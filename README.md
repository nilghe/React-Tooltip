# React-Tooltip
A simple tooltip component for React

# Quick Start

1. Include the tooltip component `tooltip.react.js` inside your parent react component.

javascript
```
var ToolTip   = require('../../../utils/tooltip.react');

...

render: funciton() {
	return (
		<input className="attach-tooltip" type="text" />
		<ToolTip text={"This is a tooltip"} />
	);
}
```

2. Add `_tooltip-react.scss` to your SASS file

# Defaults / Options

* minHeight: 50           
  * minHeight - If the tooltip height goes beyond this it will add the `longTextClass` to apply appropriate CSS



