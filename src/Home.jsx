import { useState } from 'react'
import Header from './header'
import Datas from './datas'
import Hero from './hero'
import Sllaybus from '../src/assets/Sllaybus.png'
import Alert from './alert'
import CHO from '../src/assets/CHO.png'
import ImportantQ from '../src/assets/ImportantQ.png'
import Updates from '../src/assets/Updates.png'
import Notes from '../src/assets/Notes.png'
import Resource from '../src/assets/Resource.png'
import Footer from './footer'


function Home() {


  return (
   <>
   <div className='h-screen bg-bg-main'>
    <Header/>
    <Alert/>
    <div className='hidden'><Hero/>
    </div>
    <div className='w-full md:w-auto grid grid-cols-2 gap-2 place-items-center md:grid-cols-6 md:place-items-center md:gap-0  md:justify-evenly md:ml-20 md:mr-20 md:relative top-40 mt-5  bg-bg-main '>
    <Datas titles="Syllabus!" updates="NEW" img={Sllaybus} url="/sllaybus"/>
    <Datas titles="ImpQ.!" updates="" img={ImportantQ} url="/impq"/>
    <Datas titles="CHO!" updates="NEW" img={CHO} url="/cho"/>
    <Datas titles="Resource!" updates="NEW" img={Resource} url="/resource"/>
    <Datas titles="Notes!" updates="NEW" img={Notes} url="/notes"/>
    <Datas titles="Updates!" updates="" img={Updates} url="/updates"/>
    
    </div>
    
    <Footer/>
    
   
   </div>
   </>
  )
}

export default Home
