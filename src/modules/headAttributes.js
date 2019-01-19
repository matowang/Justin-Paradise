export const attributes = {
    title: "Justin Hoong",
    description: "Hello, I'm Justin Hoong. I am an undergraduate studying at UC Berkeley and this is my website that includes my articles and my experience.",
    imgSrc: "https://i.imgur.com/6unYoFg.jpg",
    imgAlt: "Portrait of Justin Hoong",
    type: "website",
    url: "https://www.justinhoong.com/",
}

export const setOG = (property, content) => {
    document.querySelector(`meta[property="og:${property}"]`).setAttribute("content", content);
}

export const setTitle = (title) => {
    document.title = title;
    setOG("title", title);
}
export const resetTitle = () => {
    setTitle(attributes.title);
}

export const setDescription = (desciption) => {
    document.querySelector('meta[name="description"]').setAttribute("content", desciption);
}

export const resetDescription = () => {
    setDescription(attributes.description);
}

export const setHeadAttributes = (
    title = attributes.title,
    description = attributes.description,
    imgSrc = attributes.imgSrc,
    imgAlt = attributes.imgAlt,
    type = attributes.type,
    url = attributes.url) => {
    setTitle(title);
    setDescription(description);
    setOG("image",
        imgSrc);
    setOG("image:alt", imgAlt);
    setOG("type", type);
    setOG("url", url);
}

export const resetAll = () => {
    setHeadAttributes();
}