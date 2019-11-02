var balcony1, balcony2, balcony3, balcony4;
var hero, garbageGroup, typeList, vegetableWaste, glass, metal, paper, plastic;
var canvas;
var pos1x, pos2x, pos3x, pos4x, pos5x, pos6x, pos7x, pos1y, pos2y, pos3y, pos4y, pos5y, pos6y, pos7y;
function setup() {
    canvas = createCanvas(400, 700);
    // balcony1 = createSprite(60, 400, 120, 10);
    // balcony2 = createSprite(335, 330, 130, 10);
    hero = createSprite(200, 650, 100, 10);
    pos1x = 70; pos1y = 385;
    pos2x = 320; pos2y = 345;
    pos3x = 70; pos3y = 275;
    pos4x = 180; pos4y = 385;
    pos5x = 180; pos5y = 275;
    pos6x = 125; pos6y = 165;
    pos7x = 320; pos7y = 170;
    garbageGroup = createGroup();
    score = 0;
    vegetableWaste = 0
    glass = 0;
    metal = 0;
    paper = 0;
    plastic = 0;
    typeList = [];
}
function draw() {
    background(255, 255, 0);
    rectMode(CENTER);
    fill(255);
    rect(pos1x, pos1y, 100, 100);
    rect(pos2x, pos2y, 130, 180);
    rect(pos3x, pos3y, 100, 100);
    rect(pos4x, pos4y, 100, 100);
    rect(pos5x, pos5y, 100, 100);
    rect(pos6x, pos6y, 210, 100);
    rect(pos7x, pos7y, 140, 140);
    spawnGarbage();
    heroControl();
    catchGarbage();
    setAnimation();
    drawSprites();
    fill("red");
    text("score :" + score, 10, 20);
    fill("blue");
    noFill();
    strokeWeight(0.3);
    stroke("blue");
    text("plastic :" + plastic, 65, 20);
    stroke(255);
    fill("blue");
    text("glass :" + glass, 125, 20);
    fill("grey")
    text("metal :" + metal, 175, 20);
    fill("white");
    text("paper :" + paper, 230, 20);
    stroke(0, 255, 0);
    fill("green");
    text("vegetableWaste :" + vegetableWaste, 290, 20);

}
function spawnGarbage() {
    var pos = Math.round(random(1, 7));
    var no = Math.round(random(1, 5))

    if (frameCount % 30 === 0 && garbageGroup.length < 50) {
        var garbage = createSprite(100, 100, 10, 10);
        garbage.x = Math.round(random(50, 350));
        garbage.velocityY = 7;
        var type = setType(no);
        if (no === 1) {
            garbage.shapeColor = (rgb(50, 0, 0));
        } if (no === 2) {
            garbage.shapeColor = (rgb(0, 0, 255));
        }
        else if (no === 3) {
            garbage.shapeColor = (rgb(0, 0, 255));
        }
        else if (no === 4) {
            garbage.shapeColor = (rgb(0, 255, 0));
        }
        else if (no === 5) {
            garbage.shapeColor = (rgb(200, 200, 200));
        }
        // if (pos === 1) {
        //     garbage.x = pos1x;
        //     garbage.y = pos1y;
        // } else if (pos === 2) {
        //     garbage.x = pos2x;
        //     garbage.y = pos2y;
        // } else if (pos === 3) {
        //     garbage.x = pos3x;
        //     garbage.y = pos3y;
        // } else if (pos === 4) {
        //     garbage.x = pos4x;
        //     garbage.y = pos4y;
        // } else if (pos === 5) {
        //     garbage.x = pos5x;
        //     garbage.y = pos5y;
        // } else if (pos === 6) {
        //     garbage.x = pos6x;
        //     garbage.y = pos6y;
        // } else if (pos === 7) {
        //     garbage.x = pos7x;
        //     garbage.y = pos7y;
        // }



        //garbage.shapeColor = getAnimation();
        // console.log(type);
        // console.log(typeList);
        // console.log(garbage);
        typeList.push(type);
        garbageGroup.push(garbage);
    }
    // garbageGroup.bounceOff(hero);
}
function heroControl() {
    if (keyDown(RIGHT_ARROW)) {
        hero.velocityX = 7;
    }
    if (keyWentUp(RIGHT_ARROW)) {
        hero.velocityX = 0;
    }
    if (keyDown(LEFT_ARROW)) {
        hero.velocityX = -7;
    }
    if (keyWentUp(LEFT_ARROW)) {
        hero.velocityX = 0;
    }
}
function catchGarbage() {
    for (var i = 0; i <= garbageGroup.length; i++) {
        var temp = garbageGroup.get(i);
        //console.log(i);
        if (temp !== undefined && temp.isTouching(hero)) {
            var type = typeList[i];
            temp.destroy();
            if (!temp.isTouching(hero)) {
                if (type === "plastic") {
                    score = score + 5;
                    plastic++;
                }
                if (type === "glass") {
                    score = score + 4;
                    glass++;
                }
                if (type === "metal") {
                    score = score + 3;
                    metal++;
                }
                if (type === "paper") {
                    score = score + 2;
                    paper++;
                }
                if (type === "vegetable waste") {
                    score = score + 2;
                    vegetableWaste++;
                }
            }
        }
    }
}
function setAnimation() {
    var color = rgb(50, 50, 50);
    console.log(typeList);
    for (var i = 0; i < garbageGroup.length; i++) {
        console.log(typeList);
        var type = typeList[i];
        // console.log(i);
        // console.log(type);
        // var temp = garbageGroup.get(typeList.indexOf(type));
        console.log(typeList.indexOf(type));
        if (type = "metal") {
            console.log(typeList.indexOf(type));
            //temp.shapeColor = (rgb(45, 45, 45));
        } if (type = "glass") {
            //temp.shapeColor = (rgb(0, 0, 25));
        }
        else if (type = "plastic") {
            // temp.shapeColor = (rgb(0, 0, 255));
        }
        else if (type = "vegetable waste") {
            // temp.shapeColor = (rgb(0, 255, 0));
        }
        else if (type = "paper") {
            // temp.shapeColor = (rgb(255, 255, 255));
        }
    }

}
function setType(typeNo) {
    var type = "no type available for given typeNo";
    if (typeNo === 1) {
        type = "plastic";
    }
    if (typeNo === 2) {
        type = "glass";
    }
    if (typeNo === 3) {
        type = "metal";
    }
    if (typeNo === 4) {
        type = "paper";
    }
    if (typeNo === 5) {
        type = "vegetable waste";
    }
    return (type);
}