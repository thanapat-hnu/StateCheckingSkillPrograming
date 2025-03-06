import { useState } from "react";

const Formsx = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".com")) {
      return alert("กรุณากรอก email ให้ถูกต้อง");
    }

    return console.log("สมัครสมาชิกเรียบร้อย");
  };
  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Gmail : </label>
        <input
          type="text"
          style={{ height: "20px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Formsx;
