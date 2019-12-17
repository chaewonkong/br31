// sizes for media queries
export const sizes = {
    desktop: 1800,
    tablet: 768,
    phone: 576
};

export const fontSize = {
    smallFontSize: "0.8rem",
    normalFontSize: "1rem",
    largeFontSize: "2rem",
    extraLargeFontSize: "3rem"
};

export const headerHeight = "3rem";

export const color = { bgColor: "#141414", fontColor: "#000" };

const customMediaQuery = (maxWidth:number) =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(sizes.desktop),
    tablet: customMediaQuery(sizes.tablet),
    phone: customMediaQuery(sizes.phone)
};