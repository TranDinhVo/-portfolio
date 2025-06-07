import { useState, useEffect } from "react";
import LeftPart from "../components/leftpart";
import MobileMenu from "../components/mobile/menu";
import PreLoader from "../components/preloader";
import RightPart from "../components/rightpart";
import { FloatButton } from "antd";
import { isMobile } from "react-device-detect";
const Portfolio = () => {
  const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setHideLeftPart(true);
    }
  }, [isMobile]);
  return (
    <>
      {/*<!-- WRAPPER ALL -->*/}
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>

        {/*<!-- PRELOADER -->*/}
        <PreLoader />
        {/*<!-- /PRELOADER -->*/}

        {/*<!-- MOBILE MENU -->*/}
        <MobileMenu />
        {/*<!-- /MOBILE MENU -->*/}

        {/*<!-- CONTENT -->*/}
        <div className="arlo_tm_content">
          {/*<!-- LEFTPART -->*/}
          <LeftPart
            hideLeftPart={hideLeftPart}
            setHideLeftPart={setHideLeftPart}
          />
          {/*<!-- /LEFTPART -->*/}

          {/*<!-- RIGHTPART -->*/}
          <RightPart
            hideLeftPart={hideLeftPart}
            setHideLeftPart={setHideLeftPart}
          />
          {/*<!-- /RIGHTPART -->*/}
          <FloatButton.BackTop tooltip={<div>Click Lên Đầu Trang</div>} />
          {/* <a className="arlo_tm_totop" href="#"></a> */}
        </div>
      </div>
      {/*<!-- / WRAPPER ALL -->*/}
    </>
  );
};
export default Portfolio;
