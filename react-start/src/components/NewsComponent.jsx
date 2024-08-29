import React, { Component } from "react";
import LinkComponent from "./LinkComponent";
// stateLess
export default class NewsComponent extends Component {
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    console.log("render");

    const updateTime = new Date(this.props.newsData.updated_at);
    return (
      <>
        <p>value : {this.props.value}</p>
        <div>
          <LinkComponent url={this.props.newsData.related_url}>
            {this.props.newsData.related_name}
          </LinkComponent>
          <p>
            {updateTime.toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </>
    );
  }
}
