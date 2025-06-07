import desktopLogo from "@/assets/img/logo/desktop-logo.png";
import { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { isMobile } from "react-device-detect";
interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const LeftPart = (props: IProps) => {
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      const aboutSection = document.querySelector(`${hash}`);
      if (aboutSection) {
        const tab = hash.replace("#", "");
        setActiveTab(tab);
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const handleScrollToTab = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: string
  ) => {
    e.preventDefault();
    setActiveTab(tab);

    const aboutSection = document.getElementById(`${tab}`);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = `#${tab}`;
      }, 1000);
    }
  };
  return (
    <>
      <div
        className={
          props.hideLeftPart === true
            ? "arlo_tm_leftpart_wrap opened"
            : "arlo_tm_leftpart_wrap"
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab == "home" ? "active" : ""}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleScrollToTab(e, "home")
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab == "about" ? "active" : ""}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleScrollToTab(e, "about")
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab == "skills" ? "active" : ""}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleScrollToTab(e, "skills")
                  }
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className={activeTab == "project" ? "active" : ""}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleScrollToTab(e, "project")
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab == "contact" ? "active" : ""}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleScrollToTab(e, "contact")
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/trandinhvo189?locale=vi_VN"
                    target="_blank"
                  >
                    <FaFacebookSquare height={32} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank">
                    <FiGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <a
              className={
                props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
              }
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.setHideLeftPart(!props.hideLeftPart);
              }}
            >
              <i
                className={
                  props.hideLeftPart
                    ? "xcon-angle-left opened"
                    : "xcon-angle-left"
                }
              ></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
export default LeftPart;
