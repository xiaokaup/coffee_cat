// src/js/components/Posts.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../../store/actions";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getData("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);