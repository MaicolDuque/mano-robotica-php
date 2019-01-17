

//Areglo para modificar imagen de cerrado/abierto  abierto/cerrado
var arrayDedos = new Array();
arrayDedos["img/pulgar.png"] = "img/pulgarC.png";
arrayDedos["img/pulgarC.png"] = "img/pulgar.png";
arrayDedos["img/indice.png"] = "img/indiceC.png";
arrayDedos["img/indiceC.png"] = "img/indice.png";
arrayDedos["img/corazon.png"] = "img/corazonC.png";
arrayDedos["img/corazonC.png"] = "img/corazon.png";
arrayDedos["img/anular.png"] = "img/anularC.png";
arrayDedos["img/anularC.png"] = "img/anular.png";
arrayDedos["img/menique.png"] = "img/meniqueC.png";
arrayDedos["img/meniqueC.png"] = "img/menique.png";


//Arreglo de imagenes para saber el nombre
var arrayDedosPython = new Array();
arrayDedosPython["img/pulgar.png"] = "pulgarC";
arrayDedosPython["img/pulgarC.png"] = "pulgar";
arrayDedosPython["img/indice.png"] = "indiceC";
arrayDedosPython["img/indiceC.png"] = "indice";
arrayDedosPython["img/corazon.png"] = "corazonC";
arrayDedosPython["img/corazonC.png"] = "corazon";
arrayDedosPython["img/anular.png"] = "anularC";
arrayDedosPython["img/anularC.png"] = "anular";
arrayDedosPython["img/menique.png"] = "meniqueC";
arrayDedosPython["img/meniqueC.png"] = "menique";



function fingers(clase){ 
  // alert(clase.className);
  clase = clase.className;
  //Obtener valor img actual
  var img = $(".D"+clase).attr("src");   
  // Asginar la imagen contraria
  $(".D" + clase).attr("src", arrayDedos[img]);

  if (arrayDedos[img] == "img/pulgarC.png"){
    $("#pulgarCerrado").css('display','block');
  }else{
    if (arrayDedos[img] == "img/pulgar.png"){
      $("#pulgarCerrado").css('display', 'none');
    }
  }
 

  //Ejecutar archivo dependiendo del dedo 
  // var nombreArchivo = arrayDedosPython[img];
  // $.ajax({
  //   method: "POST",
  //   url: "control/procesar.php",
  //   data: {nameFile: nombreArchivo}
  // })
  // .done(function( msg ) {
  //   alert( "Data Saved: " + msg );
  // });
      
}
  
$(document).ready(function () {
  console.log("ready!");

  //Obtener alto de imagen
  var altoImgen = $(".Dcuerpo").height();
  // Asignar alto a los divs  
  $("#principal").height(altoImgen);
   
});