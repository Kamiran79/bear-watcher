import bearData from "../helpers/data/bearData.js"
import utils from "../helpers/utils.js";
import BestBear from "./BestBear.js";

const myBear = bearData.getBear();
//const findDinoIndexById = (bearID) => mybear.findIndex(bear.id === bearID);
let fishCatch = 0;

const updateCard = (e) => {

    const bearID = e.target.closest('.bear-card').id;

    let fish = Math.floor(Math.random() * Math.floor(6));
    fishCatch = fish;        
    for (let i = 0; i<myBear.length; i++) {
        myBear[i].currentCatch = 0;
        myBear[i].catchColor = 'secondary';
        if (myBear[i].id === Number(bearID)) {            
            myBear[i].totalFish +=fish;
            myBear[i].duration +=1;
            myBear[i].fat = myBear[i].totalFish/myBear[i].duration;
            myBear[i].currentCatch = fish;
            if (fish > 0) {
                myBear[i].catchColor = 'success';
            } else {
                myBear[i].catchColor = 'danger';
            }
        }
    }
    buildBearCard();
}

const buildBearCard = () => {
    const bearInfo = bearData.getBear();
    let domString = '';
    for (let i = 0; i < bearInfo.length; i++) {
        domString +=`
            <div class ="col-sm-4">
                <div id="${bearInfo[i].id}" class="card mb-4 bear-card" style="width: 22rem;">
                    <img src="${bearInfo[i].imageUrl}" class="card-img-top card-img-top1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bearInfo[i].name}</h5>   
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Current Total Fish catchs: ${bearInfo[i].totalFish}</li>
                            <li class="list-group-item">Duration: ${bearInfo[i].duration} hrs.</li>
                            <li class="list-group-item">Fat: ${bearInfo[i].fat.toFixed(3)}</li>
                            <li class="list-group-item">Rewards: ${bearInfo[i].currentRewards} & Fat: ${bearInfo[i].currentFat.toFixed(3)}</li>
                            <li class="list-group-item">Last Rewards: ${bearInfo[i].lastRewards}</li>
                        </ul>                                         
                    </div>
                    <div class="card-body">                        
                        <button type="button" class="btn btn-primary getFish">Catch Fish</button>                        
                        <a href="#" class="btn btn-${bearInfo[i].catchColor}">Fish Catch: ${bearInfo[i].currentCatch}</a>
                    </div>
                </div>
            </div>
        `;
    }
    utils.printToDom("#reiverSide", domString);
    $('.getFish').click(updateCard);
    $('.getNewRewards').click(newRewards);
}

const newRewards = (e) => {
    e.preventDefault();
    myBear.sort((a, b) => (a.fat < b.fat) ? 1 : -1);
    for (let i=0; i < myBear.length; i++) {
        if (i === 0) {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'Gold';
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';
        } else if (i === 1) {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'Silver';
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';
        } else if (i === 2) {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'Bronze';            
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';            
        } else {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'none';            
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';                          
        }
    }
    buildBearCard();    
    i=0;
}


const buildBestBearCard = () => {

    BestBear.buildBestBearCard();

    $('#getAllBear').click(buildBearCard);
    $('.getNewRewards').click(newRewards);

}


export default { buildBearCard, buildBestBearCard };
