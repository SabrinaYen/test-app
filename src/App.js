// Library used
import { useEffect, useState } from "react";
import "./App.css";

const App = function () {
  // useState
  const [data, setData] = useState([]);

  // function to get json
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  // using useEffect to get synchoronize data
  useEffect(() => {
    getData();
  }, []);

  return (
    // display data
    <div className="container">
      {data != null &&
        data.map((item, index) => (
          <div className="table">
            <div>
              <span class="circle"></span>
            </div>
            <div>
              Name:{" "}
              {item.firstName && item.lastName
                ? item.firstName + " " + item.lastName
                : ""}
            </div>

            <div>Email: {item.email ? item.email : ""}</div>
            <div>Contact: {item.phone ? item.phone : ""}</div>
          </div>
        ))}
    </div>
  );
};

export default App;
