function foldPane(button) {
    let pane = button.nextElementSibling;

    pane.classList.toggle("visible");
    if (pane.style.width !== "20px" ) {
        pane.style.width = "20px" ;
    } else {
        pane.style.width = "320px" ;
    }
}

var selectors = document.getElementsByClassName('choice-name');
var i;
for (i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "flex") {
            content.style.display = "none";
        } else {
            content.style.display = "flex";
        }
    });
}

var choiceItems = document.getElementsByClassName('choice-item');
var glassItems = choiceItems.getElementsByClassName('glass');
var j;
for (j = 0; j<choiceItems.length; i++){
    choiceItems[i].addEventListener("click", function(){
        this.classList.toggle("selected");
    })
}