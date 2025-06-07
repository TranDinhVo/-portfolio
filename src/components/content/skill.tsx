import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng Frontend</h4>
                </div>
                <ul style={{ marginLeft: "10px" }}>
                  <li>Cắt/ghép template Website Responsive</li>
                  <li>Framework/Library: React.JS, Ant Design, ...</li>
                </ul>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="65"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">HTML/CSS/JavaScript</span>
                        <span className="number">65%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={65}
                          height="8px"
                          bgColor="#333"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="40"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">React.JS (TypeScript)</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={40}
                          height="8px"
                          bgColor="#333"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="70"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Design UI/UX</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={70}
                          height="8px"
                          bgColor="#333"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng khác</h4>
                </div>
                <ul style={{ marginLeft: "10px" }}>
                  <li>Ngôn ngữ lập trình: C/C++, Java, Javascript </li>
                  <li>Database: MySQL</li>
                </ul>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="70"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">C/C++</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={70}
                          height="8px"
                          bgColor="#333"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="50"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Database MySQL</span>
                        <span className="number">50%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={50}
                          height="8px"
                          bgColor="#333"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skill;
