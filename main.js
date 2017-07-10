document.getElementById('myBtn').addEventListener('click', function() {
var brands = document.getElementById('myTextarea-words').value.split('\n');
var articles = document.getElementById('myTextarea-doc').value.split('\n');
var newName = [];


articles.forEach(function(article) {
  brands.forEach(function(brand) {
    // article = article.replace(new RegExp('\\' + brand + '\\b', 'g'), '').replace('  ', ' ').trim();
    article = article
        .replace(new RegExp('\\b' + brand + '\\b', 'g'), '')
        .replace(/[\u00BD\u00BE\u00B0\u00BC\u0040\u0021\u0025\u002A\u0028\u0029\u00B2\u003D\u00AE]/g,'')
        .replace(/[\u002C]/g, '.')
        .replace(/[\u2013]/g, '-')
        .replace('  ', ' ')
        .trim();
  })
  newName.push(article);
})

document.getElementById('result').innerHTML = newName.join('\n').trim();
})
