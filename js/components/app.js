const App = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="list-unstyled text-center">
              <li><span className="text-title">{data.app.name}</span></li>
              <li className="text-border"><span className="text-long">{data.app.description}</span></li>
            </ul>
          </div>
        </div>
        <ExpertApp/>
        <List data={data.app.writers}/>
        <List data={data.app.credits}/>
      </div>
    );
  }
});
