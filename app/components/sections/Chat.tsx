"use client";
import Image from "next/image";
const Chat = () => {
  return (
    <a
      href="https://wa.me/6362668282"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <Image
        src="/WhatsApp_icon.png"
        alt="WhatsApp Chat"
        className="w-16 h-16 object-contain rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      />
    </a>
  );
};

export default Chat;
