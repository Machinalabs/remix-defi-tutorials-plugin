import React from "react"
import { RemixProvider } from 'remix-react'

import { Routes } from "./routes"

import "./App.css"

const App = () => {
  return (
    <RemixProvider pluginName="UMA Tutorials Explorer">
      <Routes />
    </RemixProvider>
  )
}

export default App
