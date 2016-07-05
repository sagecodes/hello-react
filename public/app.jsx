//Create React create class
var Greeter = React.createClass({
  //Render method: Only thing required in a react Component.
  render: function(){
    return (
      <div>
        <h1>Hello React</h1>
        <p>This is from the Component</p>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
