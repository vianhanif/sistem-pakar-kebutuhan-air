const ResultByUrine = React.createClass({
  backToStart: function(e){
    e.preventDefault();
    this.props.setPanelState(<Start setPanelState={this.props.setPanelState}/>);
  },
  goNext: function(){
    this.props.setPanelState(<Question question={data.app.questions[2]} questionState={2} setPanelState={this.props.setPanelState}/>);
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
                    <div className="urine-choosen">
                      <div className="urine-inner urine-image">
                        <div className={'urine '+data.app.questions[1].class}/>
                      </div>
                      <ul className="list-unstyled text-center">
                        <li><span className="urine-desc-light">{data.app.questions[1].answer}</span></li>
                      </ul>
                    </div>
                  </li>
                  <li className="text-description">
                    <span>So, if your urine color is <b className="text-colorized">{data.app.questions[1].answer}</b>, then it indicates that <b className="text-colorized">{data.app.questions[1].description}</b></span>
                  </li>
                </ul>
              </li>
              <li className="text-center">
                <button className="btn button button-center" onClick={this.goNext}><small>check out your daily water needs</small></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

// <li>
//   <span className="text-subtitle">This is your color</span>
// </li>
