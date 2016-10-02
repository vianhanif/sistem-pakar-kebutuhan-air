const List = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <ul className="list-unstyled">
            <li><span className="text-subtitle">{this.props.data.title}</span></li>
            {this.props.data.list.map(function(data, index){
              return(
                <li key={index}><span className="test-list">{data.name}</span></li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
});
