let div1 = document.querySelector(".ring");
let ul = document.createElement("ul");

async function getData() {
    let response = await fetch("https://ajax.test-danit.com/api/swapi/films");
    return await response.json();
}

(async () => {
    let moviesArr = await getData();
    div1.style.display = "none";
    moviesArr.sort((c, b) => Number(c.episodeId) - Number(b.episodeId));
    for (const movie of moviesArr) {
        let linksCharacters = movie.characters;
        let {episodeId, openingCrawl, name} = movie;
        let li = document.createElement("li");
        li.classList.add("el_list_card")
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h3");
        h3.textContent = "Characters:";
        h4.textContent = "Description:";
        h2.textContent = episodeId;
        p1.textContent = openingCrawl;
        p2.textContent = name;
        li.append(h2);
        li.append(p2);
        li.append(h3);
        ul.append(li);
        let ol2 = document.createElement("ol");
        let div2 = div1.cloneNode(true);
        div2.style.width = "30px";
        div2.style.height = "30px";
        ol2.append(div2);
        ol2.style.position = "relative";
        ol2.style.margin = "0 auto";
        div2.style.display = "block";
        let requests = linksCharacters.map(char => fetch(char));
        Promise.all(requests).then(responses => Promise.all(responses.map(r => r.json())))
            .then(actors => actors.forEach(actor => {
                let li2 = document.createElement("li");
                div2.style.display = "none";
                li2.textContent = ` ${actor.name}; `;
                li2.classList.add("characters_lest");
                ol2.style.padding = "0 10px 0 10px";
                ol2.style.height = "fit-content";
                ol2.append(li2);
            }))
        li.append(ol2);
        p1.classList.add("description");
        li.append(h4);
        li.append(p1);
    }
})();

document.body.append(ul)
