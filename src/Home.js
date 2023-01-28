import React, { useEffect, useState } from "react";
import ViewDetail from "./ViewDetail";

const Home = () => {
  const [data, setData] = useState([]);
  const [accordion, setAccordion] = useState(-1);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  };

  return (
    <>
      {/* {console.log(data)} */}
      <div className="main-container">
        {data.map((item, ind) => {
          return (
            <div
              className={
                accordion === item.id ? "inner-container1" : "inner-container2"
              }
              key={item.id}
            >
              <div className="home-list-container">
                <li className="home-list">
                  <p className="check">Name</p>
                  {item.name}
                </li>
                <li className="home-list">
                  <p>Contact</p>
                  {item.username}
                </li>
                <li className="home-list">
                  <p>City</p>
                  {item.address.city}
                </li>
                <li className="home-list">
                  <p>Street</p>
                  {item.address.street}
                </li>
              </div>

              <div className="detail-btn-container">
                {accordion === item.id ? (
                  <button
                    className="detail-btn"
                    onClick={() => setAccordion(-1)}
                  >
                    Hide Details
                  </button>
                ) : (
                  <button
                    className="detail-btn"
                    onClick={() => setAccordion(item.id)}
                  >
                    Show Details
                  </button>
                )}
              </div>
              <div
                className={
                  accordion === item.id
                    ? "viewDetail-component"
                    : "viewDetail-component2"
                }
              >
                <ViewDetail item={item} ind={ind} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
