import {lienImage, useData} from "../hooks/useData";
import "./ListeEnchere.css"
import "./app"
import {useState} from "react";
function ListeEnchere() {
    if (sessionStorage.getItem("nom")===null){
        window.location.href=`/`;
    }
    const list=useData();
    const handleOnChangePage = (id) => {
        localStorage.setItem("idEnchere",id);
        window.location.href=`/modifierEnchere`;
    }
    const handleOnclick = (event) => {
        event.target.className="bloc active";
        const allBlocs = document.querySelectorAll('.bloc');
        allBlocs.forEach(bloc => {
            bloc.addEventListener('click', (e) => {
                e.target.classList.add('active');
                for(let i = 0; i < allBlocs.length; i++ ){
                    if(allBlocs[i] !== e.target){
                        allBlocs[i].classList.remove('active');
                    }
                }
            })
        })
        // const buttons = document.querySelectorAll('button');
        // buttons.forEach(btn => {
        //     btn.addEventListener('click', (e) => {
        //         e.stopPropagation();
        //     })
        // })
    }


    const n=list.map((liste,index)=>{


        let b="bloc";
        if (index===0){
            b+=" active";
        }
        // let image="";
        // lienImage(liste.id).then( async (res)=>{
        //     // console.log(await res.text())
        //     image=await res.text();
        // })
        const images="./ressources/"+liste.image;
        // console.log(image)
        return(
            <div key={index} className={b} onClick={handleOnclick}>
                <div className="bloc-haut">
                    <div className="rond">
                        <img src={images} alt=""/>
                    </div>
                    <p className="titre-section">{liste.nomproduit}</p>
                    <div className="ligne"></div>
                    <p className="prix">{"ar"+liste.montantBase}</p>
                </div>
                <div className="contenu">
                    <img src={images} alt=""/>
                    <div className="infos">
                        <h2>{liste.nomproduit}</h2>
                        <button onClick={()=>handleOnChangePage(liste.id)}>modifier</button>
                    </div>
                </div>
            </div>
        );
    })
    return(
        <div>
            <div className="cont">
                {n}
            </div>
        </div>
    );
}
export default ListeEnchere;
