var ButtonPenis = document.getElementById('ButtonPencil');
var Label = document.getElementById('Label');
var Pencil = document.getElementById("Pencil");
var counter = 0;
ButtonPenis.onclick = function () {
    counter++;
    console.log(counter);
    Label.textContent = "Clicks On Penis = ".concat(counter);
    Pencil.classList.add('active');
    setTimeout(function () { Pencil.classList.remove('active'); }, 400);
};
