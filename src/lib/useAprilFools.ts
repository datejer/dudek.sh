import { useEffect } from "react";

const useAprilFools = () => {
  useEffect(() => {
    const date = new Date();

    if (date.getDate() === 1 && date.getMonth() === 3) {
      const style = document.createElement("style");
      style.innerHTML = `
        * {
          font-family: "Comic Sans MS", "Comic Sans", cursive !important;
        }
      `;

      document.head.appendChild(style);
    }
  }, []);
};

export { useAprilFools };
