var contentEl = document.querySelector('.content');

elements.forEach(function(element, i) {
    var div = document.createElement('div');
    var symSpan = document.createElement('span');
    var numSpan = document.createElement('span');
    
    var symText = document.createTextNode(element.symbol);
    var numText = document.createTextNode(element.number);
    
    symSpan.appendChild(symText);
    numSpan.appendChild(numText);
    
    div.appendChild(numSpan);
    div.appendChild(symSpan);
    
    contentEl.appendChild(div);
});