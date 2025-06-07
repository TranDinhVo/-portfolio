import React, { useState } from "react";
import { Modal } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";

interface IProject {
  image: React.ReactNode;
  title: string;
  shortDescription: string;
  detail: {
    title: string;
    description: string;
    frontend: string;
    backend: string;
    technologies: string;
    member: string;
    role: string;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  const dataProjects: IProject[] = [
    {
      image: <IoLogoReact size={50} color="#2ebbfd" />,
      title: "Website clone",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages...",
      detail: {
        title: "",
        description: "",
        frontend: "",
        backend: "",
        technologies: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <IoLogoReact size={50} color="#2ebbfd" />,
      title: "Website clone",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages...",
      detail: {
        title: "",
        description: "",
        frontend: "",
        backend: "",
        technologies: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <IoLogoReact size={50} color="#2ebbfd" />,
      title: "Website clone",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages...",
      detail: {
        title: "",
        description: "",
        frontend: "",
        backend: "",
        technologies: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
  ];
  return (
    <>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự Án ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Miểu tả: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend}</li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Số lượng thành viên tham gia: {dataDetail.detail.member}</li>
            <li>Vai trò: {dataDetail.detail.role}</li>
            <li>
              Demo:{" "}
              <a href={dataDetail.detail.demo} target="_blank">
                {dataDetail.detail.demo}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href={dataDetail.detail.github} target="_blank">
                {dataDetail.detail.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>

      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Project</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item) => (
                  <li key={item.title}>
                    <div
                      className="inner"
                      title="Xem Chi Tiết"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setIsModalOpen(true);
                        setDataDetail(item);
                      }}
                    >
                      <div className="icon">{item.image}</div>
                      <div className="title_service">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="text">
                        <p>{item.shortDescription}</p>
                      </div>
                      <div className="view_detail" style={{ padding: "5px 0" }}>
                        <span style={{ cursor: "pointer" }}>
                          <BsArrowRight />
                          &nbsp; Xem Chi Tiết
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
