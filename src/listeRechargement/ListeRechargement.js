import {useEffect, useState} from "react";
import {updateEnchere, validerRechargerCompte} from "../hooks/useData";
import "./listerechargement.css"
function ListeRechargement(){
    if (sessionStorage.getItem("nom")===null){
        window.location.href=`/`;
    }
    const [list,setList] =useState([] );
    // const list =tab;

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/listerechargementcompte"
            const data = await fetch(url);
            const json =await data.json();
            setList(json)
            console.log(json[0].id)
        };
        loadData();
    },[])
    const handleDelete = (id,idclient,montant) => {
        validerRechargerCompte(id,idclient,montant);
        // console.log(id);

        window.location.href="/listeRechargement";
    }
    const affichage=list.map((group,index)=>{
        return(
            // <div key={index}>
            //     <section >
                    <div className="container">
                        <div className="row">
                            <div className="box">{group.id} </div>
                            <div className="box">{group.montant} Ar</div>
                            <div className="box">
                                <button className="btn btn-success" id="valider" onClick={()=>handleDelete(group.id,group.idclient,group.montant)}>valider</button>
                            </div>
                        </div>
                    </div>
        );
    })
    return(
        <div>
            <section >
                {affichage}
                {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="box">Rakoto</div>*/}
            {/*            <div className="box">30.000.000 Ar</div>*/}
            {/*            <div className="box">*/}
            {/*                v*/}
            {/*                <input type="submit" className="btn btn-success" id="valider" value="Valider"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            </section>
        </div>
    );
}
export default ListeRechargement;