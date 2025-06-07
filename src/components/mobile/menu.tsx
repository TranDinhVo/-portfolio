import logoMobile from "@/assets/img/logo/mobile_logo.png";
import { useState, useEffect } from "react";

const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
  const style = {
    overflow: "hidden",
    display: isOpen ? "block" : "none",
    // transition: "0.5s ease-in-out",
  };
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
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#">
              <img src={logoMobile} alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div
              className={
                isOpen
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger hamburger--collapse-r"
              }
            >
              <div className="hamburger-box" onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
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
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
