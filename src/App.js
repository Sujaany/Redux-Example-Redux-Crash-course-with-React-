import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Post from "./Components/Post";
import PostForm from "./Components/PostForm";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Redux</h1>
          </header>
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}
