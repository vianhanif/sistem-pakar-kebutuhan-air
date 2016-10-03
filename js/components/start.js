const Start = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.setPanelState(<Question question={data.app.questions[0]} questionState={0} setPanelState={this.props.setPanelState}/>);
  },
  render: function(){
    return(
      <button className="btn button button-main" onClick={this.handleClick}>Start</button>
    );
  }
});
