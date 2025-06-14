import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCart = () => {
  const [userdashboard, setuserdashboard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8888/userdashboard").then((res) => {
      setuserdashboard(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Sr no.</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {userdashboard.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt={item.name} width={80} />
              </td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserCart;
