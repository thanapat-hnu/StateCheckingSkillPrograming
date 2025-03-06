import { useEffect, useRef } from "react";

const Structure = () => {
  const Arr = [0, 1, 2];
  const Obj = { name: "Tom", age: 20, grade: "A" };
  const Tuple = new Set([1, "String", true]);

  const inputRef = useRef();
  const indexRef = useRef();
  const valueRef = useRef();

  useEffect(() => {
    console.log(Arr);
  }, []);

  return (
    <div>
      <h1>Array&Object</h1>
      <div>
        <button
          onClick={() => {
            Arr.shift();
            console.log(Arr);
          }}
        >
          Shift
        </button>
        <button
          onClick={() => {
            Arr.unshift(inputRef.current.value);
            console.log(Arr);
          }}
        >
          Unshift
        </button>
        <input type="text" ref={inputRef} style={{ height: "20px" }} />
        <button
          onClick={() => {
            Arr.push(inputRef.current.value);
            console.log(Arr);
          }}
        >
          Push
        </button>
        <button
          onClick={() => {
            Arr.pop();
            console.log(Arr);
          }}
        >
          Pop
        </button>
      </div>
      {/* --------------------------------- */}
      <div>
        <label htmlFor="">index : </label>
        <input
          type="number"
          name=""
          id=""
          ref={indexRef}
          style={{ height: "20px" }}
        />
        <label htmlFor="">value : </label>
        <input type="text" ref={valueRef} style={{ height: "20px" }} />
        <button
          onClick={() => {
            if (
              indexRef.current.value < 0 ||
              indexRef.current.value > Arr.length - 1 ||
              indexRef.current.value === ""
            ) {
              return alert("index ไม่ถูกต้อง");
            }
            Arr[indexRef.current.value] = valueRef.current.value;
            console.log(Arr);
          }}
        >
          Update
        </button>
      </div>
      {/* --------------------------------- */}
      <div>
        <button
          onClick={() => {
            console.log(Obj);
          }}
        >
          Show Object
        </button>
      </div>
      {/* --------------------------------- */}
      <div>
        <button
          onClick={() => {
            console.log(Tuple);
          }}
        >
          Show Tuple
        </button>
      </div>
    </div>
  );
};
export default Structure;
