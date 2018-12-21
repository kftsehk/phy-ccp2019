const load = (id, file) => {
    let div = $("#" + id);
    console.log(id, file)
    div.load(file, (str) => {
        console.log(id, str);
        div.replaceWith(str);
    });
}
function includeHTML() {
    var z, i, elmnt, xhttp, loaded = false;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            load(elmnt.id, file)
            loaded = true;
        }
        // if (loaded) includeHTML();
    }
}
includeHTML();