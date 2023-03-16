function fetchData() {
    const url = "https://api.github.com/users/DragonSake/repos"

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const CSSttR = data[0].homepage;
            const NA = data[1].homepage;
            const FED = data[4].homepage;
            const Wafs = data[5].homepage;
            project1.href = CSSttR;
            project2.href = NA;
            project3.href = FED;
            project4.href = Wafs;
        });
}

fetchData();

const project1 = document.querySelector("#CSSttR");
const project2 = document.querySelector("#NA");
const project3 = document.querySelector("#FED");
const project4 = document.querySelector("#Wafs");