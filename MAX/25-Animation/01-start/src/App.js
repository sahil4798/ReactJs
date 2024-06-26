import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen && (
          <Modal closed={this.closeModal} show={this.state.modalIsOpen} />
        )}
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button className="Button" onClick={this.openModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />

        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "",
                opacity: state === "exiting" ? 0 : 1,
                transition: "opacity 1s ease-out",
              }}
            ></div>
          )}
        </Transition>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
