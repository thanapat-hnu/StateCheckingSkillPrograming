import { useRef } from "react";

const Age = () => {

    const inputRef = useRef();


  return (
    <div>
        <div>
            <h1>Age</h1>
            <label htmlFor="">อายุ : </label>
            <input type="number" ref={inputRef} style={{ height: "20px" }}/>
            <button onClick={() => {
                const age = inputRef.current.value;
                if (age > 0 && age <= 20) {
                    console.log("เด็ก");
                } else if (age > 20 && age <= 45) {
                    console.log("วัยรุ่น");
                } else if (age > 45) {
                    console.log("ผู้ใหญ่");
                }
            }}>คำนวณ</button>
        </div>
    </div>
  );
};

export default Age;
