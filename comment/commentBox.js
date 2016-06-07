/**
 * Created by 20164411 on 2016/6/7.
 */
var CommentBoxComponent = React.createClass({
    getInitialState: function () {
        return {data:[{title:'20160616', value:'2016'}, {title:'20170617', value:'2017'}]};
    },
    submitComment: function (name, some) {
        var _oldData = this.state.data;
        _oldData.push({title: name, value:some});
        this.setState({
            data:_oldData,
        })
    },
    render: function() {
        return (
            <div className="comment-box">
                <h1>Comment Box</h1>
                <CommentListComponent data={this.state.data}/>
                <CommentFormComponent submitComment={this.submitComment}/>
            </div>
        );
    }
})


var CommentListComponent = React.createClass({
    render: function() {
        var comments = this.props.data.map(function($item) {
            return <CommentComponent item={$item} />
        });
        return (
            <div className="commentList">
                Hello, world! I am a CommentList.
                {comments}
            </div>
        );
    }
});


var CommentFormComponent = React.createClass({
    handlerClick: function (ev) {
        ev.preventDefault();
        if (this.refs.name.value && this.refs.some.value)
            this.props.submitComment(this.refs.name.value, this.refs.some.value);

        this.refs.some.value = '';
        this.refs.name.value = '';

        // console.log(this.refs.name.value);
        // console.log(this.refs.some.value);
    },
    render: function() {
        return (
            <div className="commentForm-div">
                <form className="commentForm">
                    <input type="text" placeholder="Your name" ref="name" />
                    <input type="text" placeholder="Say something..." ref="some" />
                    <input type="submit" value="Post" onClick={this.handlerClick}/>
                </form>
            </div>
        );
    }
});

var CommentComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.item.title} - {this.props.item.value}</h1>
            </div>
        )
    }
})

ReactDOM.render(
    <CommentBoxComponent/>,
    document.getElementById('container')
)