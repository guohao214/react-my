'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

require('./style.css');

var ImageList = React.createClass({
  displayName: 'ImageList',

  render: function render() {
    return React.createElement(
      'div',
      null,
      this.props.data.map(function (img) {
        return React.createElement(Image, { path: img, onClick: this.props.onClick, key: img });
      }.bind(this))
    );
  }
});

var Image = React.createClass({
  displayName: 'Image',

  render: function render() {
    return React.createElement(
      'span',
      { onClick: this.props.onClick },
      React.createElement('img', { src: this.props.path })
    );
  }
});

var ImageSelect = React.createClass({
  displayName: 'ImageSelect',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'big' },
      React.createElement('img', { src: this.props.select })
    );
  }
});

var Layout = React.createClass({
  displayName: 'Layout',

  getInitialState: function getInitialState() {
    var data = ['1.jpg', '2.jpg', '3.jpg'];
    return {
      data: data,
      select: data[parseInt(parseInt(Math.random() * 3))]
    };
  },
  handlerClick: function handlerClick(ev) {
    this.setState({
      select: ev.target.src
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(ImageList, { data: this.state.data, onClick: this.handlerClick }),
      React.createElement(ImageSelect, { select: this.state.select })
    );
  }
});

ReactDOM.render(React.createElement(Layout, null), document.getElementById('example'));
