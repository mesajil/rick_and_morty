export default function Card(props) {
   
   const onClick = () => props.onClose(props.id)

   return (
      <div>
         <button onClick={onClick}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={`${props.name} image`} />
      </div>
   );
}
