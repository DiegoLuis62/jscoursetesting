var xhr = new XMLHttpRequest()
var url = './health_article.json'
xhr.open('GET', url, true);

xhr.responseType = 'json';


xhr.onload = function () {

    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');


    articles.forEach(article => {

        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article")

        const title = document.createElement("h2");
        title.textContent = article.title;
        articleDiv.appendChild(title);


        const description = document.createElement("p");
        description.textContent = article.description;
        articleDiv.appendChild(description);


        const ways_to_achieve = document.createElement("ol");

        article.ways_to_achieve.forEach((item) => {

            const list_item = document.createElement("li");
            list_item.textContent = item;

            ways_to_achieve.appendChild(list_item);

        });

        articleDiv.appendChild(ways_to_achieve);



        const benefits = document.createElement("ol");
        article.benefits.forEach((item) => {

            const list_item = document.createElement("li");
            list_item.textContent = item;

            benefits.appendChild(list_item)

        });
        articleDiv.appendChild(benefits);



        articlesDiv.appendChild(articleDiv)


    });

}


xhr.send();


