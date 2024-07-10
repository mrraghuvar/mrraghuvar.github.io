import React from 'react'

function Datas({titles,updates,img,url}) {
  return (
    <><div className="card bg-base-100 w-40 md:w-40 shadow-sm shadow-neutral-500 mb-2 md:shadow-lg md:shadow-neutral-900">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body h-3 flex items-center justify-center bg-bg-main">
    <h2 className="card-title text-sm font-bold text-neutral-200"><a href={url}>
    {titles}
    </a>
      <div className="badge badge-secondary ">{updates}</div>
    </h2>
   </div>
</div></>   
  )
}

export default Datas