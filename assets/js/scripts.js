var elDiv, nameDiv, elContent, nameContent, elPlaceholder, periodicTable, columns, expandedTable, rows, headerEl, elements, width, i;

periodicTable = document.querySelector('.periodic-table');
columns = document.querySelectorAll('.col');

expandedTable = document.querySelector('.expanded-table');
rows = document.querySelectorAll('.row');

headerEl = document.querySelector('h1');



// creating and inserting elements into the table
elements.forEach(function(element, i) {
    
    // create element div's content and its hidden node with information
    elContent = '<div class="el-symbol">' + element.symbol + '</div><div class="el-number">' + element.number + '</div><div class="el-weight">' + element.weight + '</div>';
    nameContent = document.createTextNode(element.name);
    
    if (element.number === '57' || element.number === '89') {
        elPlaceholder = document.createElement('div');
        elPlaceholder.classList.add('outline');
    }
    
    
    // create the element div with a universal class name and attach the content
    elDiv = document.createElement('div');
    elDiv.classList.add('element');
    elDiv.innerHTML = elContent;
    
    // create the hidden node's div with universal class name and attach the content
    nameDiv = document.createElement('div');
    nameDiv.className = 'hidden';
    nameDiv.appendChild(nameContent);
    
    // element is given its color
    elementType(element.type);
    
    // insert the element
    elementPlacement(element.number);
});




elements = document.querySelectorAll('.element');

// event listener for each element div
elements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        var text = this.nextSibling.textContent;
        
        for (i = 0; i < elementTypes.length; i++) {
            if (this.classList.contains(elementTypes[i].type)) {
                headerEl.style.color = elementTypes[i].color;
            }
        }
        headerEl.textContent = text;
    });
    element.addEventListener('mouseout', function() {
        var text = 'Periodic Table';
        
        headerEl.style.color = 'black';
        headerEl.textContent = text;
    });
});

window.onresize = getWidth;
window.onload = getWidth;