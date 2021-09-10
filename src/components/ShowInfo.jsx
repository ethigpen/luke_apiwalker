import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const ShowInfo = () => {

    const {cat,id} = useParams();
    const [info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${cat}/${id}`)
        .then(res=>{
            console.log(res.data)
            setInfo(res.data)
        })
        .catch(err=>console.log(err))
    },[cat, id])



    return (

        <div>
            {cat=="people"?
            <>
            <h1>Info to Display:</h1>
            <h3>Name: {info.name}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birth Year: {info.birth_year}</h3>
            </>:
            cat =="planets"?
            <>
            <h1>Info to Display:</h1>
            <h3>Name: {info.name}</h3>
            <h3>Climate: {info.climate}</h3>
            <h3>Terrain: {info.terrain}</h3>
            <h3>Diameter: {info.diameter} km</h3>
            </>:
            cat == "films"?
            <>
            <h1>Info to Display:</h1>
            <h3>Title: {info.title}</h3>
            <h3>Director: {info.director}</h3>
            <h3>Producer: {info.producer}</h3>
            <h3>Release Date: {info.release_date}</h3>
            </>:
            cat =="starships"?
            <>
            <h1>Info to Display:</h1>
            <h3>Name: {info.name}</h3>
            <h3>Model: {info.model}</h3>
            <h3>Starship Class: {info.starship_class}</h3>
            <h3>Cost in Credits: {info.cost_in_credits}</h3>
            </>:
            cat =="vehicles"?
            <>
            <h1>Info to Display:</h1>
            <h3>Name: {info.name}</h3>
            <h3>Model: {info.model}</h3>
            <h3>Vehicle Class: {info.vehicle_class}</h3>
            <h3>Cost in Credits: {info.cost_in_credits}</h3>
            </>:
            cat =="species"?
            <>
            <h1>Info to Display:</h1>
            <h3>Name: {info.name}</h3>
            <h3>Classification: {info.classification}</h3>
            <h3>Language: {info.language}</h3>
            <h3>Average Lifespan: {info.average_lifespan} years</h3>
            </>:
            <>
            <img className="mt-3" src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt="Obi Wan Kenobi" />
            </>
        }
            
        </div>
    );
};

export default ShowInfo;