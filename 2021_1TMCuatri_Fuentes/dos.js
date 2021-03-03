/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota*/

function mostrar()
{
    var nombreIngresado;
    var tipoDeCursada;
    var sexoIngresado;
    var promedioIngresado;
    var edadIngresada;
    var continuar;
    var mejorPromedio;
    var banderaMejorPromedio;
    var nombreMejorPromedio;
    var nombreDelMasJoven;
    var masJoven;
    var banderaMasJoven;
    var acumuladorNotaMasculino;
    var acumuladorNotaFemenino;
    var acumuladorNotaNoBinario;
    var promedioMasculino;
    var promedioFemenino;
    var promedioNoBinario;
    var acumuladorNotas;
    var contadorMaterias;
    var nombreCursaMasMaterias;
    var edadCursaMasMaterias;
    var masMaterias;
    var banderaMasMaterias;

    acumuladorNotaFemenino = 0;
    acumuladorNotaMasculino = 0;
    acumuladorNotaNoBinario = 0;
    acumuladorNotas = 0;
    contadorMaterias = 0;
    banderaMejorPromedio = true;
    banderaMasMaterias = true;
    banderaMasJoven = true;

    do 
    {
        nombreIngresado = prompt ("Ingrese su nombre");
        while (isNaN(nombreIngresado)==false) 
        {
            nombreIngresado = prompt ("Error, reingrese su nombre");  
        }
        tipoDeCursada = prompt ("Ingrese tipo de cursada libre;presencial;remota");
        while (isNaN(tipoDeCursada)==false||tipoDeCursada!="libre"&&tipoDeCursada!="presencial"&&tipoDeCursada!="remota") 
        {
            tipoDeCursada = prompt ("Error, reingrese tipo de cursada entre libre;presencial;remota")
        }
        sexoIngresado = prompt ("Ingrese su sexo entre femenino , masculino , no binario");
        while (isNaN(sexoIngresado)==false||sexoIngresado!="femenino"&&sexoIngresado!="masculino"&&sexoIngresado!="no binario") 
        {
            sexoIngresado = prompt ("Error, reingrese sexo entre femenino , masculino , no binario"); 
        }
        promedioIngresado = prompt("Ingrese su nota")
        promedioIngresado = parseInt(promedioIngresado);
        while (isNaN(promedioIngresado)==true||promedioIngresado<0||promedioIngresado>10) 
        {
            promedioIngresado = prompt ("Error, reingrese nota entre 0 y 10");  
        }
        edadIngresada = prompt ("Ingrese edad");
        edadIngresada = parseInt(edadIngresada)
        while (isNaN(edadIngresada)==true||edadIngresada<18||edadIngresada>100) 
        {
            edadIngresada = prompt ("Error, ingrese una edad valida y solo pueden cursar los mayores de 18"); 
        }

        if (banderaMejorPromedio == true&&sexoIngresado!="masculino") 
        {
            mejorPromedio = promedioIngresado;
            nombreMejorPromedio = nombreIngresado;
            banderaMejorPromedio = false;
        }
        else
        {
            if (mejorPromedio<promedioIngresado) 
            {
                mejorPromedio = promedioIngresado;
                nombreMejorPromedio = nombreIngresado; 
            }
        }

        if (banderaMasJoven == true&&tipoDeCursada=="libre") 
        {
            masJoven = edadIngresada;
            nombreDelMasJoven = nombreIngresado; 
            banderaMasJoven = false;
        }
        else
        {
            if (masJoven>edadIngresada) 
            {
                masJoven = edadIngresada;
                nombreDelMasJoven = nombreIngresado;   
            }
        }

        switch (sexoIngresado) 
        {
          case "femenino":
              acumuladorNotaFemenino = acumuladorNotaFemenino + promedioIngresado;
              break;
          case "masculino":
              acumuladorNotaMasculino = acumuladorNotaMasculino + promedioIngresado;
              break;
          case "no binario":
              acumuladorNotaNoBinario = acumuladorNotaNoBinario + promedioIngresado;
              break;
        }

        if (tipoDeCursada!="remota") 
        {
            contadorMaterias = contadorMaterias++  
        }

        if (banderaMasMaterias==true) 
        {
            nombreCursaMasMaterias = nombreIngresado;
            edadCursaMasMaterias = edadIngresada;
            masMaterias = contadorMaterias;
            banderaMasMaterias = false;
        }
        else
        {
          if (masMaterias<contadorMaterias) 
          {
              nombreCursaMasMaterias = nombreIngresado;
              edadCursaMasMaterias = edadIngresada;
              masMaterias = contadorMaterias;
          }
        }

        acumuladorNotas = acumuladorNotas + promedioIngresado;
        continuar = confirm ("Desea continuar y agregar mas alumnos?")
    } while (continuar);

    if (banderaMejorPromedio == true) 
    {
        document.write("a)No se ingreso ningun femenino o no binario");  
    }
    else
    {
        document.write("a)El nombre del mejor promedio no masculino es: "+nombreMejorPromedio); 
    }

    if (banderaMasJoven == true) 
    {
        document.write("<br/>b)No se ingreso ningun alumno que dio libre"); 
    }
    else
    {
        document.write("<br/>b)El nombre del mas joven de los alumnos que dan libre es: "+nombreDelMasJoven); 
    }

    promedioMasculino = acumuladorNotas/acumuladorNotaMasculino;
    promedioFemenino = acumuladorNotas/acumuladorNotaFemenino;
    promedioNoBinario = acumuladorNotas/acumuladorNotaNoBinario;

    if (promedioMasculino==0) 
    {
        document.write("<br/>d) No se ingreso ningun masculino");   
    }
    else
    {
      if (promedioNoBinario==0) 
      {
          document.write("<br/>d) No se ingreso ningun no binario");  
      }
      else
      {
          if (promedioFemenino==0) 
          {
              document.write("<br/>d) No se ingreso ningun femenino");    
          }
          else
          {
            document.write("<br/>d) El promedio de notas femenino es de: "+promedioFemenino,
            "<br/> El promedio de notas masculino es de: "+promedioMasculino,
            "<br/> El promedio de notas de los no binarios es de: "+promedioNoBinario);
          }
            
      }
    }

    if (banderaMasMaterias==true) 
    {
        document.write("<br/>f) No se ingreso ningun Alumno que no curse de forma remota");
    }
    else
    {
        document.write("<br/>f) El alumno que curza mas materias es: "+nombreCursaMasMaterias+" y la edad es de "+edadCursaMasMaterias); 
    } 
}
