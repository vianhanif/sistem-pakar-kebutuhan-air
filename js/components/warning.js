const Warning = React.createClass({
  render: function(){
    return(
      <div>
        {(()=>{
          if(data.app.questions[1].warning){
            return(
              <div className="row">
                <div className="col-xs-12">
                  <div className="panel-warning">
                    <ul className="list-inline">
                      <li><i className="fa fa-exclamation icon-warning"></i></li>
                      <li className="text-warning"><span>{data.app.questions[1].warning}</span></li>
                    </ul>
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
