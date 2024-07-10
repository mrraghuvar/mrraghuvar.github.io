import React from 'react'

function Header() {
  return (
    <>
    <div className='h-16 shadow-lg bg-neutral-900'>
    <div className="navbar">  
  <div className="flex-1 bg-white">
    <a className=" btn btn-ghost text-xl text-white font-bold">BATCH 2023</a>
  </div>
  <div className="flex-none z-40">
    <ul className="menu menu-horizontal px-1">
      <li><a href='#' className='text-neutral-100 font-bold'>Schedule Task!</a></li>
      <li>
        <details>
          <summary className='text-neutral-200 font-bold ml-4'>More</summary>
          <ul className="bg-bg-main rounded-t-none p-2">
            <li><a className='text-neutral-200 font'>About</a></li>
            <li><a className='text-neutral-100 font'>Contact</a></li>
          </ul>
        </details>  
      </li>
    </ul>
  </div>
</div>
</div>
    </>
    
  )
}

export default Header