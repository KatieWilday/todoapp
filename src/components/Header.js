import React from "react"

function Header() {
  const firstName = "Katie"
  const lastName = "Wilday"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "Morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "Evening"
    styles.color = "#D90000"
  }
    return (
        <header className="navbar">Good {`${timeOfDay}, ${firstName} ${lastName}`}!</header>
    )
}

export default Header
