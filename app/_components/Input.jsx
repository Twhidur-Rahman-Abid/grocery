import React from "react";

export default function Input({
  type = "text",
  placeholder = "",
  name,
  errorMessage,
  className = "",
  required = false,
  label,
  left,
  right,
  ...rest // Forwards onChange, value, and any other standard input props
}) {
  // Prevents number inputs from changing values on accidental mouse scrolls
  const handleWheel = (event) => {
    event.target.blur();
  };

  return (
    <div className="flex-1 flex flex-col gap-2">
      {label && <label className="text-gray-800 font-medium">{label}</label>}

      <label
        htmlFor={name}
        className={`px-3 md:px-5 input-shadow border border-primary rounded-xl flex items-center w-full focus:border-spacing-1.5 focus-within:border-primary ${
          errorMessage
            ? "border-red-600"
            : "border-stock/10 dark:border-c-gray/10"
        } ${className}`}
      >
        {/* LEFT ICON SLOT */}
        {left && (
          <div className="pr-3 mr-3 md:pr-5 md:mr-6 border-r border-c-gray">
            {left}
          </div>
        )}

        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          onWheel={handleWheel}
          className={`border-0 focus:ring-0 w-full truncate h-full py-3 placeholder:text-ash focus:outline-0 ${
            ["date", "file"].includes(type) ? "py-[10px]" : ""
          }`}
          {...rest}
        />

        {/* RIGHT ICON SLOT */}
        {right && <div className="pl-3 ml-3 md:pl-5 md:ml-6">{right}</div>}
      </label>

      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
}
