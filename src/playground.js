import React, { useState, useContext, useEffect } from 'react'
import NoiseContext from './context'
import { backToList } from './actions'
import './playground.css'

const Playground = () => {
  const { current, dispatch, titles } = useContext(NoiseContext)
  const [ song, setSong ] = useState('')

  useEffect(() => {
    const index = titles.indexOf(current) > -1 ? titles.indexOf(current) + 1 : -1
    if (index < 0) {
      return
    }
    setSong(`https://backendlessappcontent.com/33170295-1C47-434B-BF7D-D23C7D98F29F/38D93EF3-E73E-4FA6-82E0-26145CBF23F6/files/media/a${index}.mp3`)
  }, [current, titles])

  return (
    <div className='song_playground'>
      <div className='back' onClick={() => dispatch(backToList())}>
        <img src={require('./assets/back.png')} alt='back' />
      </div>
      <div className='playground_image'>
        <img src={require(`./assets/${current}.gif`)} alt='' />
      </div>
      <h2>{current}</h2>
      <div className='song_player'>
        <audio src={song} controls type="audio/mpeg"></audio>
      </div>
    </div>
  )
}

export default Playground