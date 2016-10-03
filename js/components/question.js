const Question = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      showError: null
    };
  },
  handleChange: function(e){
    this.setState({text: e.target.value});
    this.setState({showError: null});
  },
  handleClickText: function(e){
    e.preventDefault();
    if(this.state.text){
      this.setState({text: ''});
      this.setState({showError: null});
      data.app.questions[this.props.questionState].answer = $('input[name='+this.props.question.name+']').val();
      // console.log(data.app.questions[this.props.questionState].answer);
      this.nextQuestion();
    }else{
      this.setState({
        showError:
        <div className="col-xs-12 text-error">
          <span>Answer First</span>
        </div>
      });
    }
  },
  handleClickChoice: function(_choice){
    data.app.questions[this.props.questionState].answer = $('#' + _choice).text();
    // console.log(data.app.questions[this.props.questionState].answer);
    this.nextQuestion();
  },
  nextQuestion: function(){
    if((this.props.questionState + 1) < data.app.questions.length){
        this.props.setPanelState(<Question question={data.app.questions[this.props.questionState + 1]} questionState={this.props.questionState + 1} setPanelState={this.props.setPanelState}/>);
    }else{
      this.props.setPanelState(<Result/>);
    }
  },
  textQuestion: function(){
    return(
      <div>
        <div className="col-xs-12">
          <span className="text-subtitle">{this.props.question.question}</span>
        </div>
        <div className="col-xs-12">
          <ul className="list-inline">
            <li>
              <ul className="list-unstyled">
                <li><input type={this.props.question.type == 'number' ? 'number' : 'text'} className="form-control text-input" onChange={this.handleChange} value={this.state.text} name={this.props.question.name} autoComplete="off"/></li>
                <li>{this.state.showError}</li>
              </ul>
            </li>
            <li><button className="btn button" onClick={this.handleClickText}>Next</button></li>
          </ul>
        </div>
      </div>
    );
  },
  choiceQuestion: function(){
    let click = this;
    return(
      <div>
        <div className="col-xs-12">
          <span className="text-subtitle">{this.props.question.question}</span>
        </div>
        <div className="col-xs-6 col-xs-offset-3">
          <ul className="list-inline">
            {this.props.question.choices.map(function(choice, index){
              return(
                <li key={index}>
                  <button id={choice} className="btn button button-select" onClick={() => click.handleClickChoice(choice)}>{choice}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  },
  setQuestion: function(){
    switch(this.props.question.type){
      case 'text': return this.textQuestion();break;
      case 'number': return this.textQuestion();break;
      case 'choice': return this.choiceQuestion();break;
    }
  },
  render: function(){
    return(
      <div className="row">
        {this.setQuestion()}
      </div>
    );
  }
});
