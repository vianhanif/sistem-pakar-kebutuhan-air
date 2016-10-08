const Question = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      showError: null,
    };
  },
  handleChange: function(e){
    this.setState({text: e.target.value});
    this.setState({showError: null});
  },
  handleEvent: function(){
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
  handlePress: function(e){
    if(e.key == 'Enter'){
      this.handleEvent();
    }
  },
  handleClickText: function(e){
    e.preventDefault();
    this.handleEvent();
  },
  handleClickChoice: function(_choice){
    data.app.questions[this.props.questionState].answer = $('#' + _choice).text();
    // console.log(data.app.questions[this.props.questionState].answer);
    this.nextQuestion();
  },
  handleClickImage: function(_choice){
    data.app.questions[this.props.questionState].answer = $('#' + _choice).text();
    this.nextQuestion();
  },
  nextQuestion: function(){
    if((this.props.questionState + 1) < data.app.questions.length){
      if(this.props.questionState + 1 == 4){
        if(data.app.questions[3].answer == 'Female'){
          this.props.setPanelState(<Question question={data.app.questions[this.props.questionState + 1]} questionState={this.props.questionState + 1} setPanelState={this.props.setPanelState}/>);
        }else{
          this.props.setPanelState(<Question question={data.app.questions[this.props.questionState + 2]} questionState={this.props.questionState + 2} setPanelState={this.props.setPanelState}/>);
        }
      }else{
          this.props.setPanelState(<Question question={data.app.questions[this.props.questionState + 1]} questionState={this.props.questionState + 1} setPanelState={this.props.setPanelState}/>);
      }
    }else{
      this.props.setPanelState(<Result setPanelState={this.props.setPanelState}/>);
    }
  },
  imageQuestion: function(){
    let click = this;
    return(
      <div>
        <div className="col-xs-12">
          <span className="text-subtitle">{this.props.question.question}</span>
        </div>
        <div className="col-xs-12">
          <ul className="list-inline">
            {this.props.question.choices.map(function(choice, index){
              return(
                <li key={index}>
                  <button className="btn button button-select" onClick={() => click.handleClickImage(choice.name)}>
                    <ul className="list-inline">
                      <li><div className={'urine '+choice.class}></div></li>
                      <li className="urine-text"><span id={choice.name}>{choice.name}</span></li>
                    </ul>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
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
                <li><input type={this.props.question.type == 'number' ? 'number' : 'text'} className="form-control text-input" onChange={this.handleChange} value={this.state.text} name={this.props.question.name} autoComplete="off" onKeyPress={this.handlePress}/></li>
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
        <div className="col-xs-12">
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
      case 'image': return this.imageQuestion();break;
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
