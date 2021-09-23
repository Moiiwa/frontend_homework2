import React, {useEffect, useState} from 'react';
import './PersonContainer.css'
import axios from "axios";
import Person from "../Person/Person";
export default function PersonContainer(props){
    const [data, setData] = useState([]);
    const [loads, setLoads] = useState(0)
    async function requestData() {
        const data = await axios('http://localhost:3003/info', {
            method: 'GET',
            url: 'http://localhost:3003/info',
            headers: {
                'Content-Type': 'application/json',
                Authorization: props.token,
            },
        }).then((response) => {
            let responseList = [];
            response.data.forEach(item => responseList.push(item))
            setData(responseList)
        });
    }
    useEffect(() => requestData(), [])
    return (
        <div className={"PersonContainer"}>
            {data.map(item => (
                <Person id={item.id} name={item.name} email={item.email} avatar={item.avatar} address={item.address}/>
            ))}
        </div>
    )
}