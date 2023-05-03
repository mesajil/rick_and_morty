import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
// import characters, { Rick } from './data.js';
import axios from 'axios'

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

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
      axios.get(`https://rickandmortyapi.com/api/character`).then(({data}) => {
         let random = Math.floor(Math.random() * data.info.count) + 1;
         axios(`https://rickandmortyapi.com/api/character/${random}`)
            .then(({ data }) => { setCharacters((characters) => [...characters, data])});
      })
   }
   // function onRandom() {
   //    axios.get(`https://rickandmortyapi.com/api/character`).then(({data}) => {
   //       let random = Math.floor(Math.random() * data.info.count) + 1;
   //       console.log(data.results[random].id)
   //       // setCharacters((characters) => [...characters, data.results.find(e => e.id === random)])
   //    })
   // }

   const onClose = (id) => {
      setCharacters(characters.filter((e) => e.id !== Number(id)))
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} onRandom={onRandom}/>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Cards characters={characters} onClose={onClose}/>
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
