

import bearData from "../helpers/data/bearData.js";
import utils from "../helpers/utils.js";

const buildBestBearCard = () => {

    const bearInfo = bearData.getBear();

    const myIndex = (element) => element.currentRewards === 'Gold';
    const myLastBestBear = (element) => element.lastRewards === 'Gold';
    let getBestBear = bearInfo.findIndex(myIndex);
    if (getBestBear === -1) {
        getBestBear = bearInfo.findIndex(myLastBestBear);
    }

    let domString = '';
    domString = `<h2> Let's have some fun with helping bears to catch fish! </h2>`;
    utils.printToDom("#currentDisplay", domString);
    for (let i = 0; i < bearInfo.length; i++) {        
        if (i === getBestBear){
            console.log("inside the if statment to build domString");
            domString =`                
                    <div id="${bearInfo[i].id}" class="card mb-4 bear-card" >
                        <img src="${bearInfo[i].imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${bearInfo[i].name}</h5>   
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Current Total Fish catchs: ${bearInfo[i].totalFish}</li>
                                <li class="list-group-item">Duration: ${bearInfo[i].duration}</li>
                                <li class="list-group-item">Current Rewards: ${bearInfo[i].currentRewards}</li>
                                <li class="list-group-item">Last Rewards: ${bearInfo[i].lastRewards}</li>
                            </ul>                                         
                        </div>
                    </div>                
            `;                        
        } 
    }        
    utils.printToDom("#reiverSide", domString);

}

export default { buildBestBearCard };
