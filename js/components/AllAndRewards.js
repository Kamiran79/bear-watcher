
import utils from "../helpers/utils.js";

const makeAllRewardsButtons = () => {
    let domString = '';
    domString =`
        <button id="getAllBear" type="button" class="btn btn-secondary .getAllRiverSide">River Side</button>
        <button type="button" class="btn btn-secondary float-right getNewRewards">Rewards</button>     
    `;
    utils.printToDom('#allAndRewards', domString);
}

export default { makeAllRewardsButtons };
