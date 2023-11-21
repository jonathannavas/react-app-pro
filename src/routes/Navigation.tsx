import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import { LazyPage2, LazyPage3 } from '../01-lazyload/pages/'

import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo react" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Shopping Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<LazyPage2 />} />
          <Route path="users" element={<LazyPage3 />} />
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
