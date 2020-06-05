import bearData from "../helpers/data/bearData.js";
import bearDisplay from "./bearDisplay.js";


const createNewBear = (e) => {
    e.preventDefault();    
    const newBear = {
        id: Number(`${Date.now()}`),
        name: document.querySelector('#bear-name').value,
        imageUrl: document.querySelector('#bear-image').value,
        totalFish: 0,
        duration: 0.0,
        currentRewards: 'none',
        lastRewards: 'none',
        fat: 0.0,
        currentFat: 0.0,
        currentCatch: 0,
        catchColor: 'secondary',
        bearAction: 'https://fitznaturalist.files.wordpress.com/2019/09/435-holly_09252019.gif?w=300',    
    };

    document.querySelector('#collapseOne').classList.remove('show');
    document.querySelector('#new-bear-form').reset();
    const bearInfo = bearData.getBear();
    bearInfo.forEach((bear) => {
        bear.catchColor = 'secondary';
    });
    bearInfo.unshift(newBear);
    bearDisplay.buildBearCard();
};

export default { createNewBear };
