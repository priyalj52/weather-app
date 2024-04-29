import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'

function App() {

  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  // console.log(weather)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
    <div className='w-full h-screen text-white '>
      <h1 className='font-bold tracking-wide md:text-3xl text-xl p-2 '>
          <span className='text-bold capitalize'>
          Weather App
          </span>
        </h1>
      <nav className=' p-2 flex justify-center '>
        
        <div className='bg-white  w-2/3 center overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 '>
          <img src={search} alt="search" className='w-[1rem] h-[1rem] ' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumit the form
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-sm md:text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4  items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className='grid md:grid-cols-3 gap-7 grid-cols-2  '>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
