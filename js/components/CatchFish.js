
// Not Active .. 

const updateCard = (e) => {
    console.log("fire event");

    console.log(myBear);
    const bearID = e.target.closest('.bear-card').id;
    console.log(bearID);
    let n = Number(bearID);

    let fish = Math.floor(Math.random() * Math.floor(2));    
    console.log("catch fish", fish);
    for (let i = 0; i<myBear.length; i++) {
        const bear = myBear[i];

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