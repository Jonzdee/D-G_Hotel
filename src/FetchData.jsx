import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from'react-router-dom';

import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";



function FetchData({ room }) {
    const slug  = room;
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://hms-ccny.onrender.com/api/rooms/')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        data.map((item) => (
            <article className="room " key={item.id} >
            <div className="img-container ">
            {item.asset1 && <img src={item.asset1} alt="Asset 1" />}
      
              <div className="price-top">
                <h6># {item.pricePerDay}</h6>
                <p>per night</p>
              </div>
      
              <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Feature
        </Link>
            </div>
            <p className="room-info">{item.roomType}</p>
          </article>
        ))
    );
}

export default FetchData

// <div>Room Type: {item.roomType}</div>
//             <div>Price Per Day: {item.pricePerDay}</div>
//             <div>Capacity: {item.capacity}</div>
//             {item.asset1 && <img src={item.asset1} alt="Asset 1" />}
//             {item.asset2 && <img src={item.asset2} alt="Asset 2" />}
//             {item.asset3 && <img src={item.asset3} alt="Asset 3" />}
//             {item.asset4 && <img src={item.asset4} alt="Asset 4" />}
//           