import { useRef, useEffect } from "react";
const Event = () => {
  const inputRef = useRef();
  const labelRef = useRef();

  window.addEventListener("keydown", (e) => {
    labelRef.current.innerText = e.key;
  });

  return (
    <div>
      <h1>Event</h1>
      <button
        onClick={() => {
          return alert("Click");
        }}
      >
        Click
      </button>
      <input
        ref={inputRef}
        style={{ height: "20px" }}
        type="text"
        onKeyUp={() => {
          inputRef.current.value = "";
          return alert("KeyUp");
        }}
      ></input>
      <button
        onMouseOver={() => {
          return alert("Hover");
        }}
      >
        Hover
      </button>
      <div>
        <label htmlFor="" ref={labelRef}>
          ...
        </label>
      </div>
    </div>
  );
};

export default Event;
