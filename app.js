const container = document.querySelector(".container");

const div = document.createElement("div");


for (let i= 0; i< 5; i++) {
    div.className = "square";
    
    for (let j=0; j<4; j++) {
        container.appendChild(div.cloneNode(true));
    }
    container.appendChild(div.cloneNode(true));

}

