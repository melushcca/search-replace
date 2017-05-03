document.getElementById('myBtn').addEventListener('click', function() {
  var textarea = document.getElementById('myTextarea-doc').value.split('\n'); //array
  var find = document.getElementById('myTextarea-words').value.split('\n'); //array
  var re = new RegExp('['+find+']', 'g'); // RegEx
  var replace = ''; // string
  var newName = textarea.toString().replace(re, replace); //convert array to string and find and replace;
 
  
  document.getElementById('result').innerHTML = newName.split('\n');
  
  console.log(textarea); //array
  console.log(find); //array
  console.log(re);
  console.log(replace); //string
  console.log(newName);
})



