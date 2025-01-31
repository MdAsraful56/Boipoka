import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import RootLayout from './components/RootLayout/RootLayout'
import BooksDetailes from './components/BooksDetailes/BooksDetailes'
import ListBook from './components/ListBook/ListBook'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <RootLayout /> } >
        <Route index element={<Home />} />
        <Route path='/books/:id' loader={() => fetch('../../../public/EnglishBooks.json')} element={ <BooksDetailes /> } />
        <Route path='/listbooks' element={ <ListBook/> } />
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
