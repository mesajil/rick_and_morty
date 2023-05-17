import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
      // console.log(id)
   }

   const onClick = () => {
      onSearch(id)
   }

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={onClick}>Agregar</button>
      </div>
   );
}
