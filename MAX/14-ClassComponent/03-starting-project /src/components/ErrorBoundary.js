import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { isErrorPresent: false };
  }

  componentDidCatch(error) {
    this.setState({ isErrorPresent: true });
    console.log(error);
  }

  render() {
    if (this.state.isErrorPresent) {
      return <p>Something Went Wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
