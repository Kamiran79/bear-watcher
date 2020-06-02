let bearInfo = [
    {
        id: 0,
        name: 'bear0',
        imageUrl: 'https://www.adventure-journal.com/wp-content/uploads/2016/10/14589601_1307409822617146_4238528938302334714_o.jpg',
        totalFish: 0,
        duration: 0.0,
        currentRewards: 'none',
        lastRewards: 'Gold',
        fat: 0.0,
        currentCatch: 0,
    },
    {
        id: 1,
        name: 'bear1',
        imageUrl: 'https://www.doi.gov/sites/doi.gov/files/blog-post/thumbnail-images/katmai-np-nps-photo-j-cuomo-fat-bear.jpg',
        totalFish: 0,
        duration: 0.0,
        currentRewards: 'none',
        lastRewards: 'Silver',
        fat: 0.0,
        currentCatch: 0,
    },
    {
        id: 2,
        name: 'bear2',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/1vBidqu1XYzzCf8md2Lm-VS-EXE=/0x0:1920x1280/1200x675/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/61706269/44382577324_a5fb622fab_o.0.jpg',
        totalFish: 0,
        duration: 0.0,
        currentRewards: 'none',
        lastRewards: 'Bronze',
        fat: 0.0,
        currentCatch: 0,
    },        
]

//this is the background page
//https://static.rootsrated.com/image/upload/s--L80bGRP---/t_rr_large_traditional/kdl4xsflm6utgcvzohun.jpg

// bear to display and add later
// https://images.squarespace-cdn.com/content/v1/5850453aff7c501d48b70751/1484589021158-Y7AWXMUFTRJ6B211XIPJ/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/Big+Brown+Bear+Fishing%2C+Brooks+River%2C+Katmai+National+Park%2C+Alaska
// https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F10%2Fkatmai-national-park-fat-bear-holly-FATHOLLY1019.jpg
// https://images.squarespace-cdn.com/content/v1/5850453aff7c501d48b70751/1484588813270-WE9DBES91559UZLHXHGG/ke17ZwdGBToddI8pDm48kKWebp3cCkqjElJlDI8NzLx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWIN3MUu6ucv27MaZKEhDtOTNKodSb7ZWWjWTtIRiDQ8p4g8dkz8m9jd1c_lmLz9eg/Brown+Bear+in+Fall+Reflection%2C+Brooks+River%2C+Katmai+National+Park%2C+Alaska


// bear miss fish
// https://i.ytimg.com/vi/WBhCd3-f9DQ/maxresdefault.jpg

// bear cutch fish
// https://www.drinkevolve.com/wp-content/uploads/2017/09/D27I3214-WEBSITE.jpg

const getBear = () => {
    return bearInfo;
}

let selectedBestBearIndex;
let selectedBestBear;

const getBestBear = () => {
    console.log("got called in the main to send to bear display");
    const myIndex = (element) => element.currentRewards === 'Gold';
    const myLastBestBear = (element) => element.lastRewards === 'Gold';
    let selectedBestBearIndex = bearInfo.findIndex(myIndex);
    if (selectedBestBearIndex === -1) {
        selectedBestBearIndex = bearInfo.findIndex(myLastBestBear);
    }
    for (let i = 0; i < bearInfo.length; i++) {
        if (i === selectedBestBear) {
            getSelectedBestBear = bearInfo[i];
        }
    }
    return selectedBestBear;
}

//const getSelectedBestBear = () => selectedBestBear;


export default { getBear, getBestBear };
