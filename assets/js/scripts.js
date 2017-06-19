var contentEl = document.querySelector('.content');
var headerEl = document.querySelector('h1');

elements.forEach(function(element, i) {
    var elDiv, nameDiv, elContent, nameContent;
    
    elContent = '<div class="el-symbol">' + element.symbol + '</div><div class="el-number">' + element.number + "</div>";
    nameContent = document.createTextNode(element.name);
    
    elDiv = document.createElement('div');
    elDiv.className = 'element';
    elDiv.innerHTML = elContent;
    
    nameDiv = document.createElement('div');
    nameDiv.className = 'hidden';
    nameDiv.appendChild(nameContent);
    
    
    contentEl.appendChild(elDiv);
    contentEl.appendChild(nameDiv);
    
    
    elDiv.addEventListener('hover', function() {
        console.log(this);
    });
});