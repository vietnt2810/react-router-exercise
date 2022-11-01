import { useEffect } from "react";

const TestHook = () => {
  const handleResize = () => {
    console.log("Resized!");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return function cleanResize() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div></div>;
};

export default TestHook;
