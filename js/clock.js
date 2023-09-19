const now = document.querySelector(".now");

let colorChange = false;


function getNow(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // date.GetHours()를 문자열로 바꿔준다.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    now.innerText= `${hours}:${minutes}`;

    if (colorChange) {
        now.classList.remove("lighten");
    }
    else {
        now.classList.add("lighten");
    }
    colorChange = !colorChange; // colorChange의 값을 토글하는 코드
}

getNow();
setInterval(getNow, 1000);