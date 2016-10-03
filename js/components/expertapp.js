const ExpertApp = React.createClass({
  getInitialState: function(){
    return {
      panelState: <Start setPanelState={this.setPanelState}/>
    }
  },
  setPanelState: function(_panelState){
    this.setState({panelState: _panelState});
  },
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 text-center">
            {this.state.panelState}
          </div>
        </div>
      </div>
    );
  }
});
