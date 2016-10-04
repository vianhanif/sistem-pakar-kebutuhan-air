const BasedOnAge = React.createClass({
  render: function(){
    return(
      <ul className="list-unstyled list-divider text-left">
        <li className="list-devider"><span className="text-subtitle">Based on Age</span></li>
        <li>
          {(()=>{
            let age = parseFloat(data.app.questions[1].answer);
            if(age >= 0 && age <= .5){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{700} ml or {Math.round(700/200)} glasses per day of water, assumed to be from human milk</span></li>
                </ul>
              );
            }else if(age >= .6 && age < 1){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{800} ml or {Math.round(800/200)} glasses per day of water, assumed to be from human milk and complementary foods and beverages</span></li>
                </ul>
              );
            }else if(age >= 1 && age <= 3){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{1300} ml or {Math.round(1300/200)} glasses per day</span></li>
                </ul>
              );
            }else if(age >= 4 && age <= 8){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{1700} ml or {Math.round(1700/200)} glasses per day</span></li>
                </ul>
              );
            }else if(age >= 9 && age <= 13){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{data.app.questions[3].answer == 'Male' ? 2400 : 2100} ml or {Math.round((data.app.questions[3].answer == 'Male' ? 2400 : 2100)/200)} glasses per day</span></li>
                </ul>
              );
            }else if(age >= 14 && age <= 18){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{data.app.questions[3].answer == 'Male' ? 3300 : 2300} ml or {Math.round((data.app.questions[3].answer == 'Male' ? 3300 : 2300)/200)} glasses per day</span></li>
                </ul>
              );
            }else if(age >= 19){
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{data.app.questions[3].answer == 'Male' ? 3700 : 2700} ml or {Math.round((data.app.questions[3].answer == 'Male' ? 3700 : 2700)/200)} glasses per day</span></li>
                </ul>
              );
            }
          })()}
        </li>
      </ul>
    );
  }
});
