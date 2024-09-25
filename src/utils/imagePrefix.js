const basePath = process.env.NODE_ENV == 'development' ? '' : '/crawford-county-historical-society/';

export const imagePath = (path) => {
    console.log(path)
    return `${basePath}${path}`
}