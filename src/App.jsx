import { useState, useEffect } from 'react'

import Header from './components/Header'
import FilterSearchComponent from './components/FilterSearchComponent'
import ShowNationComponent from './components/ShowNationComponent'

import './App.css'

import data from "./data.json"


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showingNation, setShowingNations] = useState(false)
  const [nationClicked, setNationClicked] = useState({})
  const [search, setSearch] = useState("")
  const [newData, setNewData] = useState([])
  const [filterArray, setFilterArray] = useState([])

  function handleMode(e) {
    if (e.target.className.includes("fill")) {
      setDarkMode(false)

    } else {
      setDarkMode(true)

    }
  }

  function handleScroll() {
    window.scrollTo(0, 0)
  }

  function handleReturn() {
    setShowingNations(false)
    setNewData(data)
  }

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase()))
  }

  function handleFilter(e) {
    const region = e.target.value.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())

    const filterRegionArray = data.filter((nation) => {
      return nation.region.includes(region)
    })

    setFilterArray(filterRegionArray)
  }

  useEffect(() => {
    const newArray = data.filter((nation) => {
      return nation.name.includes(search)
    })
    setNewData(newArray)
  }, [search])

  useEffect(() => {
    if(filterArray.length == 0) {
      setNewData(data)
    }else {
      setNewData(filterArray)
    }
  }, [filterArray])

  useEffect(() => {
    setNewData(data)
  }, [])

  return ( 
    <div className={darkMode ? "app-container dark" : "app-container"}>
      <Header handleMode={handleMode} darkMode={darkMode} />
      {showingNation ? <ShowNationComponent nationClicked={nationClicked} data={data} darkMode={darkMode} handleReturn={handleReturn}/> :
        <div className="inner-app">
          <FilterSearchComponent handleSearch={handleSearch} handleFilter={handleFilter} darkMode={darkMode}/>
          <div className='countries-container'>
            {newData.map((nation) => {

              function handleClick(e) {
                if (e.target.closest("div").id === nation.name) {
                  setNationClicked(nation)
                }
                setShowingNations(true)
                
                window.scrollTo(0,0)
              }

              return (
                <div className={darkMode ? 'countrie-box dark-box' : 'countrie-box'} key={nation.alpha2Code} id={nation.name} onClick={(e) => handleClick(e)}>
                  <img className='flag-img' src={nation.flags.svg} alt={nation.name + " Flag"} />
                  <h2 className='countrie-name'>{nation.name}</h2>
                  <p className='countrie-population'>Population: {nation.population}</p>
                  <p className='countrie-region'>Region: {nation.region}</p>
                  <p className='countrie-capital'>Capital: {nation.capital}</p>
                </div>)
            })}
          </div>
        </div>}
      {showingNation ? <></> : <button id='scroll-btn' onClick={() => handleScroll()}><i className="bi bi-arrow-up"></i></button>}
    </div>
  )
}

export default App
