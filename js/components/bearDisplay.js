import bearData from "../helpers/data/bearData.js"
import utils from "../helpers/utils.js";
import BestBear from "./BestBear.js";



//const findDinoIndexById = bearID => myBear.findIndex(bear => bear.id === bearID);

const myBear = bearData.getBear();
const findDinoIndexById = (bearID) => mybear.findIndex(bear.id === bearID);
let fishCatch = 0;


const updateCard = (e) => {
    //console.log("fire event");
    //const myBear = bearData.getBear();
    //console.log(myBear);
    const bearID = e.target.closest('.bear-card').id;
    //console.log(bearID);
    //let n = Number(bearID);
    //const myIndex = (element) => element.currentRewards === 'Gold';
    //const getBear = myBear.findIndex(myIndex);
    //console.log(getBear);
    //const bearIndex = bearID.findIndex(myBear => myBear.id === bearID);
    //const bearIndex = findDinoIndexById(n);
    //console.log(bearIndex);
    //console.log(myBear.findIndex(n === myBear.id));
    //console.log("this is the index of bear", bearIndex);
    //e.preventDefault();
    let fish = Math.floor(Math.random() * Math.floor(6));
    fishCatch = fish;    
    //console.log("catch fish", fish);
    for (let i = 0; i<myBear.length; i++) {
        //const bear = myBear[i];
        //const findDinoIndexById = bearID => myBear.findIndex(bear => bear.id === bearID);        
        //console.log("this is the index of bear", findDinoIndexById);
        //console.log(Number(myBear[i].id));
        //console.log(bearID);
        myBear[i].currentCatch = 0;
        if (myBear[i].id === Number(bearID)) {
            //console.log("correct");
            myBear[i].totalFish +=fish;
            myBear[i].duration +=1;
            myBear[i].fat = myBear[i].totalFish/myBear[i].duration;
            myBear[i].currentCatch = fish;
            //console.log("the current fish total", myBear[i].totalFish);
            //console.log("got the correct bear");
        }
    }
    buildBearCard();

}





const attachEvents = () => {
    genericEventAttacher('.getFish', updateCard);
    //genericEventAttacher('.delete-dino', deleteThisDinoEvent);
    //genericEventAttacher('.pet-button', petThisDinoEvent);
};


const genericEventAttacher = (selector, functionToAttach) => {
    const targets = document.querySelectorAll(selector);
    for (let i = 0; i < targets.length; i++) {
      targets[i].addEventListener('click', functionToAttach);
    }
};



const buildBearCard = () => {
    const bearInfo = bearData.getBear();
    //const bestBear = bearData.getSelectedBestBear();
    //console.log(bears);
    let domString = '';
    for (let i = 0; i < bearInfo.length; i++) {
        domString +=`
            <div class ="col-sm-4">
                <div id="${bearInfo[i].id}" class="card mb-4 bear-card" style="width: 20rem;">
                    <img src="${bearInfo[i].imageUrl}" class="card-img-top card-img-top1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bearInfo[i].name}</h5>   
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Current Total Fish catchs: ${bearInfo[i].totalFish}</li>
                            <li class="list-group-item">Duration: ${bearInfo[i].duration} hrs.</li>
                            <li class="list-group-item">Fat: ${bearInfo[i].fat.toFixed(3)}</li>
                            <li class="list-group-item">Current Rewards: ${bearInfo[i].currentRewards}</li>
                            <li class="list-group-item">Last Rewards: ${bearInfo[i].lastRewards}</li>
                        </ul>                                         
                    </div>
                    <div class="card-body">                        
                        <button type="button" class="btn btn-primary getFish">Catch Fish</button>                        
                        <a href="#" class="btn btn-secondary">Fish Catch: ${bearInfo[i].currentCatch}</a>
                    </div>
                </div>
            </div>
        `;
    }
    console.log(bearInfo);
    //console.log(domString);
    utils.printToDom("#reiverSide", domString);
    $('.getFish').click(updateCard);
    $('.getNewRewards').click(newRewards);
    //attachEvents();
    //document.querySelector("#getFish").addEventListener('click', updateCard);
    //$('#get')
}

const newRewards = (e) => {
    e.preventDefault();
    let goldFat = Math.max.apply(Math, myBear.map(function(myBear) { return myBear.fat; }));
    let hm = myBear.filter(best => best.fat === i );
    console.log("this is bounus filter to find how many fat there: ", hm.length);
    //for (i = 0; i < myBear.length)
    //let i = Math.max(...myBear.fat);
    console.log("this is the index of the best bear", goldFat);
    console.log("this is new rewards");
}



const buildBestBearCard = () => {

    BestBear.buildBestBearCard();

    $('#getAllBear').click(buildBearCard);
    $('.getNewRewards').click(newRewards);

}




export default { buildBearCard, buildBestBearCard };



/*

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
    $('#getAllBear').click(buildBearCard);
    $('.getNewRewards').click(newRewards);
    
    //$('getAllBear').click(ControlEvent.attachEvents());
    //ControlEvent.attachEvents();
    //document.querySelector("#getFish").addEventListener('click', updateCard);
    //$('#get')
}


*/
