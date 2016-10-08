const BasedOnGender = React.createClass({

  que: function(index){
    return data.app.questions[index];
  },
  default: function(){
    return 0.03;
  },
  weight: function(){
    return parseFloat(this.que(2).answer).toFixed(2);
  },
  exercise: function(){
    return this.que(5).answer == 'Yes' ? 0.5 : 0;
  },
  normal: function(){
    return (parseFloat(Math.round((this.default()*this.weight() + this.exercise() )* 100)/100));
  },
  pregnant: function(){
    return (parseFloat(Math.round((this.default()*this.weight()+0.3+ this.exercise())* 100)/100));
  },
  breastfeed: function(){
    return (parseFloat(Math.round((this.default()*this.weight()+0.55 + this.exercise())* 100)/100));
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
  render: function(){
    let _ = this;
    return(
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
    );
  }
});
