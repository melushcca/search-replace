document.getElementById('myBtn').addEventListener('click', function() {
var brands = document.getElementById('myTextarea-words').value.split('\n');  
var articles = document.getElementById('myTextarea-doc').value.split('\n');
var newName = [];


articles.forEach(function(article) {
  brands.forEach(function(brand) {
    article = article.replace(brand, ' ').replace('  ', ' ');
  })
  newName.push(article);
})

document.getElementById('result').innerHTML = newName.join('\n');
})



