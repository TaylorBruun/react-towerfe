import { AuthButton } from "./AuthButton"
import { TestButton } from "./TestButton"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { EventDetails } from "./EventDetails"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link to={"/"} className="text-light navbar-brand">
            TowerTest
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item btn">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="nav-item btn">
                <Link to={"/profile"}>Profile</Link>
              </li>
            </ul>
          </div>
          <AuthButton></AuthButton>
          <TestButton></TestButton>
        </div>
      </nav>
    </>
  )
}
