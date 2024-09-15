import 'es6-promise/auto';


window.addEventListener("load", function(){
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const image = localStorage.getItem("image");
    const token = localStorage.getItem("token");
    
    if(firstName && lastName && image && token){
        const userInfo: HTMLElement | null = document.getElementById("userInfo");

        const spanEl = document.createElement("span");
        spanEl.innerHTML = `${firstName} ${lastName}`;

        const img = document.createElement("img");
        img.src = image;

        img.classList.add("img")

        if(userInfo){
            userInfo.appendChild(spanEl);
            userInfo.appendChild(img);
        }
        
    } else {

        window.location.href = "index.html";
    }
})

const logoutButton = document.getElementById("logout-button") as HTMLButtonElement | null;

if(logoutButton){
    logoutButton.addEventListener("click", function() {
        localStorage.clear();
        window.location.href = "index.html";
    });
}
