import { TypeAnimation } from "react-type-animation";
import tialLogo from "@/assets/img/hero/tial.jpeg";
const HomeCV = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src={tialLogo} alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    Tial <span>. Trần Đình Võ</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    I'm a &nbsp;
                    <TypeAnimation
                      sequence={[
                        "Freelancer",
                        2000, // Waits 1s
                        "UI/UX Designer",
                        2000, // Waits 2s
                        "Web Developer",
                        2000, // Waits 2s
                        () => {
                          console.log("Sequence completed");
                        },
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      //       style={{ fontSize: "2em", display: "inline-block" }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToAbout();
                }}
              >
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeCV;
