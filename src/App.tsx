import React from "react"
import { RemixProvider } from "./hooks"

import { Routes } from "./routes"

import "./App.css"

const App = () => {
  return (
    <RemixProvider>
      <Routes />
    </RemixProvider>
  )
}

export default App
