'use client';
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PackageModal from "./modal"; 
import Link from "next/link";

type CardPropsType = {
  title: string;
  description: string;
  price: string;
  id: number;
};

const Card = ({ title, description, id }: CardPropsType) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>);

const path = () => {
  let path
  switch (id) {
    case 1:
      path = "/packages/career"
      break;
    case 2:
      path = "/packages/marriage"
      break;
    case 3:
      path = "/packages/health"
      break;
    case 4:
      path = "/packages/direct"
      break;
    case 5:
      path = "/packages/emergency"
      break;
    default:
      path = "/packages/direct"; // Default case
      break;
  }
  return path
}

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
      <div className="py-10 lg:px-12.5 px-6" id={title}>
    <Link href={path()}>
  <CustomButton>Book Now<FontAwesomeIcon icon={faAngleRight} fontSize={14} /></CustomButton>
</Link>
  </div>
      <PackageModal open={openModal} handleClose={handleCloseModal} packageComp={modalContent} />
    </div>
  );
};

export default Card;
