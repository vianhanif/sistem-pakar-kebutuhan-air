const Warning = React.createClass({
  render: function(){
    return(
      <div>
        {(()=>{
          if(data.app.questions[1].warning){
            return(
              <div className="row">
                <div className="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
                  <div className="panel-warning">
                    <div className="row">
                      <div className="col-xs-1 text-center">
                        <i className="fa fa-exclamation icon-warning"></i>
                      </div>
                      <div className="col-xs-11 text-warning">
                        <span>{data.app.questions[1].warning}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })()}
      </div>
    );
  }
});
