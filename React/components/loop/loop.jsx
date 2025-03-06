const Loop = () => {
  return (
    <div>
      <h1>Loop</h1>
      <button
        onClick={() => {
          for (let i = 1; i <= 10; i++) {
            console.log(i);
          }
        }}
      >
        ForLoop
      </button>

      <button
        onClick={() => {
          while (true) {
            let input = prompt("กรุณาป้อนข้อความ (พิมพ์ 'exit' เพื่อออก):");
            if (input === "exit") {
              console.log("ออกจากโปรแกรม...");
              break;
            }
            console.log("คุณป้อน: " + input);
          }
        }}
      >
        WhileLoop
      </button>
    </div>
  );
};

export default Loop;
