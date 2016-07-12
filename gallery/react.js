 var React = require('react');
 var ReactDOM = require('react-dom');

 require('./style.css');
 
 var ImageList = React.createClass({
        render:function() {
          return (
            <div>
              {      
                     this.props.data.map(function(img) {
                        return <Image path={img} onClick={this.props.onClick} key={img} />
                      }.bind(this))
                }
              </div>
          )
        }
      })

      
      var Image = React.createClass({
        render:function() {
          return (
            <span onClick={this.props.onClick}>
              <img src={this.props.path} />
            </span>
          )
        }
      })
      
      var ImageSelect = React.createClass({
        render:function() {
          return (
            <div className="big"><img src={this.props.select} /></div>
          )
        }
      })

      var Layout = React.createClass({
        getInitialState: function() {
        var data = ['1.jpg', '2.jpg', '3.jpg'];
          return {
            data: data,
            select: data[parseInt(parseInt(Math.random() * 3))]
          }
        },
        handlerClick:function(ev) {
              this.setState({
                select: ev.target.src
              })
          },
          render: function() {
            return(
              <div>
                <ImageList data={this.state.data} onClick={this.handlerClick} />
                <ImageSelect select={this.state.select} />
            </div>
            )
          }
      })
    
    ReactDOM.render(<Layout />, document.getElementById('example'))