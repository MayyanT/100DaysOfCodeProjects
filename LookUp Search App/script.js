const form = document.getElementById('searchForm');
const input = document.getElementById('search');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const original = document.querySelector('.original');


function runSearch(){
    clearSearchList()
    let inputVal = input.value;
    
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${inputVal}`)
    .then(res => res.json())
    .then(data => {
        let resultArr = data.query.search;
        listResults(resultArr);
    })
    .catch(()=> {
        console.log('An error occured');
    })
}
    
function listResults(resultsArr){
    resultsArr.forEach(item => {
        let title = item.title;
        let snippet = item.snippet;
        let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${title}`);

        const resultList = document.getElementById('resultList');
        resultList.insertAdjacentHTML('beforeend',
            `<div class="resultItem">
            <h3><a class="link" href="${itemUrl}" target="_blank">${title}</a></h3>
            <p class="resultText"><a href="${itemUrl}" target="_blank"></a>${snippet}</p>
            </div>
            ` 
        )
    })

    if(resultsArr.length === 0){
        const resultList = document.getElementById('resultList');
        resultList.insertAdjacentHTML('beforeend',
            `<div class="resultItem">
            <h3>Sorry, no results <i class="fas fa-ghost"></i> !</h3>
            </div>
            ` 
        )
    }
}

function clearSearchList(){
    const parentEl = document.getElementById('resultList');
    let childEl = parentEl.lastElementChild;
    while(childEl){
        parentEl.removeChild(childEl);
        childEl = parentEl.lastElementChild;
    }
}

function clearSearch(){
    clearSearchList()
    input.value = '';
}

/*EVENT LISTENERS*/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    runSearch(input.value);
});

input.addEventListener('focus', () => {
    const searchBtn = document.querySelector('.fa-search');
    searchBtn.style.color = "#169B62";
    searchBtn.style.transform = "scale(1.5)";
    searchBtn.addEventListener('click', runSearch);

    const clearBtn = document.querySelector('.fa-times');
    clearBtn.classList.add('show');
    clearBtn.addEventListener('click', clearSearch);

    const inputWrapper = document.querySelector('.input-wrapper');
    inputWrapper.style.border = "1.2px solid #333";
});

input.addEventListener('blur', () => {
    const searchBtn = document.querySelector('.fa-search');
    searchBtn.style.color = "#333";
    searchBtn.style.transform = "scale(1)";

    const clearBtn = document.querySelector('.fa-times');
    clearBtn.classList.remove('show');

    const inputWrapper = document.querySelector('.input-wrapper');
    inputWrapper.style.border = "0.9px solid #333";
});

red.addEventListener('click', ()=> {
    const lookUp = document.querySelector('h1');
    lookUp.style.color = '#FF665E';
    const allItems = document.querySelectorAll('.resultItem');
    
    for(i = 0; i < allItems.length; i++){
        let parent = allItems[i];
        let child = parent.firstElementChild;
        let innerChild = child.firstElementChild
        innerChild.style.color = '#FF665E';
    }
});


yellow.addEventListener('click', ()=> {
    const lookUp = document.querySelector('h1');
    lookUp.style.color = '#ffd000';
    const allItems = document.querySelectorAll('.resultItem');
    
    for(i = 0; i < allItems.length; i++){
        let parent = allItems[i];
        let child = parent.firstElementChild;
        let innerChild = child.firstElementChild
        innerChild.style.color = '#ffd000';
    }
});


blue.addEventListener('click', ()=> {
    const lookUp = document.querySelector('h1');
    lookUp.style.color = '#4982CF';
    const allItems = document.querySelectorAll('.resultItem');
    
    for(i = 0; i < allItems.length; i++){
        let parent = allItems[i];
        let child = parent.firstElementChild;
        let innerChild = child.firstElementChild
        innerChild.style.color = '#4982CF';
    }
});

original.addEventListener('click', ()=> {
    const lookUp = document.querySelector('h1');
    lookUp.style.color = '#435060';
    const allItems = document.querySelectorAll('.resultItem');
    
    for(i = 0; i < allItems.length; i++){
        let parent = allItems[i];
        let child = parent.firstElementChild;
        let innerChild = child.firstElementChild
        innerChild.style.color = '#435060';
    }
});