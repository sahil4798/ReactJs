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

        <Modal closed={this.closeModal} show={this.state.modalIsOpen} />

        {this.state.modalIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.openModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />

        <Transition
          in={this.state.showBlock}
          timeout={2000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("enter")}
          onEntering={() => {
            console.log("Entering");
          }}
          onEntered={() => {
            console.log("Entered");
          }}
          onExit={() => {
            console.log("Exit");
          }}
          onExiting={() => {
            console.log("Exiting");
          }}
          onExited={() => {
            console.log("Exited");
          }}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 150,
                height: 150,
                margin: "auto",
                transition: "",
                opacity: state === "exiting" ? 0 : 1,
                transition: "opacity 2s ease-out",
                border: "2px solid black ",
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
