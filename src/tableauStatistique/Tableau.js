import "./tableau.css"
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
// import {useState} from "react
import {useEffect, useState} from "react";
import {useTableau} from "../hooks/useData";

function Tableau(){
    if (sessionStorage.getItem("nom")===null){
        window.location.href=`/`;
    }
    // const tab=useTableau();
    const [data,setD] =useState([]) ;

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/getStat";
            const data = await fetch(url);
            const json =await data.json();
            setD(json)
            // console.log(json.id)
        };
        loadData();
    },[])
    // const [userData,setData] = useState()
    return(
        <div>
            {


            }
            <Bar data={{
                labels:["maxenchere","totalbenefice"],
                datasets:[{
                    labels:"users gained",
                    data:[data.maxenchere,data.totalbenefice],
                }]
            }}/>
        </div>
    );
}
export default Tableau;