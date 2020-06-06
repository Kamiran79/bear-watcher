import bearData from "../helpers/data/bearData.js"
import utils from "../helpers/utils.js";
import BestBear from "./BestBear.js";

const myBear = bearData.getBear();
let fishCatch = 0;

const updateCard = (e) => {

    const bearID = e.target.closest('.bear-card').id;

    let fish = Math.floor(Math.random() * Math.floor(6));
    fishCatch = fish;        
    for (let i = 0; i<myBear.length; i++) {
        myBear[i].currentCatch = 0;
        myBear[i].catchColor = 'secondary';
        if (fish === 0) {
            myBear[i].bearAction = 'https://media1.tenor.com/images/8cb226a97a0388904f0c5cee29fcb943/tenor.gif?itemid=8725056';            
        } else {
            myBear[i].bearAction = 'https://media.giphy.com/media/l3dj3g9lBW9LWKNDW/giphy.gif';
        }        
        //myBear[i].bearAction = 'https://media1.tenor.com/images/8cb226a97a0388904f0c5cee29fcb943/tenor.gif?itemid=8725056';
        if (myBear[i].id === Number(bearID)) {            
            myBear[i].totalFish +=fish;
            myBear[i].duration +=1;
            myBear[i].fat = myBear[i].totalFish/myBear[i].duration;
            myBear[i].currentCatch = fish;
            if (fish > 0) {
                myBear[i].catchColor = 'success';
                myBear[i].bearAction = 'https://thumbs.gfycat.com/PettyNeedyAlbatross-size_restricted.gif';
            } else {
                myBear[i].catchColor = 'danger';
                myBear[i].bearAction = 'https://media.giphy.com/media/Osub6rry9Pu2k/giphy.gif';
            }
        }
    }
    let domString = '';
    domString = `<h2>Let's have fun with helping the bears to catch fish!</h2>`;
    utils.printToDom("#currentDisplay", domString);    
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
                    `;
        if (bearInfo[i].currentRewards === 'Gold') {
            domString += `<div class="top-right1"><i class="fas fa-star"></i></div>`;
        } else if (bearInfo[i].currentRewards === 'Silver') {
            domString += `<div class="top-right2"><i class="fas fa-star"></i></div>`;
        } else if (bearInfo[i].currentRewards === 'Bronze') {
            domString += `<div class="top-right3"><i class="fas fa-star"></i></div>`;
        }
        domString +=`
                    <div class="card-body">
                        <h5 class="card-title">${bearInfo[i].name}</h5>   
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span class="font-weight-bold">Total Fish Catched:</span> ${bearInfo[i].totalFish}</li>
                            <li class="list-group-item"><span class="font-weight-bold">Duration:</span> ${bearInfo[i].duration} hrs. <span class="font-weight-bold">Fat:</span> ${bearInfo[i].fat.toFixed(2)}</li>                            
                            <li class="list-group-item"><span class="font-weight-bold">Reward:</span> ${bearInfo[i].currentRewards}<span class="font-weight-bold"> & Fat:</span> ${bearInfo[i].currentFat.toFixed(2)}</li>
                            <li class="list-group-item"><span class="font-weight-bold">Last Reward:</span> ${bearInfo[i].lastRewards}</li>                            
                            <li class="list-group-item"><img src="${bearInfo[i].bearAction}" class="card-img-top card-img-top1" alt="...">
                            <div class="top-left font-weight-bold">Bear In Action:</div></li>
                        </ul>                                         
                    </div>
                    <div class="card-body">                        
                        <button type="button" class="btn btn-primary getFish">Catch Fish</button>                        
                        <a href="#" class="btn btn-${bearInfo[i].catchColor}">Catched: ${bearInfo[i].currentCatch}</a>
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
            myBear[i].bearAction = 'https://media0.giphy.com/media/m4dxDLChOTGFy/giphy.gif';
        } else if (i === 1) {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'Silver';
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';
            myBear[i].bearAction = 'https://media.tenor.com/images/b47cafe43549f3e83aac86835347dde4/tenor.gif';
        } else if (i === 2) {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'Bronze';            
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';
            myBear[i].bearAction = 'https://i.pinimg.com/originals/b2/76/93/b276939d53dcd373ff2571ca455ea97c.gif';
        } else {
            myBear[i].lastRewards = myBear[i].currentRewards;
            myBear[i].currentRewards = 'none';            
            myBear[i].currentFat = myBear[i].fat;
            myBear[i].totalFish = 0;
            myBear[i].duration = 0;
            myBear[i].fat = 0;
            myBear[i].currentCatch = 0;
            myBear[i].catchColor = 'secondary';
            myBear[i].bearAction = 'https://fitznaturalist.files.wordpress.com/2019/09/435-holly_09252019.gif?w=300';
        }
    }

    let domString = '';
    domString = `<h2>Click on the catch fish button to start new season!</h2>`;
    utils.printToDom("#currentDisplay", domString);
    
    buildBearCard();    
    i=0;
}


const buildBestBearCard = () => {

    BestBear.buildBestBearCard();

    $('#getAllBear').click(buildBearCard);
    $('.getNewRewards').click(newRewards);

}


export default { buildBearCard, buildBestBearCard };
