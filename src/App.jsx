import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import RootLayout from './components/RootLayout/RootLayout'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <RootLayout /> } >
        <Route index element={<Home />} />
        
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
