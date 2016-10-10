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
          <div className="col-xs-12 col-xs-offset-0 col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 text-center">
            {this.state.panelState}
          </div>
        </div>
      </div>
    );
  }
});
