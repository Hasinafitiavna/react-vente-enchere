
import './App.css';
import Login from "./Login";
import {Routes,Route} from "react-router-dom";
import ListeEnchere from "./listeEnchere/ListeEnchere";
import Tableau from "./tableauStatistique/Tableau";
import ModifierEnchere from "./modifierEnchere/ModifierEnchere";
import ListeRechargement from "./listeRechargement/ListeRechargement";

function App(){
//   const [fruits,setFruits]=useState([
//     {id:1,nom:"abricot"},
//     {id:2,nom:"banane"},
//     {id:3,nom:"cerise"}
//   ]);
//   const [nouveaufruit,setnouveaufruit]=useState("")
//   // const inputRef=useRef();
//   //comportement
//   const handleDelete = (id) => {
//     console.log(id);
//   //1  copie du state
//     const fruitscopy= [...fruits];
//     //2 manipuler mon state
//     const fruitsCopyUpdated=fruitscopy.filter(fruit=> fruit.id !==id);
//   //3 modifier mon state avec le setter
//     setFruits(fruitsCopyUpdated);
//   }
//   const handleSubmit=(event)=>{
//     event.preventDefault();
//     const fruitsCopy=[...fruits];
//     const id=new Date().getTime();
//     const name =nouveaufruit;
//     fruitsCopy.push({id,nom: name});
//     setFruits(fruitsCopy);
//     setnouveaufruit("");
//   }
//   const handleChange=(event)=>{
//     setnouveaufruit(event.target.value);
//   }
//   //afficher(render)
//   return (
//       <div>
//         <h1>liste fruit</h1>
//         <ul>
//           {
//             fruits.map((fruit)=>(
//               <li key={fruit.id}>
//                 {fruit.nom}
//                 <button onClick={()=>handleDelete(fruit.id)}>x</button>
//               </li>
//             ))
//           }
//         </ul>
//         <form action="submit" onSubmit={handleSubmit}>
//           <input value={nouveaufruit} type="text" placeholder="ajouter un fruit" onChange={handleChange}/>
//           <button>ajouter</button>
//         </form>
//       </div>
// );
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/liste" element={<ListeEnchere/>}/>
                <Route path="/tableau" element={<Tableau/>}/>
                <Route path="/modifierEnchere" element={<ModifierEnchere/>}/>
                <Route path="/listeRechargement" element={<ListeRechargement/>}/>
            </Routes>
        </div>
    );
}
export default App;
//gestion du formulaire
//1. creation du formulaire
//2. soumission du formulaire
//3. collecte des données du formulaire