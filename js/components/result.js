const Result = React.createClass({
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <ul className="list-unstyled">
              <li className="list-divider"><span className="text-subtitle">Result</span></li>
              <li>
                <ul className="list-unstyled list-divider text-left">
                  {data.app.questions.map(function(question, index){
                    return(
                      <li>
                        <ul className="list-inline">
                          <li className="text-wide"><span className="text-label">{question.index}</span></li>
                          <li><span className="text-item">{question.answer}</span></li>
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
