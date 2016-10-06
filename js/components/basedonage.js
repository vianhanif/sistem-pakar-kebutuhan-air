const BasedOnAge = React.createClass({
  que: function(index){
    return data.app.questions[index];
  },
  exercise: function(){
    return this.que(5).answer == 'Yes' ? 0.5 : 0;
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
  male1: function(){
    return data.app.questions[3].answer == 'Male' ? 2.4 : 2.1;
  },
  male2: function(){
    return data.app.questions[3].answer == 'Male' ? 3.3 : 2.3;
  },
  male3: function(){
    return data.app.questions[3].answer == 'Male' ? 3.7 : 2.7;
  },
  render: function(){
    let _ = this;
    return(
      <ul className="list-unstyled list-divider text-left">
        <li className="list-devider"><span className="text-subtitle">Based on Age</span></li>
        <li>
          {(()=>{
            let age = parseFloat(data.app.questions[1].answer);
            if(age >= 0 && age <= .5){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{0.7+_.exercise()} {_.satuan()} ({_.lainnya(0.7+_.exercise())}) per day, assumed to be from human milk</span></li>
                </ul>
              );
            }else if(age >= .6 && age < 1){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{0.8+_.exercise()} {_.satuan()} ({_.lainnya(0.8+_.exercise())}) per day, assumed to be from human milk and complementary foods and beverages</span></li>
                </ul>
              );
            }else if(age >= 1 && age <= 3){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{1.3+_.exercise()} {_.satuan()} ({_.lainnya(1.3+_.exercise())}) per day</span></li>
                </ul>
              );
            }else if(age >= 4 && age <= 8){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{1.7+_.exercise()} {_.satuan()} ({_.lainnya(1.7+_.exercise())}) per day</span></li>
                </ul>
              );
            }else if(age >= 9 && age <= 13){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{_.male1() + _.exercise()} {_.satuan()} ({_.lainnya(_.male1() + _.exercise())}) per day</span></li>
                </ul>
              );
            }else if(age >= 14 && age <= 18){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{_,male2() + _.exercise()} {_.satuan()} ({_.lainnya(_.male2() + _.exercise())}) per day</span></li>
                </ul>
              );
            }else if(age >= 19){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label text-label-addon">Water Need</span></li>
                  <li><span className="text-item">{_.male3() + _.exercise()} {_.satuan()} ({_.lainnya(_.male3() + _.exercise())}) per day</span></li>
                </ul>
              );
            }
          })()}
        </li>
      </ul>
    );
  }
});
