import React, { useEffect } from 'react'
import GlobalApi from '../../services/GlobalApi'

function GenreList() {

    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp);
        })
    }
  return (
    <div>GenreList</div>
  )
}

export default GenreList