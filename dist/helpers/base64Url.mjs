const base64Url = (str) => {
    return str.replace(/\+/, '-').replace(/\=/, '').replace(/\//, '-');
};
export { base64Url };
