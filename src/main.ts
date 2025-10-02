const ButtonPenis = document.getElementById('ButtonPencil');
const Label = document.getElementById('Label');
const Pencil = document.getElementById("Pencil");
let counter = 0;

ButtonPenis.onclick = () => {
  counter++;

  console.log(counter);

  Label.textContent = `Clicks On Penis = ${counter}`;


  Pencil.classList.add('active');
  setTimeout(() => { Pencil.classList.remove('active'); }, 400);

}