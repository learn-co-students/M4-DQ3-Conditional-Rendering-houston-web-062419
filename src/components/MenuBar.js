import React from 'react'
export default MenuBar



const MenuBar = ({changeSelected, selected}) => {

  const handleClick = (event) => {
    changeSelected(event.target.id)
  }

 

  return (
    <div className="ui four item menu">
      <a onClick={handleClick} className={"item " + (selected==="profile" ? "active" : null)} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={handleClick} className={"item " + (selected==="photo" ? "active" : null)} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={handleClick} className={"item " + (selected==="cocktail" ? "active" : null)} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={handleClick} className={"item " + (selected==="pokemon" ? "active" : null)} id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}


