var contentEl = document.querySelector('.content');
var headerEl = document.querySelector('h1');

elements.forEach(function(element, i) {
    var elDiv, nameDiv, elContent, nameContent;
    
    elContent = '<div class="el-symbol">' + element.symbol + '</div><div class="el-number">' + element.number + '</div><div class="el-weight">' + element.weight + '</div>';
    nameContent = document.createTextNode(element.name);
    
    elDiv = document.createElement('div');
    elDiv.className = 'element';
//    if (element.type === 'noble gas') {
//        elDiv.classList.add('noble-gas');
//    }
    switch (element.type) {
        case 'noble gas':
            elDiv.classList.add('noble-gas');
            break;
        case 'alkali metal':
            elDiv.classList.add('alkali-metal');
            break;
        case 'nonmetal':
            elDiv.classList.add('nonmetal');
            break;
        case 'alkaline earth':
            elDiv.classList.add('alkaline-earth');
            break;
        case 'semimetal':
            elDiv.classList.add('semimetal');
            break;
        case 'halogen':
            elDiv.classList.add('halogen');
            break;
        case 'transition metal':
            elDiv.classList.add('transition-metal');
            break;
        case 'basic metal':
            elDiv.classList.add('basic-metal');
            break;
        case 'theoretical':
            elDiv.classList.add('theoretical');
            break;
    }
    elDiv.innerHTML = elContent;
    
    nameDiv = document.createElement('div');
    nameDiv.className = 'hidden';
    nameDiv.appendChild(nameContent);
    
    
    contentEl.appendChild(elDiv);
    contentEl.appendChild(nameDiv);
});




var elements = document.querySelectorAll('.element');

elements.forEach(function(element) {
    element.addEventListener('click', function() {
        var text = this.nextSibling.textContent;
        
        if (headerEl.textContent === text) {
            headerEl.textContent = 'Periodic Table';
        } else {
            headerEl.textContent = text;
        }
    });
});