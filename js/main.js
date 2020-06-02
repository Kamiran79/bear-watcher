console.log('connected1');

import bearDisplay from "./components/bearDisplay.js";
//import BestBear from "./components/BestBear.js";
//import ControlEvent from "./components/ControlEvent.js";
import AllAndRewards from "./components/AllAndRewards.js";
//import bearData from "./helpers/data/bearData.js";

console.log('connected2');


function getAllBear1 (clicked) {
    bearDisplay.buildBearCard();
}


const clickEvents = () => {
    //$('#getAllBear').on('click')(bearDisplay.buildBearCard);
    ControlEvent.attachEvents();
//    document.querySelector('#getAllBear').addEventListener('click', )
}

//ControlEvent.attachEvents();

const init = () => {
    AllAndRewards.makeAllRewardsButtons();
    //const bearInfo = bearData.getBear();
    bearDisplay.buildBestBearCard();    
    //clickEvents();
    //BestBear.buildBestBearCard();
    
}

init();
