let correct_color;
let block_id;
let found = false;

function genRandomInt(max, min) {
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

function randomColor() {
    let array = new Array(5);
    for (let i = 0; i < array.length; i++) {
        array[i] = genRandomInt(255, 0);
    }
    return array;
}

function getStringRGB(array) {
    return "RGB(" + array[0] + ", " + array[1] + ", " + array[2] + ")";
}

function genRandomBlocks() {
    correct_color = getStringRGB(randomColor());
    let position = "b" + genRandomInt(6, 1);
    let background;
    const blocks = document.querySelectorAll(".color-block"); // Wählt alle Blöcke aus
    blocks.forEach((block) => {
        if (block.id === position) {
            background = "background-color:" + correct_color + ";";
            let p = document.getElementById("rgb-color");
            p.textContent = correct_color;
            block_id = block.id;
        } else {
            background = "background-color:" + getStringRGB(randomColor()) + ";";
        }
        block.setAttribute("style", background);
        block.addEventListener('click', function() {
            checkCorrectColor(block)
        });
    });

}

function restart() {
    let status = document.getElementById("status");
    status.textContent = "Start Guessing!";
    found = false;
    genRandomBlocks();
}

function checkCorrectColor(block) {
    let status = document.getElementById("status");
    if (!found) {
        if (block.id === block_id) {
            status.textContent = "Correct!";
            const blocks = document.querySelectorAll(".color-block"); // Wählt alle Blöcke aus
            blocks.forEach((block) => {
                block.setAttribute("style", `background-color:${correct_color}`);
            });
            found = true;
        }
        else {
            status.textContent = "Try Again!";
            block.setAttribute("style", `display: none`);
        }
    }
}

genRandomBlocks();

