function isAnagram(str1, str2){
  if(str1.length !== str2.length) {
    return false;
  }
  
  let counter = {};
  for(let letter of str1){
    counter[letter] = (counter[letter] || 0) + 1;
  }
  
  for(let item of str2) {
    if(!counter[item]){
      return false;
    }
    
    counter[item] -= 1;
  }
  return true;
}

const checkAnagram = isAnagram('habiba','habibi');
console.log(checkAnagram);