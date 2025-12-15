import React, { useState } from 'react'
import "./Discover.css"
import Discoveritems from '../components/DiscoverItems/Discoveritems'
import art8 from '../assets/showcase-1.jpg';
import art2 from '../assets/showcase-2.jpg';
import art3 from '../assets/showcase-3.jpg';
import art4 from '../assets/showcase-4.jpg';
import art5 from '../assets/showcase-5.jpg';
import art6 from '../assets/showcase-6.gif';
import art7 from '../assets/showcase-7.jpg';
import art1 from '../assets/showcase-8.gif';

import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';
import avatar6 from '../assets/avatar-6.gif';
import avatar7 from '../assets/avatar-7.jpg';
import avatar8 from '../assets/avatar-8.jpg';


const artList = [
  { id: 1, art: art1, artName: "Shibuya Scramble Punks", avatar: avatar1, author: "John Doe", price: "$120" },
  { id: 2, art: art2, artName: "Probably A Lable #1712", avatar: avatar2, author: "Jane Smith", price: "$250" },
  { id: 3, art: art3, artName: "Windchime #1713", avatar: avatar3, author: "Alex Johnson", price: "$180" },
  { id: 4, art: art4, artName: "Probably A Lable #1714", avatar: avatar4, author: "Emily Brown", price: "$200" },
  { id: 5, art: art5, artName: "Genuine Undead #1715", avatar: avatar5, author: "Michael Lee", price: "$300" },
  { id: 6, art: art6, artName: "Looki #0147", avatar: avatar6, author: "Sophia White", price: "$150" },
  { id: 7, art: art7, artName: "Poob #285", avatar: avatar7, author: "Daniel Kim", price: "$220" },
  { id: 8, art: art8, artName: "Probably A Lable #1717", avatar: avatar8, author: "Olivia Green", price: "$270" },
];

export const Discover = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filterList, setFilterList] = useState(artList)
  const [sortOrder, setSortOrder] = useState('asc')

  const handleFilter = (value) => {
    setSearchValue(value)
    const filtered = artList.filter(item =>
      item.artName.toLowerCase().includes(value.toLowerCase()) ||
      item.author.toLowerCase().includes(value.toLowerCase())
    )

    setFilterList(filtered)
  }

  const handleSort = () => {
  const sorted = [...filterList].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.artName.localeCompare(b.artName)
      : b.artName.localeCompare(a.artName)
  })

  setFilterList(sorted)
  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
}

  return (
    <div className='dis-container'>
      <h2>Discover Items</h2>
      <div className="sorting">
        <input type="text" id='search' placeholder='Search by author or artName' value={searchValue} onChange={(e) => handleFilter(e.target.value)} />
        <button className='btn-sort' onClick={handleSort}> {sortOrder === 'asc' ? 'A - Z' : 'Z - A'}</button>
      </div>
      <div className="dis-items">
        {
          filterList?.length ? (filterList.map((item) => (
            <Discoveritems key={item.id} item={item}/>
          ))
        ):
        (<p className='show-message'>"No Such Result Found"</p>)
        }
      </div>
    </div>
  )
}
