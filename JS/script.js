let municipio = "";
console.log(document.getElementById("municipio").value);


document.getElementById("boton").addEventListener("click", crearInstancia);


function crearInstancia() {
    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    let municipioElegido = eleccionMunicipio(document.getElementById("municipio").value);

    // Configurar la solicitud: método, URL y si es asincrónica (true)

    xhr.open('GET', `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${municipioElegido}`, true);

    // Definir una función que se ejecutará cuando cambie el estado de la solicitud
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) { // 4 significa "completado", 200 es "OK"
            // La respuesta del servidor se encuentra en xhr.responseText
            var data = JSON.parse(xhr.responseText); // Convertir JSON en objeto de JavaScript
            console.log(data);

            //console.log(data.ListaEESSPrecio[0].Rótulo);

            crearTabla(data.ListaEESSPrecio);
        }
    };

    // Enviar la solicitud
    xhr.send();
}


function eleccionMunicipio(event) {
    switch (event) {
        case "Merida":
            return "712";
        case "Badajoz":
            return "644";
        case "Caceres":
            return "1579";
        default:
            return "";
    }
}


function crearTabla(lista) {


    let body = document.getElementById("body");
    if (body.querySelector("#tabla")) {
        body.querySelector("#tabla").remove();
    }


    let tabla = document.createElement("table");
    tabla.id = "tabla";
    let headTabla = document.createElement("thead");
    let bodyTabla = document.createElement("tbody");
    let cabeceraNombre = document.createElement("th");
    cabeceraNombre.innerHTML = "NOMBRE GASOLINERA";
    let cabeceraMunicipio = document.createElement("th");
    cabeceraMunicipio.innerHTML = "MUNICIPIO";
    let cabeceraDireccion = document.createElement("th");
    cabeceraDireccion.innerHTML = "DIRECCIÓN";
    let cabeceraHorario = document.createElement("th");
    cabeceraHorario.innerHTML = "HORARIO";
    let cabeceraBiodiesel = document.createElement("th");
    cabeceraBiodiesel.innerHTML = "Precio BioDiesel";
    let cabeceraBioetanol = document.createElement("th");
    cabeceraBioetanol.innerHTML = "Precio Bioetanol";
    let cabeceraGasoleoA = document.createElement("th");
    cabeceraGasoleoA.innerHTML = "Precio Gasoleo A";
    let cabeceraGasoleoB = document.createElement("th");
    cabeceraGasoleoB.innerHTML = "Precio Gasoleo B";
    let cabeceraGasoleoPremium = document.createElement("th");
    cabeceraGasoleoPremium.innerHTML = "Precio Gasoleo Premium";
    let cabeceraGasolina95E5 = document.createElement("th");
    cabeceraGasolina95E5.innerHTML = "Precio Gasolina 95 E5";
    let cabeceraGasolina95E5Premium = document.createElement("th");
    cabeceraGasolina95E5Premium.innerHTML = "Precio Gasolina 95 E5 Premium";
    let cabeceraGasolina95E10 = document.createElement("th");
    cabeceraGasolina95E10.innerHTML = "Precio Gasolina 95 E10";
    let cabeceraGasolina98E5 = document.createElement("th");
    cabeceraGasolina98E5.innerHTML = "Precio Gasolina 98 E5";
    let cabeceraGasolina98E10 = document.createElement("th");
    cabeceraGasolina98E10.innerHTML = "Precio Gasolina 98 E10";

    headTabla.append(cabeceraNombre, cabeceraMunicipio, cabeceraDireccion, cabeceraHorario, cabeceraBiodiesel, cabeceraBioetanol, cabeceraGasoleoA, cabeceraGasoleoB, cabeceraGasoleoPremium, cabeceraGasolina95E5, cabeceraGasolina95E5Premium, cabeceraGasolina95E10, cabeceraGasolina98E5, cabeceraGasolina98E10);

    console.log("lista");
    console.log(lista);

    lista.forEach(element => {
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerHTML = element.Rótulo;

        let tdMunicipio = document.createElement("td");
        tdMunicipio.innerHTML = element.Municipio;

        let tdDireccion = document.createElement("td");
        tdDireccion.innerHTML = element.Dirección;

        let tdHorario = document.createElement("td");
        tdHorario.innerHTML = element.Horario;

        let tdBioDiesel = document.createElement("td");
        tdBioDiesel.innerHTML = (element['Precio Biodiesel'] == "") ? "----" : element['Precio Biodiesel'];

        let tdBioEtanol = document.createElement("td");
        tdBioEtanol.innerHTML = (element['Precio Bioetanol'] == "") ? "----" : element['Precio Bioetanol'];

        let tdGasoleoA = document.createElement("td");
        tdGasoleoA.innerHTML = (element['Precio Gasoleo A'] == "") ? "----" : element['Precio Gasoleo A'];

        let tdGasoleoB = document.createElement("td");
        tdGasoleoB.innerHTML = (element['Precio Gasoleo B'] == "") ? "----" : element['Precio Gasoleo B'];

        let tdGasoleoPremium = document.createElement("td");
        tdGasoleoPremium.innerHTML = (element['Precio Gasoleo Premium'] == "") ? "----" : element['Precio Gasoleo Premium'];

        let tdGasolina95E5 = document.createElement("td");
        tdGasolina95E5.innerHTML = (element['Precio Gasolina 95 E5'] == "") ? "----" : element['Precio Gasolina 95 E5'];

        let tdGasolina95E5Premium = document.createElement("td");
        tdGasolina95E5Premium.innerHTML = (element['Precio Gasolina 95 E5 Premium'] == "") ? "----" : element['Precio Gasolina 95 E5 Premium'];

        let tdGasolina95E10 = document.createElement("td");
        tdGasolina95E10.innerHTML = (element['Precio Gasolina 95 E10'] == "") ? "----" : element['Precio Gasolina 95 E10'];

        let tdGasolina98E5 = document.createElement("td");
        tdGasolina98E5.innerHTML = (element['Precio Gasolina 98 E5'] == "") ? "----" : element['Precio Gasolina 98 E5'];

        let tdGasolina98E10 = document.createElement("td");
        tdGasolina98E10.innerHTML = (element['Precio Gasolina 98 E10'] == "") ? "----" : element['Precio Gasolina 98 E10'];

        tr.append(tdNombre, tdMunicipio, tdDireccion, tdHorario, tdBioDiesel, tdBioEtanol, tdGasoleoA, tdGasoleoB, tdGasoleoPremium, tdGasolina95E5, tdGasolina95E5Premium, tdGasolina95E10, tdGasolina98E5, tdGasolina98E10);
        bodyTabla.appendChild(tr);
    });

    tabla.append(headTabla, bodyTabla);
    body.appendChild(tabla);

}
