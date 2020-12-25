import React, { useEffect } from "react"

import { Tutorial } from "../types"

export const HomeView: React.FC = () => {
  const getTutorials: () => Tutorial[] = () => {
    return [
      {
        id: 1,
        name: "UMA",
        description: "Minting tokens locally",
      },
    ]
  }

  const handleOnTutorialButtonClick = () => {
    console.log("Clicked button") // focus
  }

  useEffect(() => {
    // TODO
    console.log("Activate x plugin")
  }, [])
  return (
    <section>
      <Title />
      <div className="list-group list-group-flush plugins-list-group">
        {getTutorials().map((item: Tutorial) => {
          return (
            <button
              onClick={handleOnTutorialButtonClick}
              key={item.id}
              className="list-group-item py-1 plugins-list-group-item"
              title={item.name}
              style={{ outline: "none" }}
            >
              <div
                className="justify-content-between align-items-center mb-2"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <h6 className="plugin-name">{item.name}</h6>
              </div>
              <p
                className="text-body plugin-text"
                style={{ textAlign: "left" }}
              >
                {item.description}
              </p>
            </button>
          )
        })}
      </div>
    </section>
  )
}

const Title: React.FC = () => {
  return (
    <nav className="plugins-list-header justify-content-between navbar navbar-expand-lg bg-light navbar-light align-items-center">
      <span className="navbar-brand plugins-list-title h6 mb-0 mr-2">
        Tutorials
      </span>
    </nav>
  )
}
