import React from 'react'
import { Route, Routes } from 'react-router';
import ListDogs from './components/DogsList';
import GeolocationContainer from './components/GeolocationContainer'
import PersonList from './components/PersonList'
import DogPage from './components/DogPage';
import CreateDog from './components/CreateDog';
import { BrowserRouter } from 'react-router-dom';
import UpdateDog from './components/UpdateDog';
import SingUp from './components/Signup';
import Login from './components/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:dogId" element={<DogPage/>}>
          </Route>
          <Route path="/update/:dogId" element={<UpdateDog/>}>
          </Route>
          <Route path='/' element={<PersonList/>}>
          </Route>
          <Route path='/create' element={<CreateDog/>}>
          </Route>
          <Route path="/dogs" element={<ListDogs/>}>
          </Route>
          <Route path='/signup' element={<SingUp/>}>
          </Route>
          <Route path='/login' element={<Login/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
