function palindrome(word){
    var long = word.length;
    for(var i = 0; i < long; i++){
        if(word[i] !== word[long - 1 - i]){
           return false;
        }
    }
    return true;
}
