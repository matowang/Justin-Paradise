export const title = "Justin Hoong";
export const description = "Hello, I'm Justin Hoong. I am an undergraduate studying at UC Berkeley and this is my website that includes my articles and my experience.";

export const setTitle = (title) => {
    document.title = title;
}
export const resetTitle = () => {
    document.title = title;
}

export const setDescription = (desciption) => {
    document.querySelector('meta[name="description"]').setAttribute("content", desciption);
}

export const resetDescription = () => {
    document.querySelector('meta[name="description"]').setAttribute("content", description);
}

export const resetAll = () => {
    resetTitle();
    resetDescription();
}