import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import { Suspense } from 'react'
import logo from '../logo.svg'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo react" />
            <ul>
              {routes.map(({ name, to }) => {
                return (
                  <li key={name}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? 'nav-active' : ''
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ name, Component, path }) => (
              <Route path={path} element={<Component />} key={name} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
