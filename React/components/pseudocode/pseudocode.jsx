import { useRef } from "react";

const Pseudocode = () => {

  const inputRef = useRef();

  return (
    <div>
      <div>
        <h1>Pseudocode</h1>
        <p style={{ textAlign: "left" }}>เริ่มต้น</p>
        <p style={{ textAlign: "left", paddingLeft: "20px" }}>
          รับค่า รัศมี
          <br />
          กำหนด ค่า pi เป็น 3.14159
          <br />
          คำนวณ พื้นที่ = pi × รัศมี × รัศมี
          <br />
          แสดง พื้นที่ของวงกลมคือ = พื้นที่
        </p>
        <p style={{ textAlign: "left" }}>สิ้นสุด</p>
      </div>
      <div>
        <label htmlFor="">รัศมี : </label>
        <input type="number" name="" id="" style={{ height: "20px" }} ref={inputRef}/>
        <button onClick={() => {
          const pi = 3.14159;
          const area = pi * inputRef.current.value * inputRef.current.value;
          inputRef.current.value = area.toFixed(2);
        }}>คํานวณ</button>
      </div>
    </div>
  );
};

export default Pseudocode;
