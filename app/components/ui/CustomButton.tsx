import Link from "next/link";

interface Props {
  children: React.ReactNode;
  asLinked?: boolean;
  className?: string;
  path?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Update type
}

const CustomButton = ({
  children,
  asLinked = false,
  path = "#",
  type = "button",
  onClick, // Accept onClick function
}: Props) => {
  if (asLinked && !path) {
    console.error(
      "Button component with 'asLinked' must have a valid 'path' prop."
    );
  }

  const commonClasses = `
    relative text-black font-bold text-lg bg-yellow-400 rounded shadow-lg
    before:content-[''] before:absolute before:-bottom-1.5 before:left-1.5 before:w-full before:h-full
    before:bg-white before:rounded before:-z-10 hover:-translate-y-0.5 hover:before:-translate-y-0.5 transition-all duration-100 ease-in-out
    whitespace-nowrap`; // Added to prevent text wrapping

  const buttonStyle = `px-4 py-2`; // Adjust padding for reduced height

  if (asLinked) {
    return (
      <Link
        href={path}
        className={`${commonClasses} ${buttonStyle}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick} // Pass the event handler
      className={`${commonClasses} ${buttonStyle}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
