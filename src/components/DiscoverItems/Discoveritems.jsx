import React from 'react'
import "./Discoveritems.css"
import ethereum from "../../assets/ethereum.svg"
import { useNavigate } from 'react-router-dom';

const Discoveritems = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${item.id}`, {
      state: item   // (full object)
    });
  };
  return (
    <div className='item-container' onClick={handleClick}>
      <img className='art' src={item.art} alt="" />
      <div className="auther">
        <img className='profile' src={item.avatar} alt="" />
        <p>@{item.auther}</p>
      </div>
      <p className="art-name">{item.artName}</p>
      <div className="price">
        <div className="origial-price">
          <p className='price-heading'>Price</p>
          <p className='value'><img src={ethereum} alt="" /> {item.price} ETH</p>
        </div>
        <div className="bid-price">
          <p className='price-heading'>Higest Bid</p>
          <p className='value'><img src={ethereum} alt="" /> 3.55 ETH</p>
        </div>
      </div>
    </div>
  )
}

export default Discoveritems