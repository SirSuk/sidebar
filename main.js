const burguer = document.querySelector(".burguer");
const caja = document.createElement("div");

let isActive = false;
const handleClick = () => {
    if(!isActive) {
        caja.classList.add("lateral");
        caja.innerHTML=`
            <h1 class="header-logo">Sidebar</h1>
                <ul>
                    <li >Inicio</li>
                    <li >Sobre Mi</li>
                    <li >Proyectos</li>
                    <li >Contacto</li>
                </ul>
            `
    document.body.append(caja);
    isActive = true;
    } else {
        caja.classList.remove("lateral");
        caja.innerHTML="";
        isActive = false;
    }
}

burguer.addEventListener("click", handleClick);