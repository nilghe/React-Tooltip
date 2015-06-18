// Usage
// 
// Add class "attach-tooltip" to the element you wish to have
// the tooltip to appear after

var React = require('react');

var Tooltip = React.createClass({
    
    getDefaultProps: function() {
        return {
            minHeight: 50,
            longTextClass: ' long-text' 
        }
    },

    componentDidMount: function() {
        var ele = React.findDOMNode(this.refs.tooltips);
        if (ele.scrollHeight > this.props.minHeight) {
            ele.className += this.props.longTextClass;
        }
    },

    render: function() {
        return (
            <div className="tooltip--react" ref="tooltips">
                {this.props.text}
            </div>
        );
    }
});

module.exports = Tooltip;