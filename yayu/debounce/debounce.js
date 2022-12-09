var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};


container.onmousemove = getUserAction;