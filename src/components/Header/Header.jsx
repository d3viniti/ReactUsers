import React from 'react'
import './Header.css'

function Header({userData, setUsers}) {
    //create state to hold country
    const[country, setCountry] = React.useState('')

    const handleInput = (e) =>{
        console.log(e.target.value)
        //store the user input in state
        setCountry(e.target.value)

    }
    const showAll = () =>{
        console.log('show all')
        //set users to userData
        setUsers(userData)
    }

    const handleSearch = ()=>{
        //filter the userData based on country
        const newUsers = userData.filter(item=>country.toLowerCase() === item.country.toLowerCase())
        console.log(newUsers)
        //change users to these values
        setUsers(newUsers)
        //clear textbox
        setCountry('')
    }


  return (
    <div className="header-container">
        <button onClick={showAll}>Show all</button>
        <div className="search-container">
            <input onChange={(e)=>setCountry(e.target.value)} type="text" placeholder="Enter country" 
            value={country} />
            <button onClick={handleSearch} >Search</button>
        </div>

    </div>
  )
}

export default Header