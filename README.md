# Portfolio

# Table of contents

* Moodboard
* Installation
* API
* Checklist
* License

***

## Moodboard

![MoodboardCV](https://user-images.githubusercontent.com/40611000/225591696-ed0e60d5-fbf5-474c-930e-0683d8e42ab8.png)

***

## Installation

### Clone the repository

```
git clone https://https://github.com/DragonSake/portfolio.git
```

***

## API

```JS
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
```

***

## Checklist

- [X] Fetching data from API
- [X] Illustration
- [X] No lorem ipsum text
- [X] About me
- [X] CV
- [X] Portfolio
- [ ] Responsive
- [ ] All buttons work
- [ ] Animations
- [ ] Werking form
- [ ] Dark-mode
- [ ] Changing text color if white background

***

## License

MIT License
