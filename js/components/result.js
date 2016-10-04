const Result = React.createClass({
  backToStart: function(e){
    e.preventDefault();
    this.props.setPanelState(<Start setPanelState={this.props.setPanelState}/>);
  },
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <ul className="list-unstyled">
              <li className="list-divider">
                <li>
                  <ul className="list-inline">
                    <li className="pull-left">
                      <button className="btn button button-back" onClick={this.backToStart}>Back</button>
                    </li>
                    <li className="text-centered">
                      <span className="text-subtitle">Result</span>
                    </li>
                  </ul>
                </li>
              </li>
              <li>
                <ul className="list-unstyled list-divider text-left">
                  {data.app.questions.map(function(question, index){
                    return(
                      <li>
                        {(()=>{
                          if(question.answer){
                            return(
                              <ul className="list-inline">
                                <li className="text-wide"><span className="text-label">{question.index}</span></li>
                                <li><span className="text-item">{question.answer} {question.postfix}</span></li>
                              </ul>
                            );
                          }
                        })()}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li><BasedOnGender /></li>
              <li><BasedOnAge /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
