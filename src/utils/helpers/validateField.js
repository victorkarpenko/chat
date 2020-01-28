export default(touched, errors, key) => {
    if(touched[key] && errors[key]) {
        return 'error';
    } else if(!touched[key]){
        return ''
    } else{
        return 'success'
    }
}