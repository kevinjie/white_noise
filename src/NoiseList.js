import React, { useContext } from 'react'
import NoiseContext from './context'
import { setCurrentSong } from './actions'
import './NoiseList.css'


const NoiseList = () => {
  const { titles, dispatch } = useContext(NoiseContext)

  const handleImageClick = (title) => {
    dispatch(setCurrentSong(title))
  }

  return (
    <ul className='list'>
      {
        titles.map((title, index) => (
          <li className='song' key={index}>
            <div className='title'>
              <h3>{ title }</h3>
            </div>
            <div className='song_pic'>
              <img
                src={require(`./assets/${title}.gif`)} 
                alt='song pic'
                onClick={() => {handleImageClick(title)}} />
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default NoiseList