
function onLoad() {
    console.log('dzialam');
    var html = '<table class="table table-bordered"><thead><tr><td colspan="3">ITEMS</td></tr><tr><td>Id</td><td>Name</td></tr></thead><tbody>';
    for(var i=0;i<items.length;i++){
        html += '<tr><td>'+(i+1)+'</td><td>'+items[i].name+'</td></tr>';
    }
    html += '</tbody></table>';

    document.getElementsByClassName('tableDiv')[0].innerHTML = html;
}

function searchNumber() {
    document.getElementsByClassName('resultView')[0].children[0].innerHTML = '<h1>The Largest: '+getItemsMaxNumber(items)+'</h1>';
}

window.onload = onLoad();
