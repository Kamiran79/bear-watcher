
import bearDisplay from "./bearDisplay.js";


const genericEventAttacher = (selector, functionToAttach) => {
    const targets = document.querySelectorAll(selector);
    for (let i = 0; i < targets.length; i++) {
      targets[i].addEventListener('click', functionToAttach);
    }
};

const attachEvents = () => {
    genericEventAttacher('getAllBear', bearDisplay.buildBearCard());
};

export default { attachEvents };

