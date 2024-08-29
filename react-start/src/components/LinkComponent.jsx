// import React, { Component } from "react";

// export default class LinkComponent extends Component {
//   render() {
//     const { url, children } = this.props;
//     return <a href={`https://esfahanahan.com/${url}`}>{children}</a>;
//   }
// }
// useEffect
const LinkComponent = ({ url, children }) => {
  return <a href={`https://esfahanahan.com/${url}`}>{children}</a>;
};

export default LinkComponent;
{
  /* <Button>  </Button> */
}

// variant => primary || success || warning || error
// disabled = > true || false
// buttonType => outline ||
