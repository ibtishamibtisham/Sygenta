import { useEffect, useMemo, useState } from "react";

export const Dashboard = () => {
  const [store, setStore] = useState([1, 2, 3, 4, 5]);
  const [inp, setInp] = useState("");
  const [myinp, setMyinp] = useState([]);
  const [color, setColor] = useState("");
  const [id, setId] = useState("");
  const filt = () => {
    const savest = store;
    const data = store.filter((item) => {
      return item !== +inp;
    });
    const daat1 = savest.filter((item) => !data.includes(item));
    setId(+daat1[0]);
    setStore(data);
    setMyinp([...myinp, daat1[0]]);
  };

  const mydatas = (id) => {
    const data = myinp.filter((i) => {
      return i != id;
    });
    setMyinp(data);
    const arr = store;
    arr.splice(id - 1, 0, id);
    arr.sort();
    console.log(arr);
    setStore(arr);
  };
  console.log(id, "id", color, "color");
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  }
  //working after click not on every div while rendering
  useMemo(getRandomColor, [id]);
  return (
    <>
      <div style={{ margin: "auto", width: "350px" }}>
        <input
          style={{ width: "200px", marginRight: "10px" }}
          placeholder="enter a number between 1-5"
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <button
          onClick={filt}
          style={{ width: "100px", height: "50px", borderRadius: "10px" }}
        >
          SHOOT
        </button>
      </div>
      <div
        style={{
          display: "flex",
          width: "40%",
          height: "600px",
          margin: "auto",
          justifyContent: "space-around",
          // background: color,
        }}
      >
        <div>
          {store.map((item) => {
            // var letters = ["red", "green", "blue", "yellow", "peach", "grey"];
            return (
              <div
                key={item}
                style={{
                  width: "100px",
                  height: "100px",
                  background: color,
                  marginBottom: "10px",
                  borderRadius: "50%",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div
          style={{ width: "300px", height: "600px", border: "1px solid black" }}
        >
          {myinp.length > 0 &&
            myinp.map((i) => {
              return (
                <div
                  key={i}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: color,
                    marginBottom: "10px",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    mydatas(i);
                  }}
                >
                  {i}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
