var a = [ "Ford", "BMW", "Fiat" ];


function makeUL(array) {
    
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item); 
    }

    return list;
}



function makeOL(array) {
    
    var list = document.createElement('ol');

    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }

    return list;
}

document.getElementById('sonuc').appendChild(makeUL(a));
document.getElementById('sonuc-ol').appendChild(makeOL(a));
