const fieldSetContenedor = document.querySelector ("fieldset");


const IMG_BASE = "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-cruze-final.png?imwidth=960"


function agregarSigImg(){
    fieldSetContenedor.innerHTML = `
    <img src="${IMG_BASE}" alt="test">   
    `;
    
    
    }