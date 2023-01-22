//Cryptography
console.log('Cryptography');

const baseKey = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",",",".","!","@","$","₹","'",'"',"&"];

const key1 =    ["w","s","r"," ","y","t","p","u","e","f","c","d","b","a","i","m","k","n","q","z","v","x","l","h","j","g","o","W","S","R","Y","T","P","U","E","F","C","D","B","A","I","M","K","N","Q","Z","V","X","L","H","J","G","O","8","4","3","6","2","1","7","9","0","5",".","!",",","$","₹","@","&","'",'"'];

function inputData(){

    var msg = prompt('Type the message to be encoded/decoded');

    if (msg == '' || msg == null || msg == undefined){
        alert("Invalid Input! Please try again");
        return inputData();
    }
    else{
        return msg;
    }

}

function encode(inp){
    let encode_output = "";
    for(let i = 0;i<inp.length;i++){
        let letter = inp.charAt(i);
        let idx = baseKey.indexOf(letter);
        encode_output = encode_output.concat(key1[idx]);
    }
    return encode_output;

}

function decode(inp){
    let decode_output = "";
    for(let i = 0;i<inp.length;i++){
        let letter = inp.charAt(i);
        let idx = key1.indexOf(letter);
        decode_output = decode_output.concat(baseKey[idx]);
    }
    return decode_output
}

var Option = prompt("Do you want to encode OR decode a message?")

var inpmsg = inputData();

Option = Option.toLowerCase()



if(Option == "encode"){
    var codedMessage = encode(inpmsg);
    alert("Use " + '"'+codedMessage+'"'+" next time while encoding!")
}
if(Option == "decode"){
    var decodedMessage = decode(inpmsg)
    alert('"'+decodedMessage+'"' + " Is your message!")
}









