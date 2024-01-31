import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import logo from "../assets/coffee.png";


function Coffee () {
    const [coffeeData, setCoffeeData] = useState([]);

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = response.json();
        return data;
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
        let arr = [];
        for(let i = 0; i < 15; i++) {
            fetchData('https://api.sampleapis.com/coffee/hot')
            .then(res => {
                arr.push({
                    id : uuidv4(), 
                    src :  res[i].image,
                    isClicked : false
                })
            });
        }
        setCoffeeData(arr)
    },[])

    return {
        logo,
        data : coffeeData
    }
}

export default Coffee;