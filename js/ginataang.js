function tog () {
    let toggle = document.getElementById("toggle");
    for (index = 0, index<toggle.clientHeight; index++;) { 
    toggle[index].addEventListener('click', this);
    }
}