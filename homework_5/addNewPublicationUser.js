let tweetBtn = document.querySelector(".btn_tweet");

class UserPublication {
    constructor(inputHeader, textPublication, name, sureName, email) {
        this.name = name.textContent
        this.sureName = sureName.textContent
        this.email = email.textContent
        this.inputHeader = inputHeader.value
        this.textPublication = textPublication.value
        this.htmlContainer = document.createElement("div")
        this.userSymbol = document.querySelector(".user_symbol").textContent
    }

    showPost() {
        this.htmlContainer.innerHTML = `<div class="users_post">
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px" fill="white" class="delete_svg">
                <path d="M 42 5 L 32 5 L 32 3 C 32 1.347656 30.652344 0 29 0 L 21 0 C 19.347656 0 18 1.347656 18 3 L 18 5 L 8 5 C 7.449219 5 7 5.449219 7 6 C 7 6.550781 7.449219 7 8 7 L 9.085938 7 L 12.695313 47.515625 C 12.820313 48.90625 14.003906 50 15.390625 50 L 34.605469 50 C 35.992188 50 37.175781 48.90625 37.300781 47.515625 L 40.914063 7 L 42 7 C 42.554688 7 43 6.550781 43 6 C 43 5.449219 42.554688 5 42 5 Z M 20 44 C 20 44.554688 19.550781 45 19 45 C 18.449219 45 18 44.554688 18 44 L 18 11 C 18 10.449219 18.449219 10 19 10 C 19.550781 10 20 10.449219 20 11 Z M 20 3 C 20 2.449219 20.449219 2 21 2 L 29 2 C 29.550781 2 30 2.449219 30 3 L 30 5 L 20 5 Z M 26 44 C 26 44.554688 25.550781 45 25 45 C 24.449219 45 24 44.554688 24 44 L 24 11 C 24 10.449219 24.449219 10 25 10 C 25.550781 10 26 10.449219 26 11 Z M 32 44 C 32 44.554688 31.554688 45 31 45 C 30.445313 45 30 44.554688 30 44 L 30 11 C 30 10.449219 30.445313 10 31 10 C 31.554688 10 32 10.449219 32 11 Z"/>
            </svg>
            </a>
                <a href="#">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class="refact_svg">
                        <path d="M21.9629 2.03677C21.6299 1.70512 21.2344 1.44275 20.7993 1.26481C20.3643 1.08688 19.8983 0.9969 19.4283 1.00008C18.9583 1.00326 18.4936 1.09954 18.061 1.28335C17.6284 1.46716 17.2365 1.73486 16.908 2.07099L2.73061 16.2485L1 23L7.75135 21.2684L21.9287 7.09082C22.2649 6.76243 22.5327 6.37064 22.7166 5.93812C22.9004 5.50559 22.9967 5.04091 22.9999 4.57094C23.0031 4.10096 22.9131 3.63502 22.7351 3.20004C22.5571 2.76507 22.2946 2.36969 21.9629 2.03677V2.03677Z" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            <div class="users_information">
            <div class="post_user_photo-container user_photo_post" style=background-color:${'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}>
                <p class="user_symbol">${this.userSymbol}</p>
            </div>
            <h2 class="users_information-name">${this.name}</h2>
            <p class="users_information-userName">${this.sureName}</p>
            <p class="users_information-email">${this.email}</p>
            </div>
            <div class="user_post_information">
            <h3 class="user_post_information-header">${this.inputHeader}</h3>
            <p class="user_post_information-main">${this.textPublication}</p>
            </div>
        </div>`
        main.prepend(this.htmlContainer);
    }

    registerDeleteListener() {
        const deleteBtn = this.htmlContainer.querySelector(".delete_svg");
        deleteBtn.addEventListener("click", () => this.delete());
    }

    delete() {
        this.htmlContainer.remove();
    }

    editPost() {
        const editBtn = this.htmlContainer.querySelector(".refact_svg");
        editBtn.addEventListener("click", (e) => {
            e.preventDefault()
            let p = document.querySelector(".user_post_information-header");
            let bodyText = document.querySelector(".user_post_information-main");
            let saveBtn = document.createElement("button");
            saveBtn.classList.add("btn_tweet");
            saveBtn.classList.add("btn_save_changes");
            saveBtn.textContent = "save changes";
            const input = document.createElement('input');
            const textarea = document.createElement("textarea");
            textarea.classList.add("post_form-input-main");
            textarea.classList.add("post_form-input");
            textarea.value = bodyText.innerText;
            input.value = p.innerText;
            input.classList.add("post_form-input");
            input.classList.add("post_form-input-header");
            p.replaceWith(input);
            bodyText.replaceWith(textarea);
            textarea.after(saveBtn);
            saveBtn.addEventListener("click", async () => {
                saveBtn.textContent = "Please wait...";
                saveBtn.style.background = "grey";
                setTimeout(() => {
                    saveBtn.remove();
                    p.textContent = input.value;
                    bodyText.textContent = textarea.value;
                    input.replaceWith(p);
                    textarea.replaceWith(bodyText);
                }, 1000);
            })
        })
    }
}

tweetBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    tweetBtn.textContent = "please wait...";
    tweetBtn.style.background = "grey";
    let sendData = await fetch("https://ajax.test-danit.com/api/json/posts", {
        method: "POST", body: JSON.stringify({
            id: 1,
            title: `${document.querySelector(".post_form-input-header").value}`,
            body: `${document.querySelector(".post_form-input-main").value}`,
        }), headers: {
            'Content-Type': 'application/json'
        }
    });
    if (sendData.status === 200) {
        let publication = new UserPublication(document.querySelector(".post_form-input-header"),
            document.querySelector(".post_form-input-main"),
            document.querySelector(".user_login-name"),
            document.querySelector(".user_login-nik-name"),
            document.querySelector(".user_login-email"));
        publication.showPost();
        publication.registerDeleteListener();
        publication.editPost();
        tweetBtn.style.background = "#3498db";
        tweetBtn.textContent = "tweet send";
        setTimeout(() => {
            tweetBtn.textContent = "new tweet";
        }, 1500)
        document.querySelector(".post_form-input-header").value = "";
        document.querySelector(".post_form-input-main").value = "";
    } else {
        alert("sorry, something went wrong, please try again later");
    }
})




