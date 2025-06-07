import martial from "@/assets/img/about/tial-1.jpeg";
import myCV from "@/assets/TranDinhVoCV.pdf";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Parallax from "parallax-js";
import logo550 from "@/assets/img/about/550x640.jpg";
const About = () => {
  const sceneEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>về tác giả</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                    ref={sceneEl}
                  >
                    <div className="image layer" data-depth="0.5">
                      <img src={logo550} alt="550x640" />
                      <div
                        className="inner"
                        data-img-url={martial}
                        style={{ backgroundImage: `url(${martial})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img src={logo550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Tial and &nbsp;
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
                      <span className="arlo_tm_animation_text_word"></span>
                    </h4>
                  </div>
                  <div className="definition">
                    <div className="definition">
                      <p>
                        Xin chào, mình là <strong>Tial</strong>, tên thật là{" "}
                        <strong>Trần Đình Võ</strong>. Mình là một lập trình
                        viên đam mê công nghệ, yêu thích sự sáng tạo và luôn tìm
                        kiếm những giải pháp tối ưu trong phát triển web.
                      </p>
                      <p style={{ marginTop: "10px" }}>
                        Với kinh nghiệm trong lĩnh vực thiết kế UI/UX và lập
                        trình web frontend, mình không chỉ chú trọng vào phần
                        giao diện người dùng mà còn đảm bảo hiệu năng và trải
                        nghiệm tổng thể của sản phẩm. Mình tin rằng sự kết hợp
                        giữa thiết kế tinh tế và kỹ thuật vững vàng sẽ tạo nên
                        những sản phẩm chất lượng, dễ dùng và có giá trị thực
                        tế.
                      </p>
                      <p style={{ marginTop: "10px" }}>
                        Mình luôn học hỏi, cập nhật công nghệ mới và yêu thích
                        làm việc trong môi trường sáng tạo, năng động. Nếu bạn
                        đang tìm một người có thể đồng hành trong những dự án
                        công nghệ — từ ý tưởng cho đến khi triển khai hoàn chỉnh
                        — thì mình chính là người bạn đang tìm kiếm!
                      </p>
                    </div>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Ngày sinh:</label> 18.09.2005
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Giới tính:</label> Nam
                        </span>
                      </li>
                      {/* <li>
                        <span>
                          <label>City:</label> New York, USA
                        </span>
                      </li> */}
                      {/* <li>
                        <span>
                          <label>Interests:</label> Soccer, UFC
                        </span>
                      </li> */}
                      <li>
                        <span>
                          <label>Sinh viên:</label> Trường Đại học Giao thông
                          vận tải - Phân hiệu TP.HCM
                        </span>
                      </li>
                      {/* <li>
                        <span>
                          <label>Degree:</label> Master
                        </span>
                      </li> */}
                      {/* <li>
                        <span>
                          <label>Website:</label>
                          <a href="#">www.mywebsite.com</a>
                        </span>
                      </li> */}
                      <li>
                        <span>
                          <label>Mail:</label>
                          <a href="mailto:trandinhvo1809@gmail.com">
                            trandinhvo1809@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Facabook:</label>
                          <a
                            href="https://www.facebook.com/trandinhvo189?locale=vi_VN"
                            target="_blank"
                          >
                            Trần Đình Võ
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCV} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
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
export default About;
