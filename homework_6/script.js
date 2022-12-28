const loadingDiv = document.querySelector("#container");
const informationWindow = document.querySelector(".information");
const findIPBtn = document.querySelector(".btn");
const ul = document.createElement("ul");
const reloadingBtn = document.querySelector(".btn2");
informationWindow.append(ul);

findIPBtn.addEventListener("click", async function getData(e) {
    e.preventDefault();
    loadingDiv.style.display = "block";
    findIPBtn.style.display = "none";
    try{
        const ipResponse = await fetch("https://api.ipify.org/?format=json");
        const ipData = await ipResponse.json();
        const informResponse = await fetch(`http://ip-api.com/json/${ipData.ip}?fields=continent,country,regionName,city,district`);
        const informData = await informResponse.json();
        for (let i in informData) {
            let li = document.createElement("li");
            if (informData[i] === "") {
                informData[i] = "unknown";
            }
            li.textContent = `${i}: ${informData[i]}`;
            ul.append(li);
            informationWindow.style.display = "flex";
            findIPBtn.style.display = "none";
            reloadingBtn.style.display = "block";
        }
        loadingDiv.style.display = "none";
    }catch (err){
        alert("Щось пішло не так, спробуйте пізніше)")
        loadingDiv.style.display = "none";
        findIPBtn.style.display = "block";
    }
})

reloadingBtn.addEventListener("click", () => {
    location.reload();
})




