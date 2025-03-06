import { useEffect } from "react";

const Datatype = () => {
  const str = "string"; // ข้อความ
  const int = 1; // จํานวนเต็ม
  const boolean = true; // true หรือ false

  const str999 = "999.99";

  useEffect(() => {
    console.log(typeof str + "  : " + str);
    console.log(typeof int + "  : " + int);
    console.log(typeof boolean + " : " + boolean);
    console.log("--------------------");
    console.log("str999" + " : " + str999 + " : " + typeof str999);
    console.log(parseInt(str999) + " : " + typeof parseInt(str999));
    console.log(parseFloat(str999) + " : " + typeof parseFloat(str999));
    console.log("=====================");

  }, []);
  return <div></div>;
};
export default Datatype;
