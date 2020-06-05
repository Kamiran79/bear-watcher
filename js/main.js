console.log('connected1');

import bearDisplay from "./components/bearDisplay.js";
import AllAndRewards from "./components/AllAndRewards.js";
import newBear from "./components/newBear.js";

console.log('connected2');

const init = () => {
    AllAndRewards.makeAllRewardsButtons();
    bearDisplay.buildBestBearCard();    
    document.querySelector('#submit-new-bear').addEventListener('click', newBear.createNewBear);
}

init();
