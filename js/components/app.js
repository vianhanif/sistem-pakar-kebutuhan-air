const App = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="list-unstyled">
              <li><span>{data.app.name}</span></li>
              <li><span>{data.app.description}</span></li>
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
