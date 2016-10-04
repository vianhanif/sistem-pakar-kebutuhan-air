const BasedOnGender = React.createClass({
  render: function(){
    return(
      <ul className="list-unstyled list-divider text-left">
        <li className="list-devider"><span className="text-subtitle">Based on Gender</span></li>
        <li>
          {(()=>{
            switch(data.app.questions[3].answer){
              case data.app.questions[3].choices[0]:
              return(
                <ul className="list-inline">
                  <li className="text-wide"><span className="text-label">Water Need</span></li>
                  <li><span className="text-item">{30*parseFloat(data.app.questions[2].answer)} ml or {Math.round((30*parseFloat(data.app.questions[2].answer))/200)} glasses per day</span></li>
                </ul>
              );
              break;

              case data.app.questions[3].choices[1]:
                switch(data.app.questions[4].answer){
                  case data.app.questions[4].choices[0]:
                  return(
                    <ul className="list-inline">
                      <li className="text-wide"><span className="text-label">Water Need</span></li>
                      <li><span className="text-item">{(30*parseFloat(data.app.questions[2].answer))+300} ml or {Math.round(((30*parseFloat(data.app.questions[2].answer))+300)/200)} glasses per day</span></li>
                    </ul>
                  );
                  case data.app.questions[4].choices[1]:
                  return(
                    <ul className="list-inline">
                      <li className="text-wide"><span className="text-label">Water Need</span></li>
                      <li><span className="text-item">{(30*parseFloat(data.app.questions[2].answer))+550} ml or {Math.round(((30*parseFloat(data.app.questions[2].answer))+550)/200)} glasses per day</span></li>
                    </ul>
                  );
                  break;

                  case data.app.questions[4].choices[2]:
                  return(
                    <ul className="list-inline">
                      <li className="text-wide"><span className="text-label">Water Need</span></li>
                      <li><span className="text-item">{30*parseFloat(data.app.questions[2].answer)} ml or {Math.round((30*parseFloat(data.app.questions[2].answer))/200)} glasses per day</span></li>
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
