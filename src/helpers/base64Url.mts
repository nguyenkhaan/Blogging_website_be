const base64Url = (str:string) => {
    return str.replace(/\+/,'-').replace(/\=/,'').replace(/\//, '-')
}
export {base64Url}