import React from "react"


const FeaturedCard = () => {
 const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
]
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
