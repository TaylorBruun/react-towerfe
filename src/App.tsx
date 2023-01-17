import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import "./App.css"
import { AuthButton } from "./components/AuthButton"
import { EventGrid } from "./components/EventGrid"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"
import { TestButton } from "./components/TestButton"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { About } from "./components/About"
import { EventDetails } from "./components/EventDetails"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/events/:eventId" element={<EventDetails />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
            <Outlet />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
