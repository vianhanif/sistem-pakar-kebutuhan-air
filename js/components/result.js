const Result = React.createClass({
  backToStart: function(e){
    e.preventDefault();
    this.props.setPanelState(<Start setPanelState={this.props.setPanelState}/>);
  },
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-0 col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1">
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
                  <li>
                    <span className="text-subtitle">These are your records</span>
                  </li>
                  {data.app.questions.map(function(question, index){
                    return(
                      <li>
                        {(()=>{
                          if(question.index == "Drink" && (data.app.questions[1].answer == data.app.questions[1].choices[3].name || data.app.questions[1].answer == data.app.questions[1].choices[4].name)){
                            if(question.answer){
                              return(
                                <ul className="list-inline">
                                  <li>
                                    <ul className="list-inline">
                                      <li className="text-wide"><span className="text-label text-label-addon">{question.index}</span></li>
                                      <li><span className="text-item">{question.answer} {question.postfix}</span></li>
                                    </ul>
                                  </li>
                                </ul>
                              );
                            }
                          }else if(index == 4){
                            if(data.app.questions[3].answer == 'Female'){
                              return(
                                <ul className="list-inline">
                                  <li>
                                    <ul className="list-inline">
                                      <li className="text-wide"><span className="text-label text-label-addon">{question.index}</span></li>
                                      <li><span className="text-item">{question.answer} {question.postfix}</span></li>
                                    </ul>
                                  </li>
                                </ul>
                              );
                            }
                          }else if(index == 6){
                            if(data.app.questions[1].answer == data.app.questions[1].choices[3].name || data.app.questions[1].answer == data.app.questions[1].choices[4].name){
                              return(
                                <ul className="list-inline">
                                  <li>
                                    <ul className="list-inline">
                                      <li className="text-wide"><span className="text-label text-label-addon">{question.index}</span></li>
                                      <li><span className="text-item">{question.answer} {question.postfix}</span></li>
                                    </ul>
                                  </li>
                                </ul>
                              );
                            }
                          }else if(question.index != "Drink"){
                            if(question.answer){
                              return(
                                <ul className="list-inline">
                                  <li>
                                    <ul className="list-inline">
                                      <li className="text-wide"><span className="text-label text-label-addon">{question.index}</span></li>
                                      <li><span className="text-item">{question.answer} {question.postfix}</span></li>
                                    </ul>
                                  </li>
                                </ul>
                              );
                            }
                          }else{
                            return(
                              <ul className="list-inline">
                                <li>
                                  <ul className="list-inline">
                                    <li className="text-wide"><span className="text-label text-label-addon">{question.index}</span></li>
                                    <li><span className="text-item">{question.answer} {question.postfix}</span></li>
                                  </ul>
                                </li>
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
              <li><Warning /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
