import React from "react";
import "./BackTop.scss";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export default function BackTop() {
  // const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const checkScrollTop = () => {
  //   if (!showScroll && window.pageYOffset > 0) {
  //     setShowScroll(true);
  //   } else if (showScroll && window.pageYOffset <= 400) {
  //     setShowScroll(false);
  //   }
  // };

  // window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <div onClick={scrollTop} className="back-to-top">
        <KeyboardArrowUpIcon style={{ fontSize: "5vh" }} />
      </div>
    </>
  );
}
