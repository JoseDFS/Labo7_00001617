var container = document.getElementById("c1");
container.innerText="¡Hola Mundo!";
container.style.backgroundColor= "#000000"; 
container.style.color="#1cb723";
container.style.width= "200px";
container.style.height="200px";
container.innerHTML="<input type='text' placeholder='escriba su texto'>";
containers=document.querySelectorAll(".c2");
containers.forEach(element => {
    element.style.backgroundColor="#009999";
    element.innerHTML="<input type='text' placeholder='Escriba su texto'>";
});
