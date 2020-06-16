import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import URLS from "./Settings";
import { useHistory } from "react-router-dom";

export function RecepieList() {
  return (
    <div>
      <h2>List of all recepies</h2>
      <br />
      <br />
      <br />
      {AllRecepiesFetching()}
    </div>
  );
}

function AllRecepiesFetching() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    //Ville udvide så vi kunne komme ind på en seperat side som gjorde brug af backendens fetch baseret på id funktion.
    history.push("/");
  }

  useEffect(() => {
    facade
      .fetchData(URLS.AllRecepies())
      .then((data) => setDataFromServer(data));
  }, []);
  return (
    <table border="1px">
      <thead>
        <tr key={dataFromServer.id}>
          <th>Category</th>
          <th>Name</th>
          <th>Preperation Time</th>
        </tr>
      </thead>
      <tbody>
        {/* {console.log(dataFromServer)} */}
        {/* {console.log(typeof dataFromServer)} */}
        {Object.values(dataFromServer).map((element) => (
          <tr key={element.id}>
            <td>{element.category}</td>
            <td>{element.name}</td>
            <td>{element.preparation_time}</td>
            <td>
              <button id={element.id} type="button" onClick={handleClick}>
                More Info
              </button>
            </td>
          </tr>
          //   <div>
          //     {console.log(element)}
          //     {console.log(element.category)}
          //   </div>
        ))}

        {/* {console.log(dataFromServer.forEach()))} */}
        {/* {Object.entries(dataFromServer).map((e1) =>
          e1.map((element) => (
            <tr key={element.id}>
              <td>{element.category}</td>
              <td>{element.name}</td>
              <td>{element.preparation_time}</td>
            </tr>
          ))
        )} */}
      </tbody>
    </table>
  );
}
