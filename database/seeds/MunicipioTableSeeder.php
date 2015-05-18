<?php
/**
 * Created by PhpStorm.
 * User: ajax
 * Date: 02-16-15
 * Time: 02:01 AM
 */
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Municipio;

class MunicipioTableSeeder extends Seeder {
	public function run()
	{
		DB::table('municipios')->delete();

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'La Ceiba'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'El Porvenir'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'Tela'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'Jutiapa'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'La Masica'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'San Francisco'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'Arizona'
		]);

		Municipio::create([
			'departamentos_id' => 1,
			'municipio' => 'Esparta'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Trujillo'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Balfante'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Iriona'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Limón'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Sabá'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Santa Fe'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Santa Rosa de Aguán'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Sonaguera'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Tocoa'
		]);

		Municipio::create([
			'departamentos_id' => 2,
			'municipio' => 'Bonito Orienta'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Comayagua'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Ajuterique'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'El Rosario'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Esquías'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Humuya'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'La Libertad'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Lamaní'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'La Trinidad'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Lejamani'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Meambar'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Minas de Oro'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Ojo de Agua'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'San Jerónimo'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'San José de Comayagua'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'San José de Potrero'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'San Luis'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'San Sebastian'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Siguatepeque'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Villa de San Antonio'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Las Lajas'
		]);

		Municipio::create([
			'departamentos_id' => 3,
			'municipio' => 'Taulabé'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Santa Rosa de Copán'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Cabañas'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Concepción'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Copán Ruinas'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Corquín'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Cucuyagua'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Dolores'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Dulce Nombre'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'El Paraíso'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Florida'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'La Jigua'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'La Unión'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Nueva Arcadia'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San Agustin'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San Antonio'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San Jerónimo'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San José'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San Juan de Opoa'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San Nicolás'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'San Pedro'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Santa Rita'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Trinidad de Copán'
		]);

		Municipio::create([
			'departamentos_id' => 4,
			'municipio' => 'Veracruz'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'San Pedro Sula'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Choloma'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Omoa'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Pimienta'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Potrerillos'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Puerto Cortéz'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'San Antonio de Cortéz'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'San Francisco de Yojoa'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'San Manuel'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Santa Cruz de Yojoa'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'Villanueva'
		]);

		Municipio::create([
			'departamentos_id' => 5,
			'municipio' => 'La Lima'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Choluteca'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Apacilagua'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Concepción de Maria'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Duyere'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'El Corpus'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'El Triunfo'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Marcovia'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Morolica'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Namasigue'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Orocuina'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Pespire'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'San Antonio de Flores'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'San Isidro'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'San José'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'San Marcos de Colón'
		]);

		Municipio::create([
			'departamentos_id' => 6,
			'municipio' => 'Santa Ana de Yusguare'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Yuscarán'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Alauca'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Danlí'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'El Paraíso'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Guinope'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Jacaleapa'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Liure'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Morocelí'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Oropolí'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Potrerillos'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'San Antonio de Flores'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'San Lucas'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'San Matías'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Soledad'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Teupacenti'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Texiguat'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Vado Ancho'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Yauyupe'
		]);

		Municipio::create([
			'departamentos_id' => 7,
			'municipio' => 'Trojes'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Tegucigalpa'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Alubarén'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Cedros'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Curarén'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'El Porvenir'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Guaimaca'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'La Libertad'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'La Venta'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Lepaterique'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Maraita'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Marale'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Nueva Armenia'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Ojojona'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Orica'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Reitoca'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Sabanagrande'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'San Antonio de Oriente'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'San Buenaventura'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'San Ignacio'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'San Juan de Flores'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'San Miguelito'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Santa Ana'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Santa Lucia'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Talanga'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Tatumbla'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Valle de Angeles'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Villa de San Francisco'
		]);

		Municipio::create([
			'departamentos_id' => 8,
			'municipio' => 'Vallecillo'
		]);

		Municipio::create([
			'departamentos_id' => 9,
			'municipio' => 'Puerto Lempira'
		]);

		Municipio::create([
			'departamentos_id' => 9,
			'municipio' => 'Brus Laguna'
		]);

		Municipio::create([
			'departamentos_id' => 9,
			'municipio' => 'Ahuas'
		]);

		Municipio::create([
			'departamentos_id' => 9,
			'municipio' => 'Juan Francisco Bulnes'
		]);

		Municipio::create([
			'departamentos_id' => 9,
			'municipio' => 'Ramón Villeda Morales'
		]);

		Municipio::create([
			'departamentos_id' => 9,
			'municipio' => 'Wampusirpe'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'La Esperanza'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Camsca'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Colomoncagua'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Concepción'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Dolores'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Intibucá'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Jesús de Otoro'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Magdalena'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Masaguara'
		]);


		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'San Antonio'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'San Isidro'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'San Juan'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'San Marcos de la Sierra'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'San Miguel Guancapla'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Santa Lucía'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'Yamaranguila'
		]);

		Municipio::create([
			'departamentos_id' => 10,
			'municipio' => 'San Francisco de Opalaca'
		]);

		Municipio::create([
			'departamentos_id' => 11,
			'municipio' => 'Roatán'
		]);

		Municipio::create([
			'departamentos_id' => 11,
			'municipio' => 'Guanaja'
		]);

		Municipio::create([
			'departamentos_id' => 11,
			'municipio' => 'José Santos Guardiola'
		]);

		Municipio::create([
			'departamentos_id' => 11,
			'municipio' => 'Utila'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'La Paz'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Aguanqueterque'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Cabañas'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Cane'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Chinacla'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Guajiquiro'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Lauterique'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Marcala'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Mercedes de Oriente'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Opatoro'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'San Antonio del Norte'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'San José'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'San Juan'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'San Pedro de Tutule'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Santa Ana'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Santa Elena'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Santa María'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Santiago de Puringla'
		]);

		Municipio::create([
			'departamentos_id' => 12,
			'municipio' => 'Yarula'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Gracias'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Belén'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Candelaria'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Cololaca'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Erandique'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Gualcince'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Guarita'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'La Campa'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'La Iguala'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Las Flores'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'La Union'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'La Virtud'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Lepaera'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Mapulaca'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Piraera'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Andrés'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Francisco'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Juan Guarita'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Manuel Colohente'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Rafael'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Sebastián'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Santa Cruz'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Talgua'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Tambla'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Tomalá'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Valladolid'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'Virginia'
		]);

		Municipio::create([
			'departamentos_id' => 13,
			'municipio' => 'San Marcos de Coiquín'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Ocotepeque'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Belén Gualcho'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Concepción'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Dolores Merendón'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Fraternidad'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'La Encarnación'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'La Labor'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Lucerna'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Mercedes'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'San Fernando'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'San Francisco del Valle'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'San Jorge'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'San Marcos'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Santa Fé'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Sensenti'
		]);

		Municipio::create([
			'departamentos_id' => 14,
			'municipio' => 'Sinuapa'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Juticalpa'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Campamento'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Catacamas'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Concordia'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Dulce Nombre de Culmin'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'El Rosario'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Esquipulas del Norte'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Gualaco'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Guarizama'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Guata'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Jano'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'La Unión'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Manguelile'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Manto'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Salamá'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'San Esteban'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'San Francisco de Becerra'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'San Francisco de la paz'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Santa María del Real'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Silca'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Yocón'
		]);

		Municipio::create([
			'departamentos_id' => 15,
			'municipio' => 'Patuca'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Santa Bárbara'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Arada'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Atima'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Azacualpa'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Ceguaca'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Consepción del Norte'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Consepción del Sur'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Chinda'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'El Nispero'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Gualala'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'LLama'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Las Vegas'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Macuelizo'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Naranjito'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Nuevo Celilac'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Nueva Frontera'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Petoa'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Protección'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Quimistán'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San Fransisco de Ojuera'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San José de las Colinas'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San Luis'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San Marcos'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San Nicolás'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San Pedro de Zacapa'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'San Vicente Centenario'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Santa Rita'
		]);

		Municipio::create([
			'departamentos_id' => 16,
			'municipio' => 'Trinidad'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Nacaome'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Alianza'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Amapala'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Aramecina'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Caridad'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Goascorán'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'Langue'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'San Francisco de Coray'
		]);

		Municipio::create([
			'departamentos_id' => 17,
			'municipio' => 'San Lorenzo'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Yoro'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Arenal'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'El Negrito'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'EL Progreso'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Jocón'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Morazán'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Olanchito'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Santa Rita'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Sulaco'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Victoria'
		]);

		Municipio::create([
			'departamentos_id' => 18,
			'municipio' => 'Yorito'
		]);

	}
}