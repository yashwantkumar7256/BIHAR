import crypto from "crypto"

const generateCode=()=>{
    const mainString="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ0123456789"
    let shortcode=""

    for(let i=0;i<6;i++){
        shortcode +=mainString.charAt(Math.floor(Math.random()*62))
    }
    return shortcode
}

export default generateCode;