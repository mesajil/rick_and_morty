import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { About, Cards, Detail, Error, Favorites, FormClass, Nav } from './components'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { CHARACTER_URL, EMAIL, API_URL, PASSWORD } from './utils/constants';
import { useDispatch } from "react-redux"
import FormView from './components/Form/FormView';



function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)


   /**
    * Login and go home
    * @param {object} formUserData
    */
   const login = (formUserData) => {
      const { email, password } = formUserData
      if (email !== EMAIL || password !== PASSWORD) return
      setAccess(true)
      navigate('/home')
   }


   const logout = () => {
      setAccess(false)
      navigate('/')
   }

   /**
    * @param {object} character character to be added 
    */
   const handleAddCharacter = (character) => {
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
      axios(`${CHARACTER_URL}/${id}`)
         .then(({data}) => {
            console.log(data);
            handleAddCharacter(data)
         })
         .catch(() => handleAddCharacter({}))
   }

   /**
    * Add a random character to the list.
    */
   function addRandomCharacter() {
      axios.get(API_URL)
         .then(({ data }) => {
            let randomId = Math.floor(Math.random() * data.info.count) + 1;
            return axios(`${CHARACTER_URL}/${randomId}`)
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
    * Return to form if there's no access 
    */
   useEffect(() => {
      !access && navigate('/')
   }, [access])

   return (
      <div className='App'>
         {/* Render Nav */}
         {(location.pathname !== '/')
            ? <Nav
               onSearch={addCharacterById}
               onRandom={addRandomCharacter}
               logout={logout} />
            : <div></div>
         }
         {/* Render Routes */}
         <Routes>

            <Route path='/' element={<FormView login={login} />} />
            <Route path="/about" element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="/home" element={
               <Cards
                  characters={characters}
                  onClose={removeCharacter}
                  showCloseButton={true}
               />
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
