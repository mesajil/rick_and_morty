import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail'
import About from "./views/About"
import Error from "./views/Error"
import Form from "./views/Form"
// import characters, { Rick } from './data.js';
import axios from 'axios'
import { Routes, Route, useLocation } from "react-router-dom"

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {

            if (!data.name) {
               window.alert('¡No hay personajes con este ID!');
            }
            else if (!characters.find(e => e.id === Number(id))) {
               setCharacters((characters) => [...characters, data]);
            }
            else {
               window.alert(`¡El personaje con id ${id} ya fue agregado!`);
            }
         });
   }
   function onRandom() {
      axios.get(`https://rickandmortyapi.com/api/character`).then(({ data }) => {
         let random = Math.floor(Math.random() * data.info.count) + 1;
         axios(`https://rickandmortyapi.com/api/character/${random}`)
            .then(({ data }) => { setCharacters((characters) => [...characters, data]) });
      })
   }
   // function onRandom() {
   //    axios.get(`https://rickandmortyapi.com/api/character`).then(({data}) => {
   //       let random = Math.floor(Math.random() * data.info.count) + 1;
   //       console.log(data.results[random].id)
   //       // setCharacters((characters) => [...characters, data.results.find(e => e.id === random)])
   //    })
   // }

   const onClose = (id) => setCharacters(characters.filter((e) => e.id !== Number(id)))

   return (
      <div className='App'>


         <Nav onSearch={onSearch} onRandom={onRandom} />
         <Routes>
            <Route path='/' element={
               <div>
                  <Form />
                  <Cards characters={characters} onClose={onClose} />
               </div>
            } />
            <Route path="/about" element={
               <About />
            } />
            <Route path='/detail/:id' element={
               <Detail />
            } />
            <Route path='*' element={
               <Error />
            } />
         </Routes>



         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
