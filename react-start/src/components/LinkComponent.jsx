import React, { Component } from "react";

export default class LinkComponent extends Component {
  render() {
    const { url, children } = this.props;
    return <a href={`https://esfahanahan.com/${url}`}>{children}</a>;
  }
}
