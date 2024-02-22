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

export {
    percentageConverter,
    imageUrl,
    filmTitleLength
}