import React from 'react'
import HeroSlide from '../components/common/HeroSlide'
import igdbConfigs from "../api/configs/igdb.configs"

const HomePage = () => {
  return (
    <>
      <HeroSlide mediaType={igdbConfigs.mediaType.movie} mediaCategory=
      {igdbConfigs.mediaCategory.popular}/>
    </>
  )
}

export default HomePage