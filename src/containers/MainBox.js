import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    card: ""
  }

  handleClick = (e) => {
    // console.log(e.target.id)
    let card = ""
    if (e.target.id === 'profile') {card = <Profile/>}
    if (e.target.id === 'photo') {card = <Photos/>}
    if (e.target.id === 'cocktail') {card = <Cocktails/>}
    if (e.target.id === 'pokemon') {card = <Pokemon/>}


    this.setState({
      card: card
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>
    // console.log(this.handleClick)

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay}
        {this.state.card}
      </div>
    )
  }

}

export default MainBox
