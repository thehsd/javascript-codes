// import React, { Component } from "react";

// stateFull
// export default class FirstComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputVal: "",
//       showNews: true,
//       news: {
//         id: 86023,
//         type: "unchanged",
//         content: "نسبت به دیروز",
//         related_url: "product/میلگرد-ذوب-آهن-اصفهان",
//         related_name: "میلگرد ذوب آهن اصفهان",
//         related_price: null,
//         created_at: "2024-08-29T09:47:30.000000Z",
//         updated_at: "2024-08-29 13:17:30",
//       },
//     };
//   }

//   render() {
//     const { news, showNews, inputVal } = this.state;

//     const handleShowNews = () => {
//       this.setState({ showNews: !showNews });
//     };
//     const setInputVal = () => {
//       this.setState({ inputVal: document.getElementById("inp").value });
//     };
//     return (
//       <>
//         <input type="text" name="" id="inp" onChange={setInputVal} />
//         <button onClick={handleShowNews}>show news</button>

//         {showNews && <NewsComponent newsData={news} value={inputVal} />}
//       </>
//     );
//   }
// }
import { useState } from "react";
import NewsComponent from "./NewsComponent";

const FirstComponent = () => {
  // const[state, setState] =useState();
  const [showNews, setShowNews] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [news, setNews] = useState({
    id: 86023,
    type: "unchanged",
    content: "نسبت به دیروز",
    related_url: "product/میلگرد-ذوب-آهن-اصفهان",
    related_name: "میلگرد ذوب آهن اصفهان",
    related_price: null,
    created_at: "2024-08-29T09:47:30.000000Z",
    updated_at: "2024-08-29 13:17:30",
  });
  const handleShowNews = () => {
    setShowNews(!showNews);
  };

  // Hooks
  return (
    <>
      <input
        type="text"
        name=""
        id="inp"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleShowNews}>show news</button>

      {showNews && <NewsComponent newsData={news} value={inputVal} />}
    </>
  );
};
export default FirstComponent;
