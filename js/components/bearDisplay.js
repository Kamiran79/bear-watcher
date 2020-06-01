import bearData from "../helpers/data/bearData.js"
import utils from "../helpers/utils.js";



//const findDinoIndexById = bearID => myBear.findIndex(bear => bear.id === bearID);

const myBear = bearData.getBear();
const findDinoIndexById = (bearID) => mybear.findIndex(bear.id === bearID);

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
    let fish = Math.floor(Math.random() * Math.floor(2));    
    //console.log("catch fish", fish);
    for (let i = 0; i<myBear.length; i++) {
        //const bear = myBear[i];
        //const findDinoIndexById = bearID => myBear.findIndex(bear => bear.id === bearID);        
        //console.log("this is the index of bear", findDinoIndexById);
        //console.log(Number(myBear[i].id));
        //console.log(bearID);
        if (myBear[i].id === Number(bearID)) {
            //console.log("correct");
            myBear[i].totalFish +=fish;
            myBear[i].duration +=0.5;
            myBear[i].fat = myBear[i].totalFish/myBear[i].duration;
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
    const bestBear = bearData.getSelectedBestBear();
    let domString = '';
    for (let i = 0; i < bearInfo.length; i++) {
        domString +=`
            <div class ="col-sm-4">
                <div id="${bearInfo[i].id}" class="card mb-4 bear-card" style="width: 20rem;">
                    <img src="${bearInfo[i].imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bearInfo[i].name}</h5>   
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Current Total Fish catchs: ${bearInfo[i].totalFish}</li>
                            <li class="list-group-item">Duration: ${bearInfo[i].duration}</li>
                            <li class="list-group-item">Fat: ${bearInfo[i].fat.toFixed(3)}</li>
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
        `;
    }
    console.log(bearInfo);
    //console.log(domString);
    utils.printToDom("#reiverSide", domString);
    $('.bear-card').click(updateCard);
    $('.getNewRewards').click(newRewards);
    //attachEvents();
    //document.querySelector("#getFish").addEventListener('click', updateCard);
    //$('#get')
}

const newRewards = (e) => {
    e.preventDefault();
    let i = Math.max.apply(Math, myBear.map(function(myBear) { return myBear.fat; }));
    //let i = Math.max(...myBear.fat);
    console.log("this is the index of the best bear", i);
    console.log("this is new rewards");
}


export default { buildBearCard };