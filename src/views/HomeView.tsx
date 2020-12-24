import React from "react"

import { Tutorial } from "../types"

export const HomeView: React.FC = () => {
  const getTutorials: () => Tutorial[] = () => {
    return [{
      id: 1,
      name: "UMA",
      description: "Minting tokens locally"
    }]
  }
  return (
    <div>
      <header className="form-group plugins-header py-3 px-4 border-bottom">
        <p>Learn about the UMA protocol</p>
      </header>
      <section>
        <Title />
        <div className="list-group list-group-flush plugins-list-group">
          {getTutorials().map((item: Tutorial) => {
            return (
              <article
                key={item.id}
                className="list-group-item py-1 plugins-list-group-item"
                title={item.name}
              >
                <div
                  className="justify-content-between align-items-center mb-2"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <h6 className="plugin-name">{item.description}</h6>
                </div>
                <p className="text-body plugin-text">
                  {item.description} <IconLink />
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
const IconLink = () => {
  return (
    <a
      href="https://uniswap.org/docs/v2/smart-contract-integration/quick-start/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
        className="bi bi-link-45deg"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
      </svg>
    </a>
  )
}
const Title: React.FC = () => {
  return (
    <nav className="plugins-list-header justify-content-between navbar navbar-expand-lg bg-light navbar-light align-items-center">
      <span className="navbar-brand plugins-list-title h6 mb-0 mr-2">
        Protocols
      </span>
    </nav>
  )
}
