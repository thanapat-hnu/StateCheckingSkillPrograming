import { useRef } from "react";

const Factorial = () => {
  const inputRef = useRef();

  return (
    <div>
      <h1>Factorial</h1>
      <input type="number" style={{ height: "20px" }} ref={inputRef} />
      <button
        onClick={() => {
          let num = inputRef.current.value;
          if (num === 0 || num === 1) {
            return console.log(1);
          }
          
          let result = 1;
          for (let i = 1; i <= num; i++) {
            result *= i;
          }
          console.log(result);
        }}
      >
        คํานวณ
      </button>
    </div>
  );
};
export default Factorial;
