import React, { useReducer } from 'react';
import NoiseContext from './context'
import NoiseReducer from './reducer'
import NoiseList from './NoiseList'
import Playground from './playground'
import { TITLES } from './constants'
import './App.css';

const App = () => {
  const [ state, dispatch ] = useReducer(NoiseReducer, { current: '' })

  return (
    <NoiseContext.Provider value={{
      current: state.current,
      dispatch,
      titles: TITLES
    }}>
      <div className='container'>
        {
          !state.current ? (
            <div className='wrapper'>
              <h2>白噪音</h2>
              <p>
                这是一款简单的白噪音应用，聆听
                <a href='https://en.wikipedia.org/wiki/White_noise'>白噪音</a>
                ，让自己放松和专注。
              </p>
              <div className='noise_list'>
                <NoiseList />
              </div>
            </div>
          ) : (
            <div className='wrapper'>
              <Playground />
            </div>
          )
        }
      </div>
    </NoiseContext.Provider>
  )
}

export default App;
