const chara = 'https://gravityfallsapi.herokuapp.com/api/characters/'

fetch(chara)
    .then(response => response.json())
    .then(data => imprimirHTML(data.all_characters));


function imprimirHTML(data) {
    data.forEach(character => {
        console.log(character);
        const li = document.createElement('li');

        const { Img, Nombre, Ocupación, Sexo, Edad } = character;

        li.innerHTML = `
        <article>
            <div class="tarjeta">
                
                <div class="tarjeta-contenido">
                    <img src = "${Img}">
                    <div class="tarjeta-texto"> 
                        <h1>${Nombre}</h1>
                        <h3 class="letra">Sexo: ${Sexo}</h3>
                        <h3 class="letra">Edad: ${Edad}</h3>
                        <h3 class="letra">Ocupación: ${Ocupación}</h3>
                    </div>
                </div>
            </div>
        </article>
        `;
        document.querySelector('#app').appendChild(li);
    });
}