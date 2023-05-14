import { useEffect, useState } from 'react';
import './App.css';
import { About, Cards, Detail, Error, Favorites, FormClass, Nav } from './components'
// import characters, { Rick } from './data.js';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { EMAIL, PASSWORD } from './constants';
import { addFavorite } from './redux/actions'
import { useDispatch, useSelector } from "react-redux"



function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)


   /**
    * Validate 'userData' and link to '/home'
    * @param {object} userData 
    * @returns 
    */
   const login = (userData) => {
      const { email, password } = userData
      if (email !== EMAIL || password !== PASSWORD) return
      setAccess(true)
      navigate('/home')
   }

   /**
    * Set 'access' to 'false' and link to '/' 
    */
   const logout = () => {
      setAccess(false)
      navigate('/')
   }

   /**
    * @param {object} character character to be added 
    */
   const addCharacter = (character) => {
      if (!character.name)
         window.alert('Character not found');
      else if (characters.find(e => e.id === Number(character.id)))
         window.alert(`Character's already added!`);
      else
         setCharacters((characters) => [...characters, character]);
   }
   /**
    * Find the character by id and add it to the list.
    *  
    * @param {number} id character's id
    */
   function addCharacterById(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => { addCharacter(data) })
         .catch(() => addCharacter({}))
   }

   /**
    * Add a random character to the list.
    */
   function addRandomCharacter() {
      axios.get(`https://rickandmortyapi.com/api/character`)
         .then(({ data }) => {
            let randomId = Math.floor(Math.random() * data.info.count) + 1;
            return axios(`https://rickandmortyapi.com/api/character/${randomId}`)
         })
         .then(({ data }) => { setCharacters((characters) => [...characters, data]) });
   }

   /**
    * @param {number} id character's id
    * @returns a function that removes a character by id.
    */
   const removeCharacter = (id) =>
      setCharacters(
         characters.filter((e) => e.id !== Number(id))
      )

   /**
    * Return to '/' if 'access' is 'false' 
    */
   useEffect(() => {
      !access && navigate('/')
   }, [access])

   return (
      <div className='App'>
         {/* Render Nav */}
         {(location.pathname !== '/')
            ? <Nav onSearch={addCharacterById} onRandom={addRandomCharacter} logout={logout} />
            : <div></div>
         }
         {/* Render Routes */}
         <Routes>
            <Route path='/' element={<FormClass login={login} />} />
            <Route path="/about" element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="/home" element={
               <Cards characters={characters} onClose={removeCharacter} showCloseButton={true} />
            } />
            <Route path='/favorites' element={
               <Favorites />
            } />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
