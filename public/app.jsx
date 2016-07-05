//Create React create class
var Greeter = React.createClass({
  //Render method: Only thing required in a react Component.
  render: function(){
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
