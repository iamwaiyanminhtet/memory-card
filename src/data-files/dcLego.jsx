import logo from "../assets/dc-lego/dc-logo.png";
import batman from "../assets/dc-lego/batman.jpg";
import constantine from "../assets/dc-lego/constantine.jpg";
import flash from "../assets/dc-lego/flash.jpg";
import cyborg from "../assets/dc-lego/cyborg.jpg";
import superman from "../assets/dc-lego/superman.png";
import aquaman from "../assets/dc-lego/aquaman.png";
import wonderWoman from "../assets/dc-lego/wonder-woman.jpg";
import { v4 as uuidv4 } from 'uuid';

function dcLego() {
    let dcLegoHeroes = {
        logo,
        data : [
            { id : uuidv4(), src :  batman},
            { id : uuidv4(), src :  superman},
            { id : uuidv4(), src :  flash},
            { id : uuidv4(), src :  constantine},
            { id : uuidv4(), src :  aquaman},
            { id : uuidv4(), src :  wonderWoman},
            { id : uuidv4(), src :  cyborg},
        ]
    }

    return dcLegoHeroes;
}

export default dcLego;