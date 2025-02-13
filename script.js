document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".heart-container");
    const numberOfHearts = 25;
    const creationInterval = 200;

    function createHeartWithDelay(i) {
        setTimeout(() => {
            createHeart(container);
        }, i * creationInterval);
    }

    for (let i = 0; i < numberOfHearts; i++) {
        createHeartWithDelay(i);
    }

    function createHeart(container) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.innerHTML = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="20px" height="20px" viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
            <path fill="#690d1d" d="M980.7,363c-0.4-28.1-5.6-56.6-16.5-85.4c-30.5-80.1-101.4-140-186.5-153.3c-12.2-1.9-24.6-2.8-36.9-2.8
              c-122.8,0-225.7,92.2-240.4,211.5C485.6,213.9,382.7,121.5,260,121.5C127,121.5,19.3,229.7,19.3,363c0,23.5,3.3,46.2,9.6,67.8
              c53.6,233.4,471,529.6,473,531c39.1-31.1,79.6-60,118.1-91.8c79.6-66,156.4-136.6,223.8-215.3C914.1,572.7,982.3,471.4,980.7,363z"
              />
        </svg>
        `;
        container.appendChild(heart);

        const randomX = Math.random() * 200 - 100;
        const randomRotate = Math.random() * 360;
        const animationDuration = Math.random() * 5 + 5;
        const randomDelay = Math.random() * 2;

        const randomPosition = Math.random() * 100;

        heart.style.setProperty("--random-x", `${randomX}px`);
        heart.style.setProperty("--random-rotate", `${randomRotate}deg`);
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${randomDelay}s`;
        heart.style.left = `${randomPosition}%`;

        heart.addEventListener("animationiteration", () => {
            heart.remove();
            createHeart(container);
        });
    }

    container.style.display = "block";
});



const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const btnsContainer = document.querySelector(".buttons-container");
touch = 0;
no.addEventListener("click", ()=>{
    touch ++;
    console.log()
    switch (touch) {
        case 1:
            yes.style.padding = "20px 60px";
            break;
        case 2:
            yes.style.padding = "30px 80px";
            break;
        case 3:
            yes.style.padding = "0";
            btnsContainer.style = "flex-direction: column";
            yes.style.position = "fixed"; 
            yes.style.top = "40%";
            yes.style.left = "5%";
            yes.style.width = "90%";
            yes.style.height = "25%";
            no.style.margin = "15px"
            break;
        case 4:
            yes.style.top = "35%";
            yes.style.left = "5%";
            yes.style.width = "90%";
            yes.style.height = "35%";
            yes.style.display = "flex";
            yes.style.justifyContent = "center";
            yes.style.alignItems = "center";
            yes.style.fontSize = "5em";
            yes.style.padding = "0";
            no.style.display = "none";
        default:
            return;
    }
})
yes.addEventListener('click', ()=>{
    yes.style.display = "none";
    no.style.display = "none";
    document.querySelector(".text").style.display = "none";
    const container = document.querySelector(".content");
    const text = document.createElement("div");
    text.classList.add("text");
    text.style.alignItems = "center";
    text.style.margin = "3em 0";
    text.innerHTML = "Урааа!!!!!!!";
    container.appendChild(text);
    const myAudio = document.getElementById("myAudio");
    myAudio.play();
})
