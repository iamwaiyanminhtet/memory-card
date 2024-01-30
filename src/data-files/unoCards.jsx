import { v4 as uuidv4 } from 'uuid';

import logo from "../assets/uno/uno-logo.png"
import r2 from "../assets/uno/red-2.jpg"
import r4 from "../assets/uno/red-4.jpg"
import r5 from "../assets/uno/red-5.jpg"
import r9 from "../assets/uno/red-9.jpg"

import g2 from "../assets/uno/green-2.jpg"
import g4 from "../assets/uno/green-4.jpg"
import g5 from "../assets/uno/green-5.jpg"
import g9 from "../assets/uno/green-9.jpg"

import b2 from "../assets/uno/blue-2.jpg"
import b4 from "../assets/uno/blue-4.jpg"
import b5 from "../assets/uno/blue-5.jpg"
import b9 from "../assets/uno/blue-9.jpg"

import y2 from "../assets/uno/yellow-2.jpg"
import y5 from "../assets/uno/yellow-5.jpg"
import y9 from "../assets/uno/yellow-9.jpg"

export default function UNO() {
    return {
        logo,
        data : [
            { 
                id : uuidv4(), 
                src :  r5,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  b5,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  g5,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  y5,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  r2,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  b2,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  g2,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  y2,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  r9,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  b9,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  g9,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  r4,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  b4,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  g4,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  y9,
                isClicked : false
            },
        ]
    }

}