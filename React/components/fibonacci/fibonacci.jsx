import React, { useRef } from "react";

const Fibonacci = () => {
  const inputRef = useRef();

  return (
    <div>
      <h1>Fibonacci</h1>
      <input type="number" style={{ height: "20px" }} ref={inputRef} />
      <button
        onClick={() => {
          let n = parseInt(inputRef.current.value);
          if (isNaN(n) || n < 0) {
            return console.log("กรุณากรอกตัวเลขที่เป็นบวกหรือศูนย์");
          }
          let a = 0,
            b = 1;

          if (n === 0) {
            console.log(0);
            return;
          }
          if (n === 1) {
            console.log(1);
            return;
          }
          
          for (let i = 2; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
          }
          console.log(b);
        }}
      >
        คํานวณ
      </button>
    </div>
  );
};

export default Fibonacci;
