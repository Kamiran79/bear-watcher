
// Not Active .. 

const updateCard = (e) => {
    console.log("fire event");
    //const myBear = bearData.getBear();
    console.log(myBear);
    const bearID = e.target.closest('.bear-card').id;
    console.log(bearID);
    let n = Number(bearID);
    //const bearIndex = bearID.findIndex(myBear => myBear.id === bearID);
    //const bearIndex = findDinoIndexById(n);
    //console.log(bearIndex);
    //console.log(myBear.findIndex(n === myBear.id));
    //console.log("this is the index of bear", bearIndex);
    //e.preventDefault();
    let fish = Math.floor(Math.random() * Math.floor(2));    
    console.log("catch fish", fish);
    for (let i = 0; i<myBear.length; i++) {
        const bear = myBear[i];
        //const findDinoIndexById = bearID => myBear.findIndex(bear => bear.id === bearID);        
        //console.log("this is the index of bear", findDinoIndexById);
        console.log(Number(myBear[i].id));
        console.log(bearID);
        if (Number(myBear[i].id) === Number(bearID)) {
            console.log("correct");
            myBear[i].totalFish +=fish;
            myBear[i].duration +=0.5;
            console.log("the current fish total", myBear[i].totalFish);
            console.log("got the correct bear");
        }
    }
    buildBearCard();

}