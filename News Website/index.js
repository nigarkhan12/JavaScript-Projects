console.log('This is my Index.Js File');

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '86a5a18f123456789uda4da54ee8204';
// Grap the nNew's Container
let newsAccordion = document.getElementById("newsAccordion");

// Create an AJAX get Request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines/?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHTML = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                  aria-expanded="false" aria-controls="collapse${index}">
                  <b>Breaking News ${index + 1}</b> ${element["title"]}
                </button>
              </h2>
            </div>
              <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body">${element["content"]}. <a href="${element['url']}" target="_blank" > Read more here</a></div>
              </div>
            </div>`;
      newsHTML += news;
    });
    newsAccordion.innerHTML = newsHTML;
  }
  else {
    console.log("Some error has occured");
  }
}

xhr.send();
