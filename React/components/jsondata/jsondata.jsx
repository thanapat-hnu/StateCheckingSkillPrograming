import data from "./data.json";

const Jsondata = () => {
  return (
    <div>
      <h1>JSON</h1>
      <button
        onClick={() => {
          const jsonStringify = JSON.stringify(data);
          console.log(JSON.parse(jsonStringify));
          //   JSON.parse() คล้ายกับ json.loads()
        }}
      >
        JSON.PARSE()
      </button>
      <button
        onClick={() => {
          console.log(JSON.stringify(data));
          //   JSON.stringify() คล้ายกับ json.dumps()
        }}
      >
        JSON.PARSE()
      </button>
    </div>
  );
};

export default Jsondata;
