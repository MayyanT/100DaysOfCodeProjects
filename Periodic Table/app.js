const infoCard = document.getElementById('infoCard');

async function getElements(){
    const response = await fetch('https://neelpatel05.pythonanywhere.com');
    const data = await response.json()

    const tableContent = document.getElementById('table-content');

    let extraEl = document.createElement('div');
    extraEl.className = "extraEl";
    extraEl.innerHTML = '<p>57-71</p> <p class="extra-class>Lanthanides</p>';

    let extraElTwo = document.createElement('div');
    extraElTwo.className = "extraElTwo";
    extraElTwo.innerHTML = '<p>89-103</p><p class="extra-class>Actinides</p>';

    tableContent.appendChild(extraEl);
    tableContent.appendChild(extraElTwo); //element groups not part of API so manually input required

    data.forEach(item =>{
        let name = item.name;
        let symbol = item.symbol;
        let atomicNumber = item.atomicNumber;

        let el = document.createElement('div');
        el.className = "element";
        el.innerHTML =
        `
        <h6 class ="elName">${name}</h6>
        <h2>${symbol}</h2>
        <p class="atomicNumber">${atomicNumber}</p>
        `
        tableContent.append(el);

        el.addEventListener('click', () =>{
            let infoFolder = el.lastElementChild;
            infoFolder.classList.remove('hide');
        })

        makeElement(item)
    });

    /*console.log(tableContent);*/
    coderInfo()
}

function makeElement(item){
    let name = item.name;
    let symbol = item.symbol;
    let atomicMass = item.atomicMass;
    let atomicNumber = item.atomicNumber;
    let atomicRadius = item.atomicRadius;
    let meltingPoint = item.meltingPoint;
    let boilingPoint = item.boilingPoint;
    let bondingType = item.bondingType;
    let standardState = item.standardState;
    let groupBlock = item.groupBlock;

    let info = document.createElement('div');
    info.className = "info hide";
    info.style.background ='#f0ecf3';
    info.innerHTML =
        `
        <button><i class="fas fa-times"></i></button>
        <p class="name"><span>Element:</span> ${name}</p>
        <p class="symbol"><span>Symbol:</span> ${symbol}</p>
        <p class="atomicNumber"><span>Atomic Number:</span> ${atomicNumber}
        <p class="atomicMass"><span>Atomic Mass:</span> ${atomicMass}</p>
        <p class="atomicRadius"><span>Atomic Radius:</span> ${atomicRadius}</p>
        <p class="bondingType"><span>Bonding Type:</span> ${bondingType}</p>
        <p class="standardState"><span>Standard State:</span> ${standardState}</p>
        <p class="groupBlock"><span>Group Block:</span> ${groupBlock}</p>
        <p class="boilingPoint"><span>Boiling Point:</span> ${boilingPoint}</p>
        <p class="meltingPoint"><span>Melting Point:</span> ${meltingPoint}</p>
       
        `
    const el = document.querySelectorAll('.element');

    el.forEach( e => {
        e.append(info)
    })

    let button = document.querySelectorAll('button');
       
    for(i = 1; i < button.length; i++){
        button[i].addEventListener('click', () =>{
            info.classList.add('hidebox')
            location.reload();
        })
    }

    displayLegend()
}

function displayLegend(){
        const body = document.querySelector('body');
        let legend = document.createElement('div');
        legend.className = "legend";
        legend.innerHTML =
        `
        <div>
            <div class="alkali-metals"></div>
            <p>Alkali Metals</p>
        </div>

        <div>
            <div class="alkaline-earth-metals"></div>
            <p>Alkaline Earth Metals</p>
        </div>

        <div>
            <div class="transition-metals"></div>
            <p>Transition Metals</p>
        </div>

        <div>
            <div class="lanthanides"></div>
            <p>Lanthanides</p>
        </div>

        <div>
            <div class="actinides"></div>
            <p>Actinides</p>
        </div>

        <div>
            <div class="post-transition-metals"></div>
            <p>Post Transition Metals</p>
        </div>

        <div>
            <div class="metalloids"></div>
            <p>Metalloids</p>
        </div>

        <div>
            <div class="reactive-nonmetals"></div>
            <p>Reactive Non-Metals</p>
        </div>

        <div>
            <div class="noble-gases"></div>
            <p>Noble Gases</p>
        </div>

        <div>
            <div class="unknown-chemical-properties"></div>
            <p>Unknown Chemical Properties</p>
        </div>
        
        `
        body.append(legend);
}

function coderInfo(){
    const body = document.querySelector('body');
    let coder = document.createElement('div');
    coder.innerHTML = 
        `<div class="coder">Coded By <a href="https://github.com/MayyanT" target="_blank">Mayyan To</a></div>`

    body.append(coder);
}

getElements()
