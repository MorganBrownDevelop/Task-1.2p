const methods = document.querySelectorAll('.method_block');
const methodsH3 = document.querySelectorAll('h3');
const searchbar = document.getElementById('searchbar');

searchbar.addEventListener('keyup', checkMethods);

function checkMethods() {
    for (let i = 0; i < methods.length; i++) {
        if (methodsH3[i].textContent.toUpperCase().includes(searchbar.value.toUpperCase()))
        {
            methods[i].style.display = "block";
        }
        else if (!methodsH3[i].textContent.includes(searchbar.value)) {
            methods[i].style.display = "none";
        }
    }
};