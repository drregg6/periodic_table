var elementTypes = [
    {
        type: 'noble-gas',
        color: '#0099ff',
        colorDark: '#001a80',
        colorLight: '#7fffff'
    },
    {
        type: 'alkali-metal',
        color: '#612005',
        colorDark: '#2e0000',
        colorLight: '#ae6d52'
    },
    {
        type: 'alkaline-earth',
        color: '#90f',
        colorDark: '#4d0083',
        colorLight: '#e64dff'
    },
    {
        type: 'nonmetal',
        color: '#9bf500',
        colorDark: '#1c7600',
        colorLight: '#ceff33'
    },
    {
        type: 'basic-metal',
        color: '#f00',
        colorDark: '#800000',
        colorLight: '#ff7f7f'
    },
    {
        type: 'semimetal',
        color: '#f80',
        colorDark: '#800900',
        colorLight: '#fb3'
    },
    {
        type: 'transition-metal',
        color: '#ff2462',
        colorDark: '#cc00af',
        colorLight: '#ff8ac8'
    },
    {
        type: 'theoretical',
        color: '#969696',
        colorDark: '#4a4a4a',
        colorLight: '#e3e3e3'
    },
    {
        type: 'halogen',
        color: '#1ff8ff',
        colorDark: '#007980',
        colorLight: '#9effff'
    },
    {
        type: 'actinide',
        color: '#ff00e1',
        colorDark: '#800062',
        colorLight: '#ff7fff'
    },
    {
        type: 'lanthanide',
        color: '#0dc700',
        colorDark: '#004800',
        colorLight: '#8cff7f'
    }
];


// placing the elements is a huge thorn in my side
// this switch statement is ugly and takes up so much space
// but luckily it works
function elementPlacement(num) {
    switch (num) {
        case '1':
        case '3':
        case '11':
        case '19':
        case '37':
        case '55':
        case '87':
            columns[0].appendChild(elDiv);
            columns[0].appendChild(modalDiv);
            break;
        case '4':
        case '12':
        case '20':
        case '38':
        case '56':
        case '88':
            columns[1].appendChild(elDiv);
            columns[1].appendChild(modalDiv);
            break;
        case '21':
        case '39':
            columns[2].appendChild(elDiv);
            columns[2].appendChild(modalDiv);
            break;
        case '22':
        case '40':
        case '72':
        case '104':
            columns[3].appendChild(elDiv);
            columns[3].appendChild(modalDiv);
            break;
        case '23':
        case '41':
        case '73':
        case '105':
            columns[4].appendChild(elDiv);
            columns[4].appendChild(modalDiv);
            break;
        case '24':
        case '42':
        case '74':
        case '106':
            columns[5].appendChild(elDiv);
            columns[5].appendChild(modalDiv);
            break;
        case '25':
        case '43':
        case '75':
        case '107':
            columns[6].appendChild(elDiv);
            columns[6].appendChild(modalDiv);
            break;
        case '26':
        case '44':
        case '76':
        case '108':
            columns[7].appendChild(elDiv);
            columns[7].appendChild(modalDiv);
            break;
        case '27':
        case '45':
        case '77':
        case '109':
            columns[8].appendChild(elDiv);
            columns[8].appendChild(modalDiv);
            break;
        case '28':
        case '46':
        case '78':
        case '110':
            columns[9].appendChild(elDiv);
            columns[9].appendChild(modalDiv);
            break;
        case '29':
        case '47':
        case '79':
        case '111':
            columns[10].appendChild(elDiv);
            columns[10].appendChild(modalDiv);
            break;
        case '30':
        case '48':
        case '80':
        case '112':
            columns[11].appendChild(elDiv);
            columns[11].appendChild(modalDiv);
            break;
        case '5':
        case '13':
        case '31':
        case '49':
        case '81':
        case '113':
            columns[12].appendChild(elDiv);
            columns[12].appendChild(modalDiv);
            break;
        case '6':
        case '14':
        case '32':
        case '50':
        case '82':
        case '114':
            columns[13].appendChild(elDiv);
            columns[13].appendChild(modalDiv);
            break;
        case '7':
        case '15':
        case '33':
        case '51':
        case '83':
        case '115':
            columns[14].appendChild(elDiv);
            columns[14].appendChild(modalDiv);
            break;
        case '8':
        case '16':
        case '34':
        case '52':
        case '84':
        case '116':
            columns[15].appendChild(elDiv);
            columns[15].appendChild(modalDiv);
            break;
        case '9':
        case '17':
        case '35':
        case '53':
        case '85':
        case '117':
            columns[16].appendChild(elDiv);
            columns[16].appendChild(modalDiv);
            break;
        case '2':
        case '10':
        case '18':
        case '36':
        case '54':
        case '86':
        case '118':
            columns[17].appendChild(elDiv);
            columns[17].appendChild(modalDiv);
            break;
        case '57':
            columns[2].appendChild(elPlaceholder);
            rows[0].appendChild(elDiv);
            rows[0].appendChild(modalDiv);
            break;
        case '89':
            columns[2].appendChild(elPlaceholder);
            rows[1].appendChild(elDiv);
            rows[1].appendChild(modalDiv);
            break;
        case '58':
        case '59':
        case '60':
        case '61':
        case '62':
        case '63':
        case '64':
        case '65':
        case '66':
        case '67':
        case '68':
        case '69':
        case '70':
        case '71':
            rows[0].appendChild(elDiv);
            rows[0].appendChild(modalDiv);
            break;
        case '90':
        case '91':
        case '92':
        case '93':
        case '94':
        case '95':
        case '96':
        case '97':
        case '98':
        case '99':
        case '100':
        case '101':
        case '102':
        case '103':
            rows[1].appendChild(elDiv);
            rows[1].appendChild(modalDiv);
            break;
    }
}


// while creating the element divs
// classes need to be added to the appropriate type
function elementType(type) {
    switch (type) {
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
        case 'actinide':
            elDiv.classList.add('actinide');
            break;
        case 'lanthanide':
            elDiv.classList.add('lanthanide');
            break;
    }
}



function getWidth() {
    // grab the width of the window screen
    width = window.innerWidth;
    
    // if it's a desktop
    if (width > 960) {
        // center both tables
        periodicTable.classList.add('flex-center');
        expandedTable.classList.add('flex-center');
        
        // also reveal and hide the name with the hover effect
        elements.forEach(function(element) {
            element.addEventListener('mouseover', revealFullName);
            element.addEventListener('mouseout', hideFullName);
        });
    // on resize, if the width is adjusted to a smaller size
    // but both tables have .flex-center due to the desktop size
    } else if (periodicTable.classList.contains('flex-center')) {
        // remove .flex-center and the hover effect
        periodicTable.classList.remove('flex-center');
        expandedTable.classList.remove('flex-center');
        
        elements.forEach(function(element) {
            element.removeEventListener('mouseover', revealFullName);
            element.removeEventListener('mouseout', hideFullName);
        })
    }
}

// change the text of the h1 to the name of the element on mouseover
function revealFullName() {
    // this could probably be simplified
    var text = this.nextSibling.firstChild.firstChild.firstChild.textContent;

    // change the color of the text according to the element type
    for (var i = 0; i < elementTypes.length; i++) {
        if (this.classList.contains(elementTypes[i].type)) {
            headerEl.style.color = elementTypes[i].color;
        }
    }
    // update the h1 text
    headerEl.textContent = text;
}

// change the text back to Periodic Table when mouseout
function hideFullName() {
    var text = 'Periodic Table';

    // change the color back and reset the text
    headerEl.style.color = 'black';
    headerEl.textContent = text;
}


function displayModal() {
    // all modals are stored next to the element's div in the table
    modal = this.nextSibling;
    modalContent = modal.firstChild;
    // console.log(modal);
    // console.log(this);
    
    // change the background and border color according to element type
    for (var i = 0; i < elementTypes.length; i++) {
        if (this.classList.contains(elementTypes[i].type)) {
            modalContent.style.backgroundColor = elementTypes[i].color;
            modalContent.style.borderBottomColor = elementTypes[i].colorDark;
            modalContent.style.borderLeftColor = elementTypes[i].colorDark;
            modalContent.style.borderRightColor = elementTypes[i].colorLight;
            modalContent.style.borderTopColor = elementTypes[i].colorLight;
        }
    }

    modal.style.display = 'block';
    
}


function closeModal(ev) {
    if (ev.target === modal) {
        modal.style.display = 'none';
    }
}



// unused data structure
// attempting to simplify the switch statement
var columnsTable = [
    {
        column: 0,
        elementNumbers: ['1', '3', '11', '19', '37', '55', '87']
    },
    {
        column: 1,
        elementNumbers: ['4', '12', '20', '38', '56', '88']
    },
    {
        column: 2,
        elementNumbers: ['21', '39']
    },
    {
        column: 3,
        elementNumbers: ['22', '40', '72', '104']
    },
    {
        column: 4,
        elementNumbers: ['23', '41', '73', '105']
    },
    {
        column: 5,
        elementNumbers: ['24', '42', '74', '106']
    },
    {
        column: 6,
        elementNumbers: ['25', '43', '75', '107']
    },
    {
        column: 7,
        elementNumbers: ['26', '44', '76', '108']
    },
    {
        column: 8,
        elementNumbers: ['27', '45', '77', '109']
    },
    {
        column: 9,
        elementNumbers: ['28', '46', '78', '110']
    },
    {
        column: 10,
        elementNumbers: ['29', '47', '79', '111']
    },
    {
        column: 11,
        elementNumbers: ['30', '48', '80', '112']
    },
    {
        column: 12,
        elementNumbers: ['5', '13', '31', '49', '81', '113']
    },
    {
        column: 13,
        elementNumbers: ['6', '14','32', '50', '82', '114']
    },
    {
        column: 14,
        elementNumbers: ['7', '15','33', '51', '83', '115']
    },
    {
        column: 15,
        elementNumbers: ['8', '16', '34', '52', '84', '116']
    },
    {
        column: 16,
        elementNumbers: ['9', '17', '35', '53', '85', '117']
    },
    {
        column: 17,
        elementNumbers: ['2', '10', '18', '36', '54', '86', '118']
    }
];