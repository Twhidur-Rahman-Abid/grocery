import { useEffect, useRef } from "react";

const useOnOutsideClickClose = (isOpen, setIsOpen) => {
  const btnRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return { btnRef, triggerRef };
};

export default useOnOutsideClickClose;
