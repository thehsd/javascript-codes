function Button({ variant, disabled, buttonType, children }) {
  return (
    <button
      className={`text-white cursor-pointer rounded-md p-[7px] mx-3 my-2
        ${variant === "primary" ? "bg-blue-500	" : ""} 
        ${variant === "warning" ? "bg-orange-500" : ""}
        ${variant === "error" ? "bg-red-700" : ""}
        ${variant === "success" ? "bg-green-600" : ""}
        ${
          buttonType === "outline" && variant === "primary"
            ? "border border-blue-500 text-blue-500 bg-white"
            : ""
        }
        ${
          disabled
            ? "!bg-gray-400 !text-black cursor-not-allowed !border-none"
            : ""
        }
        `}
    >
      {children}
    </button>
  );
}

export default Button;
