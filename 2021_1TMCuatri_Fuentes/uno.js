/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
	var nombreProduto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var marcaIngresada;
	var cantidadAlcohol;
	var cantidadIac;
	var cantidadQuat;
	var promedioAlcohol;
	var promedioQuat;
	var promedioIac;
	var acumuladorCantidad;
	var inflamableMasCantidad;
	var masCantidad;
	var banderaCantidad;
	var cantidadIacMenorA200;
	var marcaMasCara;
	var tipoMasCaro
	var masCaro;
	var banderaMasCaro;

	cantidadAlcohol = 0;
	cantidadIac = 0;
	cantidadQuat = 0;
	acumuladorCantidad = 0;
	cantidadIacMayorA200 = 0;
	banderaCantidad = true;
	banderaMasCaro = true;

	for(var i=0;i<5;i++)
	{
		nombreProduto = prompt ("ingrese tipo de producto ALCOHOL, IAC o QUAT");
		while (isNaN(nombreProduto)==false||nombreProduto!="ALCOHOL"&&nombreProduto!="IAC"&&nombreProduto!="QUAT") 
		{
			nombreProduto = prompt ("Error reingrese dato, ALCOHOL, IAC o QUAT");
		}
		precioProducto = prompt ("Ingrese precio del producto entre 100 y 300");
		precioProducto = parseInt(precioProducto);
		while (isNaN(precioProducto)==true||precioProducto<100||precioProducto>300) 
		{
			precioProducto = prompt ("Error, reingrese dato entre 100 y 300")	
		}
		cantidadUnidades = prompt ("Ingrese cantidad de unidades no mayor a 1000");
		cantidadUnidades = parseInt(cantidadUnidades);
		while (isNaN(cantidadUnidades)==true||cantidadUnidades<1||cantidadUnidades>1000) 
		{
			cantidadUnidades = prompt ("Error, reingrese unidades entre 1 y 1000");	
		}
		tipoInflamable = prompt ("Ingrese tipo inflamable ignifugo, combustible, explosivo");
		while (isNaN(tipoInflamable)==false||tipoInflamable!="ignifugo"&&tipoInflamable!="combustible"&&tipoInflamable!="explosivo") 
		{
			tipoInflamable = prompt ("Error, reingrese dato ignifugo, combustible, explosivo");
		}
		marcaIngresada = prompt ("Ingrese marca del producto");
		while (isNaN(marcaIngresada)==false) 
		{
			marcaIngresada = prompt ("Error, reingrese marca valida");	
		}

		switch (nombreProduto) 
		{
			case "ALCOHOL":
				cantidadAlcohol ++
				break;
			case "IAC":
				cantidadIac ++
				if (precioProducto<=200) 
				{
					cantidadIacMenorA200 ++	
				}
				break;
			case "QUAT":
				cantidadQuat ++
				break;
		}
		if (banderaCantidad==true) 
		{
			inflamableMasCantidad = tipoInflamable;
			masCantidad = cantidadUnidades;
			banderaCantidad = false;
		}
		else
		{
			if (masCantidad<cantidadUnidades) 
			{
				inflamableMasCantidad = tipoInflamable;
				masCantidad = cantidadUnidades;	
			}
		}
		if (banderaMasCaro == true) 
		{
			masCaro = precioProducto;
			marcaMasCara = marcaIngresada;
			tipoMasCaro = tipoInflamable;	
		}
		else
		{
			if (masCaro<precioProducto) 
			{
				masCaro = precioProducto;
				marcaMasCara = marcaIngresada;
				tipoMasCaro = tipoInflamable;
			}
		}

		acumuladorCantidad = cantidadQuat+cantidadAlcohol+cantidadIac;
	}

	promedioAlcohol = cantidadAlcohol/acumuladorCantidad;
	promedioQuat = cantidadQuat/acumuladorCantidad;
	promedioIac = cantidadIac/acumuladorCantidad;

	if (promedioAlcohol==0) 
	{
		document.write("a)No se ingreso ningun ALCOHOL")
		
	}
	else
	{
		if (promedioIac==0) 
		{
			document.write("a)No se ingreso ningun IAC")
		}
		else
		{
			if (promedioQuat==0) 
			{
				document.write("a)No se ingreso ningun QUAT")
			}
			else
			{
				document.write("a)El promedio de cantidad ALCOHOL es de :"+promedioAlcohol,
				"<br/>El promedio de cantidad de IAC es de: "+promedioIac,
				"<br/>El promedio de cantidad de QUAT es de: "+promedioIac)
			}
		}
	}
	if (banderaCantidad == true) 
	{
		document.write("<br/>b)No se ingreso ningun Inflamable");	
	}
	else
	{
		document.write("<br/>b)El tipo de inflamable con mas cantidad es: "+inflamableMasCantidad)
	}

	if (cantidadIacMenorA200==0) 
	{
		document.write("<br/>c)No se ingreso ningun IAC mayor a 200 pesos");
	}
	else
	{
		document.write("<br/>c)La cantidad de unidades IAC menor a 200 pesos es de: "+cantidadIacMenorA200);
	}

	if (banderaMasCaro == true) 
	{
		document.write("<br/>d)No se agrego ningun tipo");	
	}
	else
	{
		document.write("<br/>d)La marca mas cara es: "+marcaMasCara+" Y el tipo es: "+tipoMasCaro);	
	}

}
