import React, { useState } from "react";

function ButtonComponent() {
  const [button1BgColor, setButton1BgColor] = useState("white");
  const [button2BgColor, setButton2BgColor] = useState("black");
  const [button1TextColor, setButton1TextColor] = useState("black");
  const [button2TextColor, setButton2TextColor] = useState("white");

  const handleButtonClick = (buttonNum) => {
    if (buttonNum === 1) {
      setButton1BgColor("black");
      setButton1TextColor("white");
      setButton2BgColor("white");
      setButton2TextColor("black");
    } else {
      setButton1BgColor("white");
      setButton1TextColor("black");
      setButton2BgColor("black");
      setButton2TextColor("white");
    }
  };

  return (
    <div className="w-[203px] rounded-xl border border-blue-900">
      <button
        className="duration-2000 rounded-xl px-5 delay-75 ease-in"
        style={{ backgroundColor: button2BgColor, color: button2TextColor }}
        onClick={() => handleButtonClick(2)}
      >
        Today
      </button>
      <button
        className="rounded-xl px-6 delay-75 duration-200 ease-in"
        style={{ backgroundColor: button1BgColor, color: button1TextColor }}
        onClick={() => handleButtonClick(1)}
      >
        This Week
      </button>
    </div>
  );
}

export default ButtonComponent;
