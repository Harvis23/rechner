const div = document.querySelector(".button-container")
div.addEventListener("click", event => {
    const target = event.target

    if (target.tagName === "BUTTON") {
        console.log(target.innerText);
    }

})