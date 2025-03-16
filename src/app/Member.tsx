import React from "react";
//import "./Assent/style.css";
import { TbAlertCircle } from "react-icons/tb"; // Adjust the path if necessary
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const members = [
  {
    name: "พิมพ์ชนก เลิศลาภกาญจนกุล",
    profession: "สถานะ : เป็นบ้า",
    img: "/Kik.png",
    infoName: "พิมพ์ชนก เลิศลาภกาญจนกุล",
    infoProfession: "เรียนแบบจดจำ แล้วนำไปทิ้ง",
    infoLocation: "Bangkok - Thailand",
  },
  {
    name: "ศักดิธัช ปรากฎหาญ",
    profession: "สถานะ : เครียดลงกระเพาะ",
    img: "/Big.png",
    infoName: "ศักดิธัช ปรากฎหาญ",
    infoProfession: "My code is compiling, but my sanity isn’t.",
    infoLocation: "Bangkok - Thailand",
  },
  {
    name: "สุพิชฌาย์ เลิศพัฒนศักดิ์",
    profession: "สถานะ : ไม่มีสมอง",
    img: "/Net.png",
    infoName: "สุพิชฌาย์ เลิศพัฒนศักดิ์",
    infoProfession: "ห้ะ?",
    infoLocation: "Bangkok - Thailand",
  },
];

const Member: React.FC = () => {
  return (
    <div className="containermember grid grid-cols-1 md:grid-cols-3 gap-4">
      {members.map((member, index) => (
        <div className="cardmb md:mb-[120px] mb-[20px]" key={index}>
          <div className="cardmb__border">
            <div className="cardmb__perfil">
              <img src={member.img} alt="card image" className="cardmb__img" />
            </div>
          </div>
          <h3 className="cardmb__name">{member.name}</h3>
          <span className="cardmb__profession">{member.profession}</span>

          {/* Card info */}
          <div className="info">
            <div className="info__icon">
            <TbAlertCircle />
              <i className="ri-information-line"></i>
            </div>

            <div className="info__border">
              <div className="info__perfil">
                <img src={member.img} alt="card image" className="info__img" />
              </div>
            </div>

            <div className="info__data">
              <h3 className="info__name">{member.infoName}</h3>
              <span className="info__profession">{member.infoProfession}</span>
              <span className="info__location">{member.infoLocation}</span>
            </div>

            <div className="info__social">
              <a href="https://www.linkedin.com/" target="_blank" className="info__social-link">
                <span className="info__social-icon">
                    <PiFacebookLogoBold />
                </span>
              </a>

              <a href="https://dribbble.com/" target="_blank" className="info__social-link">
                <span className="info__social-icon">
                    <FaInstagram />
                </span>
              </a>

              <a href="https://github.com/" target="_blank" className="info__social-link">
                <span className="info__social-icon">
                    <FaXTwitter />
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;

