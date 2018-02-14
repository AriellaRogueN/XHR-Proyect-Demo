
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit',function(e) {

    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});

function getNews(){
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=3b4a5f4c68f24f5dba4912c1e1994ba8`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();

}

function handleError() {
    console.log('Se ha presentado un error');
}

function addNews() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    //const response = data.response;
    //console.log(response);
    const article = data.response.docs;
    article.forEach(function(element) {
    
    const snippet = element.snippet;

    let li = document.createElement('li');
    li.className = 'articleCLass';
    li.innerText = snippet;

    responseContainer.appendChild(li);
  });
  
  const image = article.multimedia[0].url;
  const insertImg = document.createElement('img');
  insertImg.setAttribute('src','https: //static01.nyt.com/' + image);
  imagenes.appendChild(insertImg);
}

