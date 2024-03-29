var balcony1, balcony2, balcony3, balcony4;
var hero, garbageGroup, typeList, vegetableWaste, glass, metal, paper, plastic;
var canvas;
var bin, binRight, binLeft, wheel, wheelImg;
var bottleImg, jarImg, canImg, cupImg;
var ground;
var pos1x, pos2x, pos3x, pos4x, pos5x, pos6x, pos7x, pos1y, pos2y, pos3y, pos4y, pos5y, pos6y, pos7y;
function preload() {
    bottleImg = loadImage("bottle.png");
    bagImg = loadImage("bag.png");
    bottle2Img = loadImage("bottle2.png");
    bag2Img = loadImage("bag2.png");
    jarImg = loadImage("jar.png");
    jar2Img = loadImage("jar2.png");
    glassBottle = loadImage("glassBottle.png");
    glassImg = loadImage("glass.png");
    bulb = loadImage("bulb.png");
    canImg = loadImage("can.png");
    can3Img = loadImage("sodaCan.png");
    can2Img = loadImage("tinCan.png");
    spoon = loadImage("spoon.png");
    fork = loadImage("fork.png");
    cupImg = loadImage("cup.png");
    cup2Img = loadImage("cup2.png");
    bananaImg = loadImage("banana.png");
    appleImg = loadImage("apple.png");
    binRight = loadImage("rightBin.png");
    binLeft = loadImage("leftBin.png");
    wheelImg = loadImage("wheel.png");;

}
function setup() {
    canvas = createCanvas(400, 700);
    // balcony1 = createSprite(60, 400, 120, 10);
    // balcony2 = createSprite(335, 330, 130, 10);
    ground = createSprite(200, 670, 400, 10);
    ground.visible = false;
    hero = createSprite(200, 608, 100, 10);
    hero.addImage("binRight", binRight);
    hero.addImage("binLeft", binLeft);
    hero.scale = 0.3;
    hero.setCollider("rectangle", 0, 0, 250, 250)
    wheel = createSprite(hero.x - 13, 665);
    wheel.addImage("wheel", wheelImg);
    wheel.scale = 0.3;
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
    console.log(glass);
    //hero.debug = true;
    noStroke();
    rect(200, 660, 400, 10);
    fill(255);
    // rect(pos1x, pos1y, 100, 100);
    // rect(pos2x, pos2y, 130, 180);
    // rect(pos3x, pos3y, 100, 100);
    // rect(pos4x, pos4y, 100, 100);
    // rect(pos5x, pos5y, 100, 100);
    // rect(pos6x, pos6y, 210, 100);
    // rect(pos7x, pos7y, 140, 140);
    spawnGarbage();
    heroControl();
    catchGarbage();
    // setAnimation();
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
    var no = Math.round(random(1, 5));
    var imageNo = Math.round(random(1, 4));
    if (frameCount % 30 === 0 && garbageGroup.length < 100) {
        var garbage = createSprite(100, 100, 10, 10);
        garbage.x = Math.round(random(50, 350));
        garbage.velocityY = 7;
        garbage.scale = 0.15;
        garbage.depth = hero.depth - 1;
        garbage.lifetime = 88;
        var type = setType(no);
        if (no === 1) {
            garbage.shapeColor = (rgb(50, 0, 0));
            if (imageNo === 1) {
                garbage.addAnimation("bottleImg", bottleImg);
            } else if (imageNo === 2) {
                garbage.addAnimation("bagImg", bagImg);
            } else if (imageNo === 3) {
                garbage.addAnimation("bag2Img", bag2Img);
                garbage.scale = 0.25;
            } else if (imageNo === 4) {
                garbage.addAnimation("bottle2Img", bottle2Img);
                garbage.scale = 0.2;
            }
        } if (no === 2) {
            garbage.shapeColor = (rgb(0, 0, 255));
            garbage.addAnimation("jarImg", jarImg);
            if (imageNo = 1) {
                garbage.addAnimation("jarImg", jarImg);
            } else if (imageNo = 2) {
                garbage.addAnimation("glassBottle", glassBottle);
            } else if (imageNo = 3) {
                garbage.addAnimation("jar2Img", jar2Img);
                garbage.scale = 0.25;
            } else if (imageNo = 4) {
                garbage.addAnimation("glassImg", glassImg);
                garbage.scale = 0.25;
            } else if (imageNo = 5) {
                garbage.addAnimation("bulbImg", bulb);
                garbage.scale = 0.15;
            }
        }
        else if (no === 3) {
            // garbage.shapeColor = (rgb(0, 0, 255));
            // garbage.addAnimation("canImg", canImg);
            if (imageNo === 1) {
                garbage.addAnimation("canImg", canImg);
            } else if (imageNo === 2) {
                garbage.addAnimation("can2Img", can2Img);
                garbage.scale = 0.1;
            } else if (imageNo === 3) {
                garbage.addAnimation("can3Img", can3Img);
                garbage.scale = 0.1;
            } else if (imageNo === 4) {
                garbage.addAnimation("spoon", spoon);
                garbage.scale = 0.15;
            } else if (imageNo === 5) {
                garbage.addAnimation("fork", fork);
                garbage.scale = 0.15;
            }
        }
        else if (no === 4) {
            if (imageNo <= 2) {
                garbage.addAnimation("cupImg", cupImg);
            } else if (imageNo >= 3) {
                garbage.addAnimation("cup2Img", cup2Img);
                garbage.scale = 0.1;
            }

            garbage.addAnimation("cupImg", cupImg);
        }
        else if (no === 5) {

            if (imageNo <= 2) {
                garbage.addAnimation("bananaImg", bananaImg);
                garbage.scale = 0.05;

            } else if (imageNo >= 3) {
                garbage.addAnimation("appleImg", appleImg);
                garbage.scale = 0.08;

            }
        }

        garbage.rotationSpeed = Math.round(random(-15, 15));
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
        //  garbageGroup.setLifetimeEach(32);

        // camera.position.y = 700;
    }
    // garbageGroup.bounceOff(hero);
}
function heroControl() {
    wheel.x = hero.x - 13
    if (keyDown(RIGHT_ARROW)) {
        hero.velocityX = 7;
        //  wheel.velocityX = 7;
        wheel.rotationSpeed = 9;
    }
    if (keyWentUp(RIGHT_ARROW)) {
        hero.velocityX = 0;
        //   wheel.velocityX = 0;
        wheel.rotationSpeed = 0;
    }
    if (keyDown(LEFT_ARROW)) {
        hero.velocityX = -7;
        //  wheel.velocityX = -7;
        wheel.rotationSpeed = -9;
    }
    if (keyWentUp(LEFT_ARROW)) {
        hero.velocityX = 0;
        //   wheel.velocityX = 0;
        wheel.rotationSpeed = 0;
    } if (hero.x > 400) {
        hero.x = 399;
        wheel.rotationSpeed = 0;
        wheel.velocityX = 0;
    } else if (hero.x < 0) {
        hero.x = 1;
        wheel.rotationSpeed = 0;
        wheel.velocityX = 0;
    }

}
function catchGarbage() {
    for (var i = 0; i <= garbageGroup.length; i++) {
        var temp = garbageGroup.get(i);
        //console.log(i);
        // temp.collide(ground);
        if (temp !== undefined) {
            // temp.collide(ground);
            if (temp.y >= 450) {
                temp.rotationSpeed = 0;
            }
            if (temp.isTouching(ground)) {

                temp.velocityY = 0;
                // temp.lifetime = 10;
            }
        }
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
    // console.log(typeList);
    for (var i = 0; i < garbageGroup.length; i++) {
        //  console.log(typeList);
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
