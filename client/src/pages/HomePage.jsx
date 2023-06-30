import React from 'react'
import HeroSlide from '../components/common/HeroSlide'
import igdbConfigs from "../api/configs/igdb.configs"
import GenreList from '../components/common/GenreList'

const HomePage = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-red-600 h-full hidden md:block'>
      </div>
      <div className='col-span-4 md:col-span-3 bg-blue-400'>
        game list
      </div>
    </div>
  )
}

export default HomePage