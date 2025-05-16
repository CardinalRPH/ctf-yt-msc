import { RouterProvider } from "react-router-dom"
import AppRouter from "./routes/router"
import { useEffect } from "react"

function App() {
  useEffect(()=> {
    document.documentElement.classList.add("dark")
    document.body.classList.add("bg-stone-950")
  },[])

  return (
    <RouterProvider router={AppRouter}/>
  )
}

export default App
