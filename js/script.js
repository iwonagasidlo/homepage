{
    const welcome = () => {
        console.log("Witam na mojej stronie!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");

        themeName.innerText =
            body.classList.contains("dark") ?
                "jasny" : "ciemny";
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}