function panagram(str){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrStr = str.toLocaleLowerCase().split("")
    let result = false;
for (let i = 0; i < alphabet.length; i++) {
    if(arrStr.includes(alphabet[i])){
        result = true;
    }else{
        result = false;
        break;
    }
}return result;
}