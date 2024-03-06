
const showNews = (articles) => {

    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerText = ""

    articles.map((shivam) => {
        const ardiv = document.createElement('div')
        ardiv.classList.add('getNews')

        const arImg = document.createElement('img')
        arImg.classList.add('articleImg')
        arImg.src = shivam.urlToImage

        const arH = document.createElement('h1')
        arH.classList.add('add-style')
        arH.textContent = shivam.title

        ardiv.appendChild(arImg);
        ardiv.appendChild(arImg);
        ardiv.appendChild(arH);
        
        mainContainer.appendChild(ardiv);
    })

}
