<?php

use Illuminate\Database\Seeder;

class EstablecimientosTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('establecimientos')->delete();
        
		\DB::table('establecimientos')->insert(array (
			0 => 
			array (
				'id' => 1,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN EL CENTRO TGU',
				'address' => 'Frente a Calle Peatonal, El Centro Tegucigalpa
',
			),
			1 => 
			array (
				'id' => 2,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN PLAZA SAN CARLOS BLVD. MZN. TGU',
				'address' => 'Plaza San Carlos, Blvd. Morazan
',
			),
			2 => 
			array (
				'id' => 3,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN-ATB JUAN PABLO II TGU',
				'address' => 'Blvd. Juan Pablo II, contiguo a Pizza Hut',
			),
			3 => 
			array (
				'id' => 4,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN KENNEDY TGU',
				'address' => 'Contiguo Supermercado Paiz Kennedy,  Blvd. Kennedy
',
			),
			4 => 
			array (
				'id' => 5,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN LA MERCED TGU',
				'address' => 'Calle Bolivar, El Centro. A un costado de Edificio Midence Soto, frente a Supermercado La Colonia.
',
			),
			5 => 
			array (
				'id' => 6,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN-ATB BLVD. MORAZÁN TGU',
				'address' => NULL,
			),
			6 => 
			array (
				'id' => 7,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN MALL MULTIPLAZA TGU',
				'address' => 'Centro Financiero Mall Multiplaza, Col Lomas del Mayab, Blvd San Juan Bosco
',
			),
			7 => 
			array (
				'id' => 8,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN SEARS TGU',
				'address' => 'Centro Comercial Plaza America, contiguo a miCasa SEARS
',
			),
			8 => 
			array (
				'id' => 9,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN LA GRANJA TGU',
				'address' => 'En el 2do nivel de Centro Comercial Plaza La Granja, Blvd C.E.E, Comayaguela, Frente a Supermerco La Colonia. 
',
			),
			9 => 
			array (
				'id' => 10,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN BCIE TGU',
				'address' => 'Blvd. Suyapa Edif. Principal Bco Centroamericano de Integ. Económica
',
			),
			10 => 
			array (
				'id' => 11,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN MALL LAS CASCADAS TGU',
				'address' => 'Mall Las Cascadas, interseccion Blvd. FFAA y Blvd. Kuwait',
			),
			11 => 
			array (
				'id' => 12,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN UNITEC TGU',
				'address' => 'Campus Unitec, TGU ',
			),
			12 => 
			array (
				'id' => 13,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN SANTA MONICA SUYAPA TGU',
				'address' => 'Instalaciones Santa Mónica Suyapa, Tegucigalpa 
',
			),
			13 => 
			array (
				'id' => 14,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN L.C. LA CONCORDIA TGU',
				'address' => 'Barrio La Concordia, Edif. Supermercados La Colonia
',
			),
			14 => 
			array (
				'id' => 15,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN PRONTO PARQUE EMPRESARIAL TGU',
				'address' => '"Centro de Conv Pronto en Estación Uno Parque Empresarial
Anillo Periférico Sur, Contiguo a MOLSA."

',
			),
			15 => 
			array (
				'id' => 16,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN INJUPEMP TGU',
				'address' => 'Edificio INJUPEMP, Col. Loma Linda Norte, Ave. La FAO.
',
			),
			16 => 
			array (
				'id' => 17,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT CENTRO TGU',
				'address' => 'Barrio La Hoya, Calle Matute, contiguo a La Curacao, aún costado de Catedral Tegucigalpa


',
			),
			17 => 
			array (
				'id' => 18,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT CITY MALL TGU',
				'address' => 'Blvd. Económica Europea, Centro Comercial City Mall 3er Nível, frente Aeropuerto Toncontín.
',
			),
			18 => 
			array (
				'id' => 19,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT MALL LAS CASCADAS TGU',
				'address' => 'Las Cascadas Mall, interseccion Blvd. FFAA y Blvd. Kuwait LOCAL LA-109
',
			),
			19 => 
			array (
				'id' => 20,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT METROMALL TGU',
				'address' => 'Interseccion Blvd Fuerzas Armadas y Comunidad Economica Europea Centro Financiero Metromall. 
',
			),
			20 => 
			array (
				'id' => 21,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT MULTIPLAZA TGU',
				'address' => 'Blvd Juan Pablo II, Centro Financiero Mall Multiplaza, Col Lomas del Mayab
',
			),
			21 => 
			array (
				'id' => 22,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT PAYAQUI TGU',
				'address' => 'Blvd Juan Pablo II, URBANIZACION LOMAS DEL GUIJARRO SUR, Frente a Ruby Tuesday
',
			),
			22 => 
			array (
				'id' => 23,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT PLAZA CRIOLLA TGU',
				'address' => 'Entre Blvd Morazan y 5ta Calle, Centro Comercial Plaza Criolla
',
			),
			23 => 
			array (
				'id' => 24,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN CT PLAZA MIRAFLORES TGU',
				'address' => 'Primer nivel Plaza Miraflores, anexo centro comercial contiguo a Supermercado Paiz
',
			),
			24 => 
			array (
				'id' => 25,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN-ATB JUAN PABLO II TGU',
				'address' => NULL,
			),
			25 => 
			array (
				'id' => 26,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN-ATB BLVD. MORAZÁN TGU',
				'address' => NULL,
			),
			26 => 
			array (
				'id' => 27,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN AMDC TGU',
				'address' => 'Barrio La Plazuela, edificio Alcaldia Municipal
',
			),
			27 => 
			array (
				'id' => 28,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN HIPERPAIZ TGU',
				'address' => 'Blvd Fuerzas Armadas, Mall Las Cascadas
',
			),
			28 => 
			array (
				'id' => 29,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. LA HACIENDA TGU',
				'address' => 'Blvd. La Hacienda, Edif. Supermercados La Colonia
',
			),
			29 => 
			array (
				'id' => 30,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. KENNEDY TGU',
				'address' => 'Col. Kennedy, 1era entrada, Edif. Supermercados La Colonia
',
			),
			30 => 
			array (
				'id' => 31,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. BLVD. SUYAPA TGU',
				'address' => 'Blvd. Suyapa, frente a instalaciones ENEE, Edif. Supermercados La Colonia
',
			),
			31 => 
			array (
				'id' => 32,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. LA GRANJA TGU',
				'address' => 'Bo. La Granja, frente a Oso Polar, Edif. Supermercados La Colonia
',
			),
			32 => 
			array (
				'id' => 33,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. 21 DE OCTUBRE TGU',
				'address' => 'Col. 21 de Octubre, salida a Valle de Angeles, Edif. Supermercados La Colonia
',
			),
			33 => 
			array (
				'id' => 34,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. VILLAS DEL SOL TGU',
				'address' => 'Col. Kennedy, salida a Danlí, CC Villas del Sol, Edif. Supermercados La Colonia
',
			),
			34 => 
			array (
				'id' => 35,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN UNILEVER TGU',
				'address' => 'Aldea Las Casitas, a 500 metros del Puente de Las Uvas, contiguo a entrada de la Colonia Roble Oeste
',
			),
			35 => 
			array (
				'id' => 36,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN WACKENHUT TGU',
			'address' => 'Col. La San Miguel , calle principal a 100 mts de la  Gasolinera Puma ( Dumbar)
',
			),
			36 => 
			array (
				'id' => 37,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN ALCON TGU',
				'address' => 'Pedregal, Complejo caprisa , Instalaciones Alcon, Porton Pollo Norteño
',
			),
			37 => 
			array (
				'id' => 38,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PROVAL TGU',
				'address' => 'Col. Ignasio, Blvd Centro, Edificio PROVAL
',
			),
			38 => 
			array (
				'id' => 39,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN CORPORACION DINANT TGU',
				'address' => 'Bo. Morazán, Blvd. Suyapa, Instalaciones Corp. DINANT',
			),
			39 => 
			array (
				'id' => 40,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN EMB. LA REYNA TGU',
				'address' => 'Instalaciones Embotelladora La Reyna, Col. Mirador de Loarque, frente de la International School, 2da. entrada anillo periférico.',
			),
			40 => 
			array (
				'id' => 41,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN DIUNSA SUPERSTORE TGU',
				'address' => 'Instalaciones De Diunsa Superstore Tegucigalpa',
			),
			41 => 
			array (
				'id' => 42,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN CENTRO DE TARJETAS TGU',
				'address' => 'Bulevard Centro Amercia, Paseo Juan Pablo',
			),
			42 => 
			array (
				'id' => 43,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN L.C. ANILLO SUR TGU',
				'address' => 'Anillo Periferico, dentro de Supermercado La Colonia T29. Frente a nuevo local Pricesmart TGU',
			),
			43 => 
			array (
				'id' => 44,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO PRESIDENCIAL TGU',
				'address' => 'Centro de Conveniencia Pronto, Frente a Do it Center Blvd Juan Pablo II',
			),
			44 => 
			array (
				'id' => 45,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO MIRAFLORES TGU',
				'address' => 'Centro de Conveniencia Pronto en Estación de servicio Uno Miraflores, Blvd Centroamercia. Frente a INFOP',
			),
			45 => 
			array (
				'id' => 46,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN MUNICIPALIDAD SPS',
				'address' => 'Edificio Alcaldía SPS, 5ta calle, al suroeste',
			),
			46 => 
			array (
				'id' => 47,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO FLORENCIA TGU',
				'address' => 'Estación de servicio UNO, Bulevard Suyapa, contiguo a restaurante TacosTado',
			),
			47 => 
			array (
				'id' => 48,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN ALIMENTOS MARAVILLA COM',
				'address' => 'EDT Honduras, S.A. de C.V. k.m 76 Palmerola, Comayagua',
			),
			48 => 
			array (
				'id' => 49,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN CASA PRESIDENCIAL TGU',
				'address' => 'Blvd Juan Pablo II en Instalaciones Casa Presidencial contiguo a Hotel Marriot Tegucigalpa',
			),
			49 => 
			array (
				'id' => 50,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO LA HACIENDA TGU ',
				'address' => 'Estación de servicio UNO Blvd. La Hacienda, Col. Florencia Norte',
			),
			50 => 
			array (
				'id' => 51,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO EMISORAS UNIDAS TGU ',
				'address' => 'Estación de servicio UNO, Entre Blvd. Centro América y Blvd Suyapa,  a inmediaciones de Edificio de Emisoras Unidas.',
			),
			51 => 
			array (
				'id' => 52,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO BLVD. MORAZAN TGU ',
				'address' => 'Estación de servicio Uno, Col. Santa Isabel, frente a redondel Final del Blvd Morazan. ',
			),
			52 => 
			array (
				'id' => 53,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO MANCHEN TGU ',
				'address' => 'Estación de Servicio UNO, Barrio Manchen, 500mts del mercado San Pablo.',
			),
			53 => 
			array (
				'id' => 54,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN PRONTO TEPEYAC TGU ',
				'address' => 'Estación de Servicio UNO, Col Tepeyac.',
			),
			54 => 
			array (
				'id' => 55,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'AGN PRINCIPAL CBA',
				'address' => 'Edificio Plaza Tropical, Ave. 14 de Junio, 8 y 9 calle, Barrio El Centro',
			),
			55 => 
			array (
				'id' => 56,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'AGN MEGAPLAZA CBA',
				'address' => 'Centro Comercial Megaplaza, Km 2, Carretera salida a La Lima, Ave. San Fernando, 2do Anillo Periferico',
			),
			56 => 
			array (
				'id' => 57,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'AGN-ATB JUAN PABLO II TGU',
				'address' => NULL,
			),
			57 => 
			array (
				'id' => 58,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'VTN ALCON LA CEIBA CBA',
				'address' => 'Carretera La Ceiba - Tela, frente al Club de Tropas de la Fuerza Aérea.',
			),
			58 => 
			array (
				'id' => 59,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'VTN. ALCALDÍA LA CEIBA CBA',
				'address' => 'Barrio El Centro, Ave San Isidro , Calle 9, Contiguo al Parque Central, Frente a la Catedral, Edificio Alcaldía de Ceiba.',
			),
			59 => 
			array (
				'id' => 60,
				'departamento_id' => 5,
				'municipio_id' => 64,
				'name' => 'AGN CHOLOMA CHM',
				'address' => 'Calle principal entrada Texaco.',
			),
			60 => 
			array (
				'id' => 61,
				'departamento_id' => 5,
				'municipio_id' => 64,
				'name' => 'AGN CHOLOMA MALL AMERICAS CHM',
				'address' => 'Mall Las Americas, Choloma, Carretera a  Cortes, Frente a Zip Choloma',
			),
			61 => 
			array (
				'id' => 62,
				'departamento_id' => 5,
				'municipio_id' => 64,
				'name' => 'AGN CHOLOMA CHM',
				'address' => NULL,
			),
			62 => 
			array (
				'id' => 63,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'VTN JASPER SPS',
				'address' => 'SPS, Zip Honduras, KM 5 a Puerto Cortes',
			),
			63 => 
			array (
				'id' => 64,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN JASPER SPS',
				'address' => NULL,
			),
			64 => 
			array (
				'id' => 65,
				'departamento_id' => 5,
				'municipio_id' => 64,
				'name' => 'VTN FOTL RLA MANUFACTURING CHM',
				'address' => 'RLA Manufacturing Choloma, carretera a Jutosa. ',
			),
			65 => 
			array (
				'id' => 66,
				'departamento_id' => 5,
				'municipio_id' => 64,
				'name' => 'VTN ZIP HONDURAS SPS',
				'address' => 'Edificio Administrativo Zoli Honduras  S.A. de C.V. ubicado en el Kilometro 5 carretera a Puerto Cortes, Choloma, Cortes',
			),
			66 => 
			array (
				'id' => 67,
				'departamento_id' => 5,
				'municipio_id' => 64,
				'name' => 'VTN. INHDELVA CHM',
				'address' => 'Zona libre INHDELVA, 800 mt. carretera a Aldea Jutosa, Choloma, Cortes.',
			),
			67 => 
			array (
				'id' => 68,
				'departamento_id' => 5,
				'municipio_id' => 110,
				'name' => 'VTN ZIP CHOLOMA CHM',
				'address' => 'Zip Choloma, Choloma, Cortes',
			),
			68 => 
			array (
				'id' => 69,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'AGN COMAYAGUA COM',
				'address' => 'Bo. el Centro, 1 cuadra al oeste de Alcaldia Municipal, contiguo a Banadesa.',
			),
			69 => 
			array (
				'id' => 70,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'AGN COMAYAGUA MALL PREMIER COM',
				'address' => 'Centro Comercila Mall Premier Comayagua',
			),
			70 => 
			array (
				'id' => 71,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'AGN COMAYAGUA COM',
				'address' => NULL,
			),
			71 => 
			array (
				'id' => 72,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'AGN COMAYAGUA MALL PREMIER COM',
				'address' => NULL,
			),
			72 => 
			array (
				'id' => 73,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'VTN L.C. COMAYAGUA COM',
				'address' => 'Bo. Torondon, Calle del Comercio Comayagua, Edif. Supermercados La Colonia',
			),
			73 => 
			array (
				'id' => 74,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'VTN UNILEVER COMAYAGUA COM',
				'address' => 'Complejo Industrial Comayagua, Carretera a Tegucigalpa, KM 7, Palmerola, Frente a Base Aérea Soto Cano, Comayagua',
			),
			74 => 
			array (
				'id' => 75,
				'departamento_id' => 3,
				'municipio_id' => 19,
				'name' => 'VTN EMB. LA REYNA COMAYAGUA COM',
				'address' => 'Carretera Panamericana Km 5 hacia Tegucigalpa y Km 82 hacia SPS, Intersección empalme canal seco, Zona el Trapiche, aldea las Cañas',
			),
			75 => 
			array (
				'id' => 76,
				'departamento_id' => 7,
				'municipio_id' => 93,
				'name' => 'AGN DANLI DNL',
				'address' => 'Centro Comercial Uniplaza. Entrada principal de Danli, El Paraizo',
			),
			76 => 
			array (
				'id' => 77,
				'departamento_id' => 7,
				'municipio_id' => 93,
				'name' => 'VTN EMB. LA REYNA DANLI DNL',
				'address' => 'Instalaciones Embotelladora La Reyna Danlí, Carretera a El Paraíso, 1km antes de llegar a El Paraíso',
			),
			77 => 
			array (
				'id' => 78,
				'departamento_id' => 7,
				'municipio_id' => 93,
				'name' => 'VTN L.C. DANLI DNL',
				'address' => 'Entrada a Danlí, 200 mt. carretera al  Valle de Jamastrán, 50 mt,. antes de llegar a la Terminal de Buses, Edif. Supermercados La Colonia.',
			),
			78 => 
			array (
				'id' => 79,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'AGN PLAZA TORONJAL CBA',
				'address' => 'Edificio Plaza Toronjal, Colonia El Toronjal, Avenida Morazán, La Ceiba, Atlántida.',
			),
			79 => 
			array (
				'id' => 80,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'AGN LC CEIBA CBA',
				'address' => 'Bo. el Centro  Zona Mazapán  Blvd 15 de Sept,  8 calle',
			),
			80 => 
			array (
				'id' => 81,
				'departamento_id' => 15,
				'municipio_id' => 228,
				'name' => 'AGN JUTICALPA JTC',
				'address' => 'Centro Comercial Uniplaza, Entrada principal de Juticalpa, Olancho',
			),
			81 => 
			array (
				'id' => 82,
				'departamento_id' => 15,
				'municipio_id' => 228,
				'name' => 'AGN L.C. JUTICALPA JTC',
				'address' => 'Instalaciones de Supermercados la Colonia en la ciudad de Juticalpa, 4ta. avenida, Barrio la Hoya, costado noreste de la Terminal de Buses Gilian de Gómez',
			),
			82 => 
			array (
				'id' => 83,
				'departamento_id' => 15,
				'municipio_id' => 228,
				'name' => 'VTN ALCALDIA JUTICALPA JTC',
				'address' => 'Edif. Municipal, centro de la Ciudad de Juticalpa, frente al Parque Central',
			),
			83 => 
			array (
				'id' => 84,
				'departamento_id' => 15,
				'municipio_id' => 228,
				'name' => 'VTN EMB. LA REYNA JUTICALPA JTC',
				'address' => 'Emboteladora La Reyna, Barrio La Cofradía Km 168, Entrada a Juticalpa',
			),
			84 => 
			array (
				'id' => 85,
				'departamento_id' => 5,
				'municipio_id' => 74,
				'name' => 'AGN LA LIMA LIM',
				'address' => 'Barrio El Centro, Calle del Comercio',
			),
			85 => 
			array (
				'id' => 86,
				'departamento_id' => 18,
				'municipio_id' => 290,
				'name' => 'AGN EL PROGRESO PRG',
				'address' => 'Calle del Comercio, 2da calle frente a Pizza Hut',
			),
			86 => 
			array (
				'id' => 87,
				'departamento_id' => 18,
				'municipio_id' => 290,
				'name' => 'AGN L.C. EL PROGRESO ',
				'address' => 'Barrio San Francisco 6 y 7 ave, 5 calle Sur contiguo a Plaza Aventura, Progreso.',
			),
			87 => 
			array (
				'id' => 88,
				'departamento_id' => 18,
				'municipio_id' => 290,
				'name' => 'AGN CT MEGAPLAZA PGR',
				'address' => 'Centro Comercial Megaplaza Progreso',
			),
			88 => 
			array (
				'id' => 89,
				'departamento_id' => 18,
				'municipio_id' => 290,
				'name' => 'VTN FOTL TELA TLA',
				'address' => 'Km. 8, Parque Industrial Zip Porvenir, Planta Tela ',
			),
			89 => 
			array (
				'id' => 90,
				'departamento_id' => 5,
				'municipio_id' => 68,
				'name' => 'AGN PUERTO CORTES PCR',
				'address' => 'Barrio Copen 10 calle, 2 avenida, frente escuela Republica de Chile',
			),
			90 => 
			array (
				'id' => 91,
				'departamento_id' => 5,
				'municipio_id' => 68,
				'name' => 'AGN PLAZA HONDUREÑA PCR',
				'address' => 'Centro Comercial Plaza Hondureña, Barrio El Centro, 2ave, 2 Calle',
			),
			91 => 
			array (
				'id' => 92,
				'departamento_id' => 5,
				'municipio_id' => 68,
				'name' => 'AGN PUERTO CORTES PCR',
				'address' => NULL,
			),
			92 => 
			array (
				'id' => 93,
				'departamento_id' => 5,
				'municipio_id' => 59,
				'name' => 'AGN PRINCIPAL SPS',
				'address' => 'Ave. Circunvalacion 5-6 calle 16 Ave. S.O., Barrio Suyapa',
			),
			93 => 
			array (
				'id' => 94,
				'departamento_id' => 11,
				'municipio_id' => 161,
				'name' => 'AGN FRENCH HARBOUR ROA',
				'address' => 'French Harbour calle principal contiguo a Gasolinera Petro Sun Roatán, Islas de la Bahía',
			),
			94 => 
			array (
				'id' => 95,
				'departamento_id' => 11,
				'municipio_id' => 161,
				'name' => 'VTN ROATAN ROA',
				'address' => 'Puerto de Cruceros y Marina, Islas de La Bahia',
			),
			95 => 
			array (
				'id' => 96,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN DIUNSA SPS',
				'address' => 'Diunsa Super Store, Fte Blvd.Hacia La Lima',
			),
			96 => 
			array (
				'id' => 97,
				'departamento_id' => 4,
				'municipio_id' => 40,
				'name' => 'AGN SANTA ROSA DE COPAN SRC',
				'address' => 'Calle Centenario, Barrio El Carmen, a una cuadra del Parque Central',
			),
			97 => 
			array (
				'id' => 98,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN TERCERA AVENIDA SPS',
				'address' => '3 Ave., 4-5 calle S.O., Barrio El Centro',
			),
			98 => 
			array (
				'id' => 99,
				'departamento_id' => 4,
				'municipio_id' => 40,
				'name' => 'AGN UNIPLAZA SANTA ROSA SRC',
				'address' => 'Carretera internacional, frente a Residencial Santa Fe,  Centro Comercial Uniplaza Santa Rosa de Copán',
			),
			99 => 
			array (
				'id' => 100,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN SIETE CALLE SPS',
				'address' => '7 Ave., 7 calle S.O., Barrio Medina',
			),
			100 => 
			array (
				'id' => 101,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN SIETE CALLE SPS',
				'address' => NULL,
			),
			101 => 
			array (
				'id' => 102,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN EL CENTRO SPS',
				'address' => '5-6 Ave., 2 calle S.O. Barrio el Centro',
			),
			102 => 
			array (
				'id' => 103,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN-ATB SALIDA CORTES SPS',
				'address' => 'Salida a Puerto Cortes',
			),
			103 => 
			array (
				'id' => 104,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN-ATB LOS ALAMOS SPS',
				'address' => 'Col. Los Alamos, Blvd. Del Norte, salida a Puerto Cortes',
			),
			104 => 
			array (
				'id' => 105,
				'departamento_id' => 1,
				'municipio_id' => 1,
				'name' => 'Cualquuer Nombre',
				'address' => 'asdasd asda s',
			),
			105 => 
			array (
				'id' => 106,
				'departamento_id' => 3,
				'municipio_id' => 36,
				'name' => 'AGN SIGUATEPEQUE SGA',
				'address' => 'Centro Comercial Uniplaza, Carretera al Norte, Siguatepeque
',
			),
			106 => 
			array (
				'id' => 107,
				'departamento_id' => 3,
				'municipio_id' => 36,
				'name' => 'AGN LC SIGUATEPEQUE SGA',
				'address' => 'AGN LC SIGUATEPEQUE SGA
',
			),
			107 => 
			array (
				'id' => 108,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN MALL MULTIPLAZA SPS',
				'address' => 'Mall Multiplaza, entre Blvd. Del Sur y Ave. Circunvalacion',
			),
			108 => 
			array (
				'id' => 109,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN-ATB SATELITE SPS',
				'address' => 'Col. Satelite, sector 5 sobre Blvd del Este, San Pedro Sula, Cortes',
			),
			109 => 
			array (
				'id' => 110,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN PRINCIPAL TGU',
				'address' => 'Edificio Plaza Victoria, Colonia Las Colinas, Blvd. Francia
',
			),
			110 => 
			array (
				'id' => 111,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN GALERIAS DEL VALLE SPS',
				'address' => 'Col. Jardines del Valle, Parque Comercial Galerias del Valle. SPS',
			),
			111 => 
			array (
				'id' => 112,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CITY MALL SPS',
				'address' => 'City Mall, ave circunvalacion frente area de cines',
			),
			112 => 
			array (
				'id' => 113,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CENTRAL METROPOLITANA SPS',
				'address' => 'Sobre Boulevard del Sur, Gran Central de Buses Metropolitana',
			),
			113 => 
			array (
				'id' => 114,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN PLAZA PEDREGAL SPS',
				'address' => 'Blvd. Hacia el  Hospital Mario Rivas; dentro de instalaciones de Diunsa El Pedregal, SPS',
			),
			114 => 
			array (
				'id' => 115,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN LC PRADO ALTO SPS',
				'address' => 'Supermercado La Colonia Prado Alto, Boulevard del Sur',
			),
			115 => 
			array (
				'id' => 116,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN UNITEC TGU',
				'address' => 'Campus Unitec, TGU 
',
			),
			116 => 
			array (
				'id' => 117,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN ALTARA SPS',
				'address' => 'C.A.LB-05 segundo piso del Centro Comercial  “ALTARA”, en Altia Business Park, Km. 2, Blvd. hacia Armenta, San Pedro Sula, Córtes.',
			),
			117 => 
			array (
				'id' => 118,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CT CIRCUNVALACION SPS',
				'address' => 'AVE CIRCUNVALACION 17 AVE ENTRE 2DA, 4TA',
			),
			118 => 
			array (
				'id' => 119,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CT CITY MALL SPS',
				'address' => 'CENTRO COMERCIAL CITY MALL, SITUADO EN EL ANILLO CIRCUNVALACION',
			),
			119 => 
			array (
				'id' => 120,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CT MEGAPLAZA SPS',
				'address' => 'Centro Comercial Megaplaza San Pedro Sula',
			),
			120 => 
			array (
				'id' => 121,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CT MULTIPLAZA SPS',
				'address' => 'CONDIMINIO MALL MULTIPLAZA, AL SUROESTE DE LA CIUDAD DE SPS',
			),
			121 => 
			array (
				'id' => 122,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CT SANTA MONICA SPS',
				'address' => 'BOULEVARD DEL NORTE, SALIDA A PUERTO CORTES LOCALES NO. 9,10,11 Y 12.',
			),
			122 => 
			array (
				'id' => 123,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'ATB PAZ BARAHONA SPS',
				'address' => '16 calle, 10 avenida, Col.Paz Barahona SPS',
			),
			123 => 
			array (
				'id' => 124,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'ATB EN PRINCIPAL SPS',
				'address' => '',
			),
			124 => 
			array (
				'id' => 125,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN-ATB SALIDA CORTES SPS',
				'address' => 'Salida a Puerto Cortes',
			),
			125 => 
			array (
				'id' => 126,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN-ATB LOS ALAMOS SPS',
				'address' => 'Col. Los Alamos, Blvd. Del Norte, salida a Puerto Cortes',
			),
			126 => 
			array (
				'id' => 127,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN CT CIRCUNVALACION SPS',
				'address' => 'AVE CIRCUNVALACION 17 AVE ENTRE 2DA, 4TA',
			),
			127 => 
			array (
				'id' => 128,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN-ATB SATELITE SPS',
				'address' => 'Col. Satelite, sector 5 sobre Blvd del Este, San Pedro Sula, Cortes',
			),
			128 => 
			array (
				'id' => 129,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN AGUAS DE SAN PEDRO SPS',
				'address' => 'SPS, Bo. Las Palmas, 13 Ave, 3 Calle ',
			),
			129 => 
			array (
				'id' => 130,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN ALCON SPS',
				'address' => 'Búfalo, Villanueva, atrás de Bodega Coalsa, carretera desvío al Calan',
			),
			130 => 
			array (
				'id' => 131,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN FRUIT OF THE LOOM SPS',
				'address' => 'Villanueva, Cortes, frente a PRONORSA',
			),
			131 => 
			array (
				'id' => 132,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN PROVAL SPS',
				'address' => 'SPS, Col. San Fernando. Atrás de Diunsa Shoping Center',
			),
			132 => 
			array (
				'id' => 133,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN PRONORSA SPS',
				'address' => 'Búfalo, Villanueva, frente Bodega CODESA, Km. 15 ',
			),
			133 => 
			array (
				'id' => 134,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN DELICIA SPS',
				'address' => 'SPS, Bo. Las Palmas, 18 calle, 6 Ave., contiguo IMFERRA ',
			),
			134 => 
			array (
				'id' => 135,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN WACKENHUT SPS',
				'address' => 'SPS, Col. Buenos Aires, 11 Ave, 4 Calle, frente al IHSS',
			),
			135 => 
			array (
				'id' => 136,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN CORPORACION DINANT SPS',
				'address' => 'Entrada a la Col. Felipe Zelaya, frente a Astro Empaques Sector Rivera Hernández.',
			),
			136 => 
			array (
				'id' => 137,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN DIUNSA SUPERSTORE SPS',
				'address' => 'Edificio Diunsa Shopping Center, en 1era Calle, 11 y 12 Ave, NE',
			),
			137 => 
			array (
				'id' => 138,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN LC LOS ALAMOS SPS',
				'address' => 'Boulevard del norte, entrada a la colonia Los Alamos, frente a Pizza Hut. ',
			),
			138 => 
			array (
				'id' => 139,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN. AGUAS SAN PEDRO PZA CRISTA SPS',
				'address' => 'Bo. El centro, entre 1 y 2 calle, noreste, 8 avenida',
			),
			139 => 
			array (
				'id' => 140,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN PLAZA 105 SPS',
				'address' => 'Blvd. Del Norte Salida hacia Puerto Cortes, Centro Comercial Plaza 105',
			),
			140 => 
			array (
				'id' => 141,
				'departamento_id' => 5,
				'municipio_id' => 73,
				'name' => 'AGN ZIP BUENA VISTA SPS',
				'address' => 'Villanueva, Cortes, Zona industrial de exportacion Buena Vista',
			),
			141 => 
			array (
				'id' => 142,
				'departamento_id' => 5,
				'municipio_id' => 73,
				'name' => 'AGN VILLANUEVA',
				'address' => 'Villanueva, Cortes',
			),
			142 => 
			array (
				'id' => 143,
				'departamento_id' => 5,
				'municipio_id' => 73,
				'name' => 'VTN MANUF. VILLANUEVA VLL',
				'address' => 'Villanueva, Parque Zip Villanueva, edificio #11 ',
			),
			143 => 
			array (
				'id' => 144,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN ZIP VILLANUEVA VLL',
			'address' => 'Parque Industrial Villanueva (Zip Villanueva), Villanueva, Cortés',
			),
			144 => 
			array (
				'id' => 145,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN ZIP VILLANUEVA VLL',
			'address' => 'Parque Industrial Villanueva (Zip Villanueva), Villanueva, Cortés',
			),
			145 => 
			array (
				'id' => 146,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'AGN TELA TLA',
				'address' => 'Calle del Comercio, cuadra y media al oeste del parque central',
			),
			146 => 
			array (
				'id' => 147,
				'departamento_id' => 5,
				'municipio_id' => 63,
				'name' => 'VTN ALCALDIA TELA TLA',
				'address' => 'Alcalía Municipal Tela, Bo. El centro, Frente a Parque Central.',
			),
			147 => 
			array (
				'id' => 148,
				'departamento_id' => 8,
				'municipio_id' => 110,
				'name' => 'AGN PRINCIPAL TGU',
				'address' => 'Edificio Plaza Victoria, Colonia Las Colinas, Blvd. Francia',
			),
			148 => 
			array (
				'id' => 149,
				'departamento_id' => 6,
				'municipio_id' => 75,
				'name' => 'AGN L.C. CHOLUTECA CHT',
				'address' => 'Centro Comercial Plaza del Sur',
			),
			149 => 
			array (
				'id' => 150,
				'departamento_id' => 6,
				'municipio_id' => 75,
				'name' => 'AGN UNIMALL CHT',
				'address' => 'AGN UNIMALL CHT',
			),
			150 => 
			array (
				'id' => 151,
				'departamento_id' => 6,
				'municipio_id' => 75,
				'name' => 'VTN ALCALDIA CHOLUTECA CHT',
				'address' => 'Edificio Alcaldía de Choluteca',
			),
			151 => 
			array (
				'id' => 152,
				'departamento_id' => 6,
				'municipio_id' => 75,
				'name' => 'VTN EMB. LA REYNA CHOLUTECA CHT',
				'address' => 'Instalaciones Embotelladora La Reyna Choluteca',
			),
			152 => 
			array (
				'id' => 153,
				'departamento_id' => 5,
				'municipio_id' => 268,
				'name' => 'VTN LEAR SPS',
				'address' => 'Parque Ind. Lear Corporation, carretera a Occidente Km 22, Naco, Quimistán Sta. Barabara ',
			),
			153 => 
			array (
				'id' => 154,
				'departamento_id' => 17,
				'municipio_id' => 286,
				'name' => 'VTN EMB. LA REYNA SAN LORENZO SLO',
				'address' => 'Embotelladora La Reyna, Carretera Panamericana Km 103, Tres cuadras y media de gasolinera PUMA, desvío Coyolito Barrio Alto Verde, San Lorenzo Valle ',
			),
		));
	}

}
