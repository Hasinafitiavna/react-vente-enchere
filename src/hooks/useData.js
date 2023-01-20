import {useEffect, useState} from "react";

export function useData(){
    const [data,setData] =useState([] );

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere"
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json)
        };
        loadData();
    },[])

    return data

}

export function useEnchere(id){
    const [data,setData] =useState([]) ;

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/getEncherebyId/"+id;
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json.id)
        };
        loadData();
    },[])

    return data

}

export async function login(name,password ){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/loginadmin/"+name+"/"+password;
    return await fetch(url);
}

export async function lienImage(id){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/lienimage/"+id;
    return await fetch(url);
}
export async function validerRechargerCompte(id,idclient,montant ){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/validerRechargerCompte/"+id+"/"+idclient+"/"+montant;
    return await fetch(url);
}

export async function updateEnchere(id,idproduit,datedebut,datefin,montant ){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/updateEnchere/"+id+"/"+idproduit+"/"+datedebut+"/"+datefin+"/"+montant;
    return await fetch(url);
}
export async function liste() {
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere";
    return await fetch(url);
}
export async function useTableau() {
    const [data,setData] =useState([]) ;

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/getStat";
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json.id)
        };
        loadData();
    },[])

    return data
}
