import React from 'react'
import "./Detail.css"
import { useLocation } from 'react-router-dom'

export const Detail = () => {
  const {state} = useLocation()
  return (
    <div className='detail-section'>
      <div className="detail-container">
        <div className="art-image">
          <img src={state.art} alt="" />
        </div>
        <div className="detail-content">
          <h2>{state.artName}</h2>
          <p><img className='profile' src={state.avatar} alt="" />@{state.author}</p>
          <h3>Description:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim repellat eveniet accusamus numquam, nulla recusandae minima iusto natus commodi nesciunt doloremque? Velit similique laborum molestiae vero maxime repellat sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur magni autem consectetur ratione iusto rem, quasi cupiditate. Dolorem culpa beatae sapiente obcaecati, autem nisi molestias suscipit voluptas officia eligendi!</p>
          <div className="">
            <h3>Price</h3>
          <p>{state.price} ETH</p>
          <h3>Higest Bid</h3>
          <p>$250 ETH</p>
          </div>
        </div>
      </div>
    </div>
  )
}
