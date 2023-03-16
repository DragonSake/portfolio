export function fetchData() {
    const url = "https://api.github.com/users/DragonSake/repos"

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const CSSttR = data[0].homepage;
            const NA = data[1].homepage;
            const Wafs = data[5].homepage;
            project1.href = CSSttR;
            project2.href = NA;
            project4.href = Wafs;

            console.log(data);
        });
}

export const project1 = document.querySelector("#CSSttR");
export const project2 = document.querySelector("#NA");
export const project4 = document.querySelector("#Wafs");