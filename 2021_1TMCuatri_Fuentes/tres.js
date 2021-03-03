/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
	var nombreIngresado;
	var estadoCivilIgresado;
	var edadIngresada;
	var temperaturaCorporal;
	var sexoIngresado;
	var precioPorPasajero = 600;
	var continuar;
	var cantidadViudosMas60;
	var laMasJoven;
	var nombreDeLaMasJoven;
	var banderaMasJoven;
	var contadorViajes;
	var valorViajes;
	var contadorMas60;
	var porcentajeViajes;

	cantidadViudosMas60 = 0;
	cantidadViajes = 0;
	contadorMas60 = 0;
	banderaMasJoven = true

	do 
	{
		nombreIngresado = prompt("Ingrese su nombre");
		while (isNaN(nombreIngresado)==false) 
		{
			nombreIngresado = prompt ("Ingrese un nombre valido");		
		}
		estadoCivilIgresado = prompt ("Ingrese un estado civil entre soltero, casado o viudo");
		while (isNaN(estadoCivilIgresado)==false||estadoCivilIgresado!="soltero"&&estadoCivilIgresado!="casado"&&estadoCivilIgresado!="viudo") 
		{
			estadoCivilIgresado = prompt ("Error, reingrese dato entre soltero, casado o viudo");	
		}
		edadIngresada = prompt ("Ingrese edad");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada)==true||edadIngresada<17||edadIngresada>100) 
		{
			edadIngresada = prompt ("Ingrese una edad valida no se perminten menores de edad");
		}
		temperaturaCorporal = prompt ("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (isNaN(temperaturaCorporal)==true||temperaturaCorporal<35||temperaturaCorporal>45) 
		{
			temperaturaCorporal = prompt ("Ingrese una temperatura corporal sana y valida");	
		}
		sexoIngresado = prompt ("Ingrese su sexo femenino, masculino");
		while (isNaN(sexoIngresado)==false||sexoIngresado!="femenino"&&sexoIngresado!="masculino") 
		{
			sexoIngresado = prompt ("Error, reingrese femenino o masculino");	
		}
		if (estadoCivilIgresado=="viudo"&&edadIngresada>60) 
		{
			cantidadViudosMas60++	
		}

		if (banderaMasJoven==true&&sexoIngresado=="femenino") 
		{
			laMasJoven = edadIngresada;
			nombreDeLaMasJoven = nombreIngresado;
			banderaMasJoven = false;	
		}
		else
		{
			if (laMasJoven<edadIngresada) 
			{
				laMasJoven = edadIngresada;
				nombreDeLaMasJoven = nombreIngresado;
			}
		}
		if (edadIngresada>60) 
		{
			contadorMas60;
		}

		cantidadViajes++
		porcentajeViajes = cantidadViajes*contadorMas60/100;

		continuar = confirm("Se debe agregar mas pasajeros?")
	} while (continuar);

	valorViajes = cantidadViajes*precioPorPasajero;

	if (cantidadViudosMas60==0) 
	{
		document.write ("a) No se ingreso ninguna persona con estado viudo de mas de 60 años");
	}
	else
	{
		document.write ("a) La cantidad de persona mayores de 60 viudas es: "+cantidadViudosMas60);
	}

	if (banderaMasJoven==true) 
	{
		document.write("<br/>b)No se ingreso ninguna mujer soltera");
	}
	else
	{
		document.write("<br/>b)El nombre de la mujer mas soltera es: "+nombreDeLaMasJoven+" y de edad de "+laMasJoven);
	}
	
	document.write("<br/>c)El viaje sin descuento sale: "+valorViajes);
	if (porcentajeViajes>50) 
	{
		valorViajes = valorViajes - valorViajes*25/100;
		document.write("<br/>d)El precio final del viaje porque mas del 50% del pasaje es de 60 o mas años es de: "+valorViajes)

	}
}
