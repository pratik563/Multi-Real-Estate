import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 w-10 h-10 md:w-14 md:h-14 flex justify-center items-center bg-[#2f0547] border border-[#cc8e19] border-2 text-[#cc8e19] rounded-full cursor-pointer shadow-lg hover:bg-[#7829a7] hover:text-[#cc8b12] transition-all duration-300"
          onClick={goToBtn}
        >
          <FaArrowUp className="text-xl md:text-2xl" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
