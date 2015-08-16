exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  // index of item
  indexOf : function(arr, item) {
  return arr.indexOf(item);
},

  sum : function(arr) {
    // sum of all items in array
    var count = 0
    for (i = 0; i < arr.length; i++) {
      count += arr[i]
    }
    return count
  },

  remove : function(arr, item) {
    // remove all occurances of item in array
    for (i in arr){
      if(arr[i] == item) arr.splice(i,1);
    }
    return arr
  },

  reverseString : function(str) {
    // reverse a string
    reversed = str.split("").reverse().join("");
    return reversed;
  },

  longestSubString : function(str) {
    // return longest item in a string split into an array
    var array = str.split(" ");
    var longest = "";
    for (var i = 0; i < array.length; i++){
      if (array[i].length > longest.length){
          longest = array[i];
      }
    }
    return longest;
  },

  letterMoveForward : function(str) {
    // replace each letter in string with the next in the alphabet
    var new_string = str.replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'z': return 'a';
          case 'Z': return 'A';
          default:  return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });
    return new_string;
    },

  capitalizeWords : function(str) {
    // capitalize the first letter of each word in a string
   var words = str.split(" ");
   var arr = Array();
   for (i in words)
   {
      temp = words[i].toLowerCase();
      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
      arr.push(temp);
   }
   return arr.join(" ");
}
};
