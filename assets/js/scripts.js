var elDiv, modalDiv, elContent, modalContent, elPlaceholder, periodicTable, columns, expandedTable, rows, headerEl, elements, width, i, modal;

periodicTable = document.querySelector('.periodic-table');
columns = document.querySelectorAll('.col');

expandedTable = document.querySelector('.expanded-table');
rows = document.querySelectorAll('.row');

headerEl = document.querySelector('h1');



// creating and inserting elements into the table
elements.forEach(function(element, i) {
    
    // create element div's content and its hidden node with information
    elContent = '<div class="el-symbol">' + element.symbol + '</div><div class="el-number">' + element.number + '</div><div class="el-weight">' + element.weight + '</div>';
    modalContent = '<div class="modal-content"><div class="modal-content-text"><p>' + element.name + '</p><p>' + element.type + '</p><p>' + element.year + '</p></div><div class="modal-content-weight">' + element.weight + '</div><div class="modal-content-number">' + element.number + '</div></div>';
    
    if (element.number === '57' || element.number === '89') {
        elPlaceholder = document.createElement('div');
        elPlaceholder.classList.add('outline');
    }
    
    
    // create the element div with a universal class name and attach the content
    elDiv = document.createElement('div');
    elDiv.classList.add('element');
    elDiv.innerHTML = elContent;
    
    // create the hidden node's div with universal class name and attach the content
    modalDiv = document.createElement('div');
    modalDiv.className = 'modal';
    modalDiv.innerHTML = modalContent;
    
    // element is given its color
    elementType(element.type);
    
    // insert the element
    elementPlacement(element.number);
});



// event listener for each element div
elements = document.querySelectorAll('.element');

elements.forEach(function(element) {
    element.addEventListener('click', displayModal);
});


window.onresize = getWidth;
window.onload = getWidth;
window.onclick = closeModal;