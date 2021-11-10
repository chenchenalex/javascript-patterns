/* In react, we have HOC, higher order function */
class BaseComponent {
  render() {
    // ...
  }
}

function WithSelectable(WrappedComponet, options) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSelected: true,
      };
    }
    render() {
      return <WrappedComponent isSelected={this.state.isSelected} />;
    }
  };
}
