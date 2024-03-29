
const API_KEY = import.meta.env.VITE_REACT_API_KEY

const percentageConverter = value => {
    const percentage = (value * 10).toFixed(0)
    return percentage
}

const imageUrl = path => {
    return `https://image.tmdb.org/t/p/w500/${path}`
}

const filmTitleLength = title => {
    return title.length < 20 ? title: title.substring(0, 20).concat("...")
}

const longText = text => {
    return text.length < 100 ? text: text.substring(0, 100).concat("...")
}

const backgroundImage = url => {
    return{
        backgroundImage: `url(${imageUrl(url)})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
     
}

const emptyArray = (array) => array = []

export {
    percentageConverter,
    imageUrl,
    filmTitleLength,
    backgroundImage,
    longText,
    emptyArray,
    API_KEY
}