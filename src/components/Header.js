import React from "react"

function Header() {
  const currentUser = "Katie Wilday"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "Morning"
    styles.color = "teal"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
    styles.color = "orange"
  } else {
    timeOfDay = "Evening"
    styles.color = "lightBlue"
  }
    return (
        <header className="navbar" style={styles}>Good {` ${timeOfDay}, ${currentUser}`}!</header>
    )
}

export default Header
