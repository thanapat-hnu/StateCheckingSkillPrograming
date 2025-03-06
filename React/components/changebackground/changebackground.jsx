const ChangeBackground = () => {
  return (
    <div>
      <button
        className="red"
        style={{ color: "red" }}
        onClick={() => {
          document.body.style.backgroundColor = "Red";
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "";
        }}
      >
        reset
      </button>
    </div>
  );
};

export default ChangeBackground;
