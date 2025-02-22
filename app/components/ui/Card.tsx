'use client';
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CareerConsultation from "../sections/packages/career"; 
import MarriageConsultation from "../sections/packages/marriage";
import HealthConsultation from "../sections/packages/health";
import DirectConsultation from "../sections/packages/DirectConsultation";
import EmergencyConsultation from "../sections/packages/Emergency";
import PackageModal from "./modal"; 

type CardPropsType = {
  title: string;
  description: string;
  price: string;
  id: number;
};

const Card = ({ title, price, description, id }: CardPropsType) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>);

  const handleBookNow = () => {
    switch (id) {
      case 1:
        setModalContent(<CareerConsultation />);
        break;
      case 2:
        setModalContent(<MarriageConsultation />);
        break;
      case 3:
        setModalContent(<HealthConsultation />);
        break;
      case 4:
        setModalContent(<DirectConsultation />);
        break;
      case 5:
        setModalContent(<EmergencyConsultation />);
        break;
      default:
        setModalContent(<></>); // Default case
        break;
    }
    setOpenModal(true); 
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(<></>);
  };
  

  return (
    <div className="border border-border p-2.5 rounded-2xl m-2">
      <div className="border border-border rounded-md lg:px-12.5 px-6 py-12">
        <h4 className="pb-6">{title}</h4>
        <p className="pb-10" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="py-10 lg:px-12.5 px-6" onClick={handleBookNow} id={title}>
        <CustomButton>
          Know More <FontAwesomeIcon icon={faAngleRight} fontSize={14} />
        </CustomButton>
      </div>

      {/* Render the modal with the content inside */}
      <PackageModal open={openModal} handleClose={handleCloseModal} packageComp={modalContent} />
    </div>
  );
};

export default Card;
