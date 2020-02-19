import  tinycolor from 'tinycolor2/tinycolor'

const generateAvatarFromHash = (hash) =>{
    const [r,g,b] = hash.substr(0,3).split('').map((item)=> (item.charCodeAt(0)));
    const color = tinycolor({r,g,b}).toHexString();
    const colorLight = tinycolor({r,g,b}).lighten(35).toHexString();

    return {color, colorLight}
};

export default generateAvatarFromHash;