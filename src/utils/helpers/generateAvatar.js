const generateAvatarFromHash = (hash) =>{
    const [r,g,b] = hash.substr(0,3).split('').map((item)=> (item.charCodeAt(0)));
    //const [r,g,b] = hashSubstr.map((item)=> (item.charCodeAt(0)));

    return `rgb(${r}, ${g}, ${b})`
};

export default generateAvatarFromHash;