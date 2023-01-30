import { useLayoutEffect } from "react";
// import "../Styles/Loader.css";
import { LoaderWrapper, Loading } from "../Styles/StyledLoader.js";
const Loader = () => {
  // useLayoutEffect(() => {
  //   const loader = document.getElementById("loader");
  //   setTimeout(() => {
  //     loader.classList.add("loaded");
  //     setTimeout(() => {
  //       document.body.removeChild(loader);
  //     }, 300);
  //   }, 2000);
  // }, []);

  return (
    <>
      <LoaderWrapper>
        <Loading></Loading>
      </LoaderWrapper>
    </>
    // <>
    //   <div id="loader" className="loading">
    //     <span className="loader"></span>
    //   </div>
    // </>
  );
};

export default Loader;
