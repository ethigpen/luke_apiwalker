import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SearchForm = () => {

    const [cat, setCat]=useState([]);
    const [formInfo, setFormInfo]=useState({
        cat:"people",
        id: ""
    });
    const history = useHistory("");

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(res=>{
            console.log(res)
            setCat(Object.keys(res.data))
        })
        .catch(err=>console.log(err))
    },[])

    const changeHandler=(e)=>{
        // console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
    })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(formInfo)
        history.push(`/${formInfo.cat}/${formInfo.id}`)
        // axios.get(`https://swapi.dev/api/${formInfo.cat}/${formInfo.id}`)
        // .then(res=>{
        //     console.log(res.data)
        // })
        // .catch(err=>console.log(err))
        e.target.reset();
    }


    return (
        <div className="mt-5">
            <form onSubmit={submitHandler}>
                <div className="d-flex">
                    <label className="form-label">Search for:</label>
                    <select onChange={changeHandler} name="cat" className="form-select">
                        {
                            cat.map((option,i)=>{
                                return <option  key={i} value={option}>{option}</option>
                            })
                        }
                    </select>
                    <input onChange={changeHandler} name="id" type="number" />
                    <input className ="btn btn-primary" type="submit" value="Search" />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;