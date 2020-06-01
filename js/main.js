console.log('connected1');

import bearDisplay from "./components/bearDisplay.js";
import BestBear from "./components/BestBear.js";
import ControlEvent from "./components/ControlEvent.js";
import AllAndRewards from "./components/AllAndRewards.js";

console.log('connected2');


function getAllBear1 (clicked) {
    bearDisplay.buildBearCard();
}


const clickEvents = () => {
    //$('#getAllBear').on('click')(bearDisplay.buildBearCard);
    ControlEvent.attachEvents();
//    document.querySelector('#getAllBear').addEventListener('click', )
}

ControlEvent.attachEvents();

const init = () => {
    AllAndRewards.makeAllRewardsButtons();
    bearDisplay.buildBearCard();    
    clickEvents();
    //BestBear.buildBestBearCard();
    
}

init();