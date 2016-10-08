const BasedOnGender = React.createClass({

  getInitialState: function(){
    return {
      need: 0
    };
  },

  que: function(index){
    return data.app.questions[index];
  },
  default: function(){
    return 0.03;
  },
  weight: function(){
    return parseFloat(this.que(3).answer).toFixed(2);
  },
  drink: function(){
    let drunk = 0;
    if(this.que(1).answer == this.que(1).choices[3].name || this.que(1).answer == this.que(1).choices[4].name){
      drunk = parseFloat(this.que(7).answer);
    }
    return drunk;
  },
  exercise: function(){
    return this.que(6).answer == 'Yes' ? 0.55 : 0;
  },
  normal: function(){
    this.setState({need: (parseFloat(Math.round(( (this.default()*this.weight()) + this.exercise()) * 100)/100)) });
    return (parseFloat(Math.round(( (this.default()*this.weight()) + this.exercise()) * 100)/100));
  },
  pregnant: function(){
    this.setState({need: (parseFloat(Math.round((this.default()*this.weight()+0.3+ this.exercise()) * 100)/100)) });
    return (parseFloat(Math.round((this.default()*this.weight()+0.3+ this.exercise()) * 100)/100));
  },
  breastfeed: function(){
    this.setState({need: (parseFloat(Math.round((this.default()*this.weight()+0.55 + this.exercise()) * 100)/100)) });
    return (parseFloat(Math.round((this.default()*this.weight()+0.55 + this.exercise()) * 100)/100));
  },
  glass: function(arg){
    return Math.round(arg/0.25) + ' glass';
  },
  botol: function(arg){
    return Math.round(arg/0.6) + ' bottle';
  },
  cangkir: function(arg){
    return Math.round(arg/0.24) + ' cup';
  },
  satuan: function(){
    return 'L';
  },
  lainnya: function(arg){
    return this.botol(arg) + " / " + this.cangkir(arg) + ' / ' + this.glass(arg);
  },
  rest: function(arg){
    return (parseFloat(Math.round( arg * 100)/100));
  },
  render: function(){
    let _ = this;
    return(
      <div>
        <ul className="list-unstyled list-divider text-left">
          <li className="list-devider"><span className="text-subtitle">Your Ideal Needs</span></li>
          <li>
            {(()=>{
              switch(_.que(4).answer){
                case _.que(4).choices[0]:
                return(
                  <ul className="list-inline">
                    <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                    <li><span className="text-item">{ _.normal() } {_.satuan()} ({_.lainnya(_.normal())}) per day</span></li>
                  </ul>
                );
                break;

                case _.que(4).choices[1]:
                  switch(_.que(5).answer){
                    case _.que(5).choices[0]:
                    return(
                      <ul className="list-inline">
                        <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                        <li><span className="text-item">{_.pregnant()} {_.satuan()} ({_.lainnya(_.pregnant())}) per day</span></li>
                      </ul>
                    );
                    case _.que(5).choices[1]:
                    return(
                      <ul className="list-inline">
                        <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                        <li><span className="text-item">{_.breastfeed()} {_.satuan()} ({_.lainnya(_.breastfeed())}) per day</span></li>
                      </ul>
                    );
                    break;

                    case _.que(5).choices[2]:
                    return(
                      <ul className="list-inline">
                        <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                        <li><span className="text-item">{_.normal()} {_.satuan()} ({_.lainnya(_.normal())}) per day</span></li>
                      </ul>
                    );
                    break;
                  }
                break;
              }
            })()}
          </li>
        </ul>
        {(()=>{
          if(_.rest (_.state.need - _.drink()).toString().includes('-') || parseFloat(_.rest (_.state.need - _.drink())) <= 0.0){
            return(
              <ul className="list-unstyled list-divider text-left">
                <li className="list-devider"><span className="text-subtitle">Your needs Today</span></li>
                <li>
                  <span className="text-item-desc"> You already had enough water for today </span>
                </li>
              </ul>
            );
          }else{
            if(_.drink() > 0){
              return(
                <ul className="list-unstyled list-divider text-left">
                  <li className="list-devider"><span className="text-subtitle">Your needs Today</span></li>
                  <li>
                    <span className="text-item-desc">Today you only need to drink {_.rest (_.state.need - _.drink())} {_.satuan()} ({_.lainnya( _.rest(_.state.need - _.drink()))}) more  </span>
                  </li>
                </ul>
              );
            }
          }
        })()}
      </div>
    );
  }
});
