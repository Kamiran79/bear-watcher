

import bearData from "../helpers/data/bearData.js";
import utils from "../helpers/utils.js";
//import ControlEvent from "./ControlEvent.js";
import bearDisplay from "./bearDisplay.js";

//ControlEvent.attachEvents();

function getAllBear1 (clicked) {
    bearDisplay.buildBearCard();
}

const buildBestBearCard = () => {
    //const bearInfo = bearData.getBear();
    //$('#getAllBear').on('click')(bearDisplay.buildBearCard('hide'));
    //ControlEvent.attachEvents();
    let myCurrentBestBearFind = false;
    let myLastBestBearFind = false;
    const bearInfo = bearData.getBear();
    //const getBear = bearInfo.findIndex(bearInfo.currentRewards === 'Gold');

    const myIndex = (element) => element.currentRewards === 'Gold';
    const myLastBestBear = (element) => element.lastRewards === 'Gold';
    let getBestBear = bearInfo.findIndex(myIndex);
    if (getBestBear === -1) {
        getBestBear = bearInfo.findIndex(myLastBestBear);
    }

    let domString = '';
    domString = `<h2> Best Bear </h2>`;
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
            //return;
        } 
    }
    console.log(bearInfo);
    //console.log(domString);
    utils.printToDom("#reiverSide", domString);
    
    //$('getAllBear').click(ControlEvent.attachEvents());
    //ControlEvent.attachEvents();
    //document.querySelector("#getFish").addEventListener('click', updateCard);
    //$('#get')
}

export default { buildBestBearCard };


/*
it have the culomn

                <div class ="col-sm-4">
                    <div id="${bearInfo[i].id}" class="card mb-4 bear-card" style="width: 20rem;">
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
                        <div class="card-body">                        
                            <button type="button" class="btn btn-secondary getFish">Catch Fish</button>
                            <a href="#" class="btn btn-primary">img show catch or not</a>
                        </div>
                    </div>
                </div>


*/