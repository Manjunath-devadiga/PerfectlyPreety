import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import axios from 'axios'
import Footer from '../../components/common/Footer'

const Blush = () => {

  const [blushdata,setblushdata] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8888/Foundation").then((res)=>{
      setblushdata(res.data);
    })
  },[])
   
  const handlecart = (product) => {
      axios
        .post(`http://localhost:8888/userdashboard`, product)
        .then((res) => {
          alert("Product added successfully");
        })
        .catch((err) => {
          console.error("Add to Cart Error:", err);
          alert("Failed to add product");
        });
      }
    return (
        <div style={{ backgroundColor: "rgb(255 24 24 / 32%)" }}>
      <Navbar/>
      <img
        src='/assests/images/blush/blushbg.webp'
        className="w-100 d-block"
        alt="Lipstick Banner"
      />

      <div className="container mt-5">
        <h3 className="text-center mb-4">BLUSH STORE</h3>

        <div className="row g-4 justify-content-center">
          {blushdata.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card border-0 p-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.description}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <p
                    className="text-center"
                    style={{ fontSize: "15px", fontWeight: "300" }}
                  >
                    {item.description}
                  </p>
                  <h5 className="d-inline">₹{item.price}/-</h5>
                  <p
                    className="d-inline ms-2 text-muted"
                    style={{ textDecoration: "line-through" }}
                  >
                    ₹{item.originalPrice}
                  </p>
                  <h6 className="d-inline text-success float-end">
                    {item.discount}% off
                  </h6>
                  <div className="text-center mt-2">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "rgb(209 0 118)",
                        color: "white",
                      
                      }}
                      onClick={()=>handlecart(item)}
                      >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img 
      style={{marginTop:"30px"}}
        src="/assests/images/blush/blushbg2.avif"
        className="w-100 d-block"
        alt="Lipstick Banner"
      />

      

      <Footer/>
    </div>
    )
}

export default Blush
