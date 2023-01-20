
import {useEffect, useState} from "react";
import "./modifierenchere.css";
import {updateEnchere} from "../hooks/useData";

function ModifierEnchere() {
    if (sessionStorage.getItem("nom")===null){
        window.location.href=`/`;
    }
    const [list,setList]=useState([]);
    const [montant,setMontant]=useState("");
    const [datedebut,setDateDebut]=useState("");
    const [datefin,setDateFin]=useState("");
    const [idproduit,setIdProduit]=useState("");
    const [idenchere,setId]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        updateEnchere(idenchere,idproduit,datedebut,datefin,montant)

        window.location.href="/liste";
    }
    const handleChangeMontant=(event)=>{
        setMontant(event.target.value);
    }
    const handleChangeDateDebut = (event) => {
        setDateDebut(event.target.value);
    }
    const handleChangeDateFin = (event) => {
        setDateFin(event.target.value);
    }
    const handleChangeIdProduit=(event)=>{

        setIdProduit(event.target.value);
    }
    useEffect(()=>{
        // alert(list.id);
        const loadData = async ()=>{
            const id=localStorage.getItem("idEnchere");
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/getEncherebyId/"+id;
            const data = await fetch(url);
            const json =await data.json();
            // setList(json);
            setMontant(json.montantBase);
            setDateDebut(json.dateDebut);
            setDateFin(json.dateFin);
            setIdProduit(json.idproduit);
            setId(json.id);
        };
        loadData();
    },[]);
    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeproduit";
            const data = await fetch(url);
            const json =await data.json();
            setList(json);
        };
        loadData();
    },[]);
    return (

        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-2">Login</h4>
                            <form action="submit"  className="mb-3" onSubmit={handleSubmit}>
                                <div className="mb-3">

                                    <label htmlFor="email" className="form-label">Montant de base</label>
                                    <input className="form-control" value={montant} type="number"  onChange={handleChangeMontant}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">produit</label>

                                    {/*<input className="form-control" value={password} type="password"  onChange={handleChangePassword}/>*/}
                                    <select onChange={handleChangeIdProduit} value={idproduit} className="form-control" >
                                        {
                                            list.map((liste)=>(
                                                <option key={liste.id} value={liste.id}>{liste.nom}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">date debut</label>
                                    <input className="form-control" value={datedebut} type="datetime-local"  onChange={handleChangeDateDebut}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">date fin</label>
                                    <input className="form-control" value={datefin} type="datetime-local"  onChange={handleChangeDateFin}/>
                                </div>
                                <div className="mb-3">
                                    <button  className="btn btn-primary d-grid w-100">
                                        <i className="bi bi-door-open"></i>Modifier
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModifierEnchere;