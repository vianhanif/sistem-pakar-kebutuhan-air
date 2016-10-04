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
                                <li><span className="text-item">{question.answer}</span></li>
                              </ul>
                            );
                          }
                        })()}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <ul className="list-unstyled list-divider text-left">
                  <li className="list-devider"><span className="text-subtitle">Based on Gender</span></li>
                  <li>
                    {(()=>{
                      switch(data.app.questions[2].answer){
                        case data.app.questions[2].choices[0]:
                        return(
                          <ul className="list-inline">
                            <li className="text-wide"><span className="text-label">Water Need</span></li>
                            <li><span className="text-item">{30*parseFloat(data.app.questions[1].answer)} ml</span></li>
                          </ul>
                        );
                        break;

                        case data.app.questions[2].choices[1]:
                          switch(data.app.questions[3].answer){
                            case data.app.questions[3].choices[0]:
                            return(
                              <ul className="list-inline">
                                <li className="text-wide"><span className="text-label">Water Need</span></li>
                                <li><span className="text-item">{(30*parseFloat(data.app.questions[1].answer))+300} ml</span></li>
                              </ul>
                            );
                            case data.app.questions[3].choices[1]:
                            return(
                              <ul className="list-inline">
                                <li className="text-wide"><span className="text-label">Water Need</span></li>
                                <li><span className="text-item">{(30*parseFloat(data.app.questions[1].answer))+550} ml</span></li>
                              </ul>
                            );
                            break;

                            case data.app.questions[3].choices[2]:
                            return(
                              <ul className="list-inline">
                                <li className="text-wide"><span className="text-label">Water Need</span></li>
                                <li><span className="text-item">{30*parseFloat(data.app.questions[1].answer)} ml</span></li>
                              </ul>
                            );
                            break;
                          }
                        break;
                      }
                    })()}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
