<?php

use Illuminate\Database\Seeder;

class TradersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('traders')->delete();
        
		\DB::table('traders')->insert(array (
			0 => 
			array (
				'id' => 2,
				'establecimiento_id' => 107,
				'seccion_id' => 18,
				'name' => 'Oscar Fuentes',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 15:03:51',
				'updated_at' => '2015-06-16 15:03:51',
			),
			1 => 
			array (
				'id' => 3,
				'establecimiento_id' => 107,
				'seccion_id' => 23,
				'name' => 'Nixon Palacios',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 15:04:00',
				'updated_at' => '2015-06-16 15:36:33',
			),
			2 => 
			array (
				'id' => 4,
				'establecimiento_id' => 107,
				'seccion_id' => 23,
				'name' => 'Cindy Morales',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 15:08:29',
				'updated_at' => '2015-06-16 15:08:29',
			),
			3 => 
			array (
				'id' => 5,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Nidya Alvarez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 15:33:13',
				'updated_at' => '2015-06-16 15:33:13',
			),
			4 => 
			array (
				'id' => 6,
				'establecimiento_id' => 107,
				'seccion_id' => 18,
				'name' => 'Julio Avila',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 15:54:46',
				'updated_at' => '2015-06-16 15:54:46',
			),
			5 => 
			array (
				'id' => 7,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Karen Flores',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 15:58:43',
				'updated_at' => '2015-06-16 15:58:43',
			),
			6 => 
			array (
				'id' => 8,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Katlin Mejia',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:00:09',
				'updated_at' => '2015-06-16 16:00:09',
			),
			7 => 
			array (
				'id' => 9,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'José Gerardo Gudiel',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:03:17',
				'updated_at' => '2015-06-16 16:03:17',
			),
			8 => 
			array (
				'id' => 10,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Marco Meza',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:06:10',
				'updated_at' => '2015-06-16 16:06:10',
			),
			9 => 
			array (
				'id' => 11,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Gabriela Moncada',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:07:01',
				'updated_at' => '2015-06-16 16:07:01',
			),
			10 => 
			array (
				'id' => 12,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Carlos Ordoñez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:10:28',
				'updated_at' => '2015-06-16 16:10:28',
			),
			11 => 
			array (
				'id' => 13,
				'establecimiento_id' => 107,
				'seccion_id' => 24,
				'name' => 'Yasmin Zavala',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:12:05',
				'updated_at' => '2015-06-16 16:12:05',
			),
			12 => 
			array (
				'id' => 14,
				'establecimiento_id' => 107,
				'seccion_id' => 18,
				'name' => 'Omar Meza',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:14:17',
				'updated_at' => '2015-06-16 16:14:17',
			),
			13 => 
			array (
				'id' => 15,
				'establecimiento_id' => 78,
				'seccion_id' => 5,
				'name' => 'Pablo Euceda',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 16:33:57',
				'updated_at' => '2015-06-16 16:33:57',
			),
			14 => 
			array (
				'id' => 16,
				'establecimiento_id' => 107,
				'seccion_id' => 36,
				'name' => 'Senia Oliva',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:33:55',
				'updated_at' => '2015-06-16 17:34:21',
			),
			15 => 
			array (
				'id' => 17,
				'establecimiento_id' => 107,
				'seccion_id' => 36,
				'name' => 'Ana Flores ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:35:31',
				'updated_at' => '2015-06-16 17:35:31',
			),
			16 => 
			array (
				'id' => 18,
				'establecimiento_id' => 107,
				'seccion_id' => 36,
				'name' => 'Freyer Lazo',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:36:24',
				'updated_at' => '2015-06-16 18:08:25',
			),
			17 => 
			array (
				'id' => 19,
				'establecimiento_id' => 107,
				'seccion_id' => 36,
				'name' => 'Kiss Aplicano',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:37:14',
				'updated_at' => '2015-06-16 17:37:14',
			),
			18 => 
			array (
				'id' => 20,
				'establecimiento_id' => 107,
				'seccion_id' => 36,
				'name' => 'Junior Rodezno',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:38:18',
				'updated_at' => '2015-06-16 17:38:18',
			),
			19 => 
			array (
				'id' => 21,
				'establecimiento_id' => 107,
				'seccion_id' => 36,
				'name' => 'Ricardo Rivera',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:40:18',
				'updated_at' => '2015-06-16 17:40:18',
			),
			20 => 
			array (
				'id' => 22,
				'establecimiento_id' => 107,
				'seccion_id' => 70,
				'name' => 'Jose Marino Espinal',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:56:32',
				'updated_at' => '2015-06-16 17:56:32',
			),
			21 => 
			array (
				'id' => 23,
				'establecimiento_id' => 107,
				'seccion_id' => 70,
				'name' => 'Yessica Nuñez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:57:20',
				'updated_at' => '2015-06-16 17:57:20',
			),
			22 => 
			array (
				'id' => 24,
				'establecimiento_id' => 107,
				'seccion_id' => 70,
				'name' => 'Franklin Hernandez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:57:59',
				'updated_at' => '2015-06-16 17:57:59',
			),
			23 => 
			array (
				'id' => 25,
				'establecimiento_id' => 107,
				'seccion_id' => 70,
				'name' => 'Diana Carolina Lanza',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 17:58:48',
				'updated_at' => '2015-06-16 17:58:48',
			),
			24 => 
			array (
				'id' => 26,
				'establecimiento_id' => 107,
				'seccion_id' => 71,
				'name' => 'Carlos Guevara',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:00:50',
				'updated_at' => '2015-06-16 18:00:50',
			),
			25 => 
			array (
				'id' => 27,
				'establecimiento_id' => 107,
				'seccion_id' => 71,
				'name' => 'Diana Galo',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:01:16',
				'updated_at' => '2015-06-16 18:01:16',
			),
			26 => 
			array (
				'id' => 28,
				'establecimiento_id' => 107,
				'seccion_id' => 39,
				'name' => 'Dickens Aviles',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:02:07',
				'updated_at' => '2015-06-16 18:02:07',
			),
			27 => 
			array (
				'id' => 29,
				'establecimiento_id' => 107,
				'seccion_id' => 39,
				'name' => 'Tony Amaya',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:02:33',
				'updated_at' => '2015-06-16 18:02:33',
			),
			28 => 
			array (
				'id' => 30,
				'establecimiento_id' => 107,
				'seccion_id' => 39,
				'name' => 'Victor Kuri',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:09:33',
				'updated_at' => '2015-06-16 18:09:33',
			),
			29 => 
			array (
				'id' => 31,
				'establecimiento_id' => 107,
				'seccion_id' => 39,
				'name' => 'Yaampier Coello',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:10:25',
				'updated_at' => '2015-06-16 18:10:25',
			),
			30 => 
			array (
				'id' => 32,
				'establecimiento_id' => 107,
				'seccion_id' => 39,
				'name' => 'Roberto Zelaya',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:11:03',
				'updated_at' => '2015-06-16 18:11:03',
			),
			31 => 
			array (
				'id' => 33,
				'establecimiento_id' => 107,
				'seccion_id' => 38,
				'name' => 'Juan Carlos Padilla',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:12:00',
				'updated_at' => '2015-06-16 18:12:00',
			),
			32 => 
			array (
				'id' => 34,
				'establecimiento_id' => 107,
				'seccion_id' => 38,
				'name' => 'Joel Martinez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:12:30',
				'updated_at' => '2015-06-16 18:12:30',
			),
			33 => 
			array (
				'id' => 35,
				'establecimiento_id' => 107,
				'seccion_id' => 38,
				'name' => 'Merlin Perez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:13:34',
				'updated_at' => '2015-06-16 18:13:34',
			),
			34 => 
			array (
				'id' => 36,
				'establecimiento_id' => 107,
				'seccion_id' => 72,
				'name' => 'Adan Salgado',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:14:53',
				'updated_at' => '2015-06-16 18:14:53',
			),
			35 => 
			array (
				'id' => 37,
				'establecimiento_id' => 107,
				'seccion_id' => 72,
				'name' => 'Maryury Garcia',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 18:15:28',
				'updated_at' => '2015-06-16 18:19:51',
			),
			36 => 
			array (
				'id' => 38,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Joaquin Alvarado',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 19:55:04',
				'updated_at' => '2015-06-16 19:55:04',
			),
			37 => 
			array (
				'id' => 39,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Maria Jose Giron',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:49:18',
				'updated_at' => '2015-06-16 20:49:18',
			),
			38 => 
			array (
				'id' => 40,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Cesar Rubio',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:51:37',
				'updated_at' => '2015-06-16 20:51:37',
			),
			39 => 
			array (
				'id' => 41,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Daniela Williams',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:52:40',
				'updated_at' => '2015-06-16 20:52:40',
			),
			40 => 
			array (
				'id' => 42,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Olga Rodriguez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:53:21',
				'updated_at' => '2015-06-16 20:53:21',
			),
			41 => 
			array (
				'id' => 43,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Guillermo Ruiz',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:55:15',
				'updated_at' => '2015-06-16 20:55:15',
			),
			42 => 
			array (
				'id' => 44,
				'establecimiento_id' => 107,
				'seccion_id' => 25,
				'name' => 'Favio Flores',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:55:37',
				'updated_at' => '2015-06-16 20:55:37',
			),
			43 => 
			array (
				'id' => 45,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Jorge Flores',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:56:14',
				'updated_at' => '2015-06-16 20:56:14',
			),
			44 => 
			array (
				'id' => 46,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Julissa Sagastume',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:56:35',
				'updated_at' => '2015-06-16 20:56:35',
			),
			45 => 
			array (
				'id' => 47,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Milton Sabillon',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:56:59',
				'updated_at' => '2015-06-16 20:56:59',
			),
			46 => 
			array (
				'id' => 48,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Edwin Carranza',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:57:26',
				'updated_at' => '2015-06-16 20:57:26',
			),
			47 => 
			array (
				'id' => 49,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Yanin Alvarenga',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:57:50',
				'updated_at' => '2015-06-16 20:57:50',
			),
			48 => 
			array (
				'id' => 50,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Fernando Fortin',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:58:25',
				'updated_at' => '2015-06-16 20:58:25',
			),
			49 => 
			array (
				'id' => 51,
				'establecimiento_id' => 107,
				'seccion_id' => 26,
				'name' => 'Obed Mendoza',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:58:45',
				'updated_at' => '2015-06-16 20:58:45',
			),
			50 => 
			array (
				'id' => 52,
				'establecimiento_id' => 107,
				'seccion_id' => 27,
				'name' => 'Yeni Amaya',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:59:13',
				'updated_at' => '2015-06-16 20:59:13',
			),
			51 => 
			array (
				'id' => 53,
				'establecimiento_id' => 107,
				'seccion_id' => 27,
				'name' => 'Kellyn Herrera',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 20:59:46',
				'updated_at' => '2015-06-16 20:59:46',
			),
			52 => 
			array (
				'id' => 54,
				'establecimiento_id' => 107,
				'seccion_id' => 27,
				'name' => 'Katia Aguilar',
				'userstatus_id' => 1,
				'created_at' => '2015-06-16 21:00:05',
				'updated_at' => '2015-06-16 21:00:05',
			),
			53 => 
			array (
				'id' => 55,
				'establecimiento_id' => 107,
				'seccion_id' => 37,
				'name' => 'Edy Bladimir Martinez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 08:30:57',
				'updated_at' => '2015-06-17 08:30:57',
			),
			54 => 
			array (
				'id' => 56,
				'establecimiento_id' => 22,
				'seccion_id' => 15,
				'name' => 'Yefri Mejia',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 10:28:35',
				'updated_at' => '2015-06-17 10:28:35',
			),
			55 => 
			array (
				'id' => 57,
				'establecimiento_id' => 91,
				'seccion_id' => 5,
				'name' => 'Karla Lobo',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:03:12',
				'updated_at' => '2015-06-17 14:03:12',
			),
			56 => 
			array (
				'id' => 58,
				'establecimiento_id' => 91,
				'seccion_id' => 15,
				'name' => 'Nelson Rodriguez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:07:46',
				'updated_at' => '2015-06-17 14:07:46',
			),
			57 => 
			array (
				'id' => 59,
				'establecimiento_id' => 91,
				'seccion_id' => 11,
				'name' => 'Arely Sauceda',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:09:48',
				'updated_at' => '2015-06-17 14:09:48',
			),
			58 => 
			array (
				'id' => 60,
				'establecimiento_id' => 92,
				'seccion_id' => 15,
				'name' => 'Heydi Tinoco',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:12:11',
				'updated_at' => '2015-06-17 14:12:11',
			),
			59 => 
			array (
				'id' => 61,
				'establecimiento_id' => 78,
				'seccion_id' => 15,
				'name' => 'Roger Urbina',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:22:15',
				'updated_at' => '2015-06-17 14:22:15',
			),
			60 => 
			array (
				'id' => 62,
				'establecimiento_id' => 78,
				'seccion_id' => 73,
				'name' => 'Cinthia Andrade',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:33:59',
				'updated_at' => '2015-06-17 14:33:59',
			),
			61 => 
			array (
				'id' => 63,
				'establecimiento_id' => 78,
				'seccion_id' => 73,
				'name' => 'Alberto Colindres',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:35:15',
				'updated_at' => '2015-06-17 14:35:15',
			),
			62 => 
			array (
				'id' => 64,
				'establecimiento_id' => 78,
				'seccion_id' => 11,
				'name' => 'Gustavo Villatoro',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:37:02',
				'updated_at' => '2015-06-17 15:46:58',
			),
			63 => 
			array (
				'id' => 65,
				'establecimiento_id' => 78,
				'seccion_id' => 11,
				'name' => 'Ronald Sanchez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:37:56',
				'updated_at' => '2015-06-17 15:50:06',
			),
			64 => 
			array (
				'id' => 66,
				'establecimiento_id' => 161,
				'seccion_id' => 15,
				'name' => 'Belkis Canelas',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:38:59',
				'updated_at' => '2015-06-17 15:29:21',
			),
			65 => 
			array (
				'id' => 67,
				'establecimiento_id' => 161,
				'seccion_id' => 15,
				'name' => 'Claudia Caceres',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:39:59',
				'updated_at' => '2015-06-17 15:31:13',
			),
			66 => 
			array (
				'id' => 68,
				'establecimiento_id' => 81,
				'seccion_id' => 15,
				'name' => 'Marcela Sierra',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 14:44:47',
				'updated_at' => '2015-06-17 15:49:01',
			),
			67 => 
			array (
				'id' => 69,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Marcelo Hernandez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:27:55',
				'updated_at' => '2015-06-17 20:27:55',
			),
			68 => 
			array (
				'id' => 70,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Monica Zepeda',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:28:45',
				'updated_at' => '2015-06-17 20:28:45',
			),
			69 => 
			array (
				'id' => 71,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Jorge Fonseca',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:29:33',
				'updated_at' => '2015-06-17 20:29:33',
			),
			70 => 
			array (
				'id' => 72,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Lilian Vallecillo',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:30:08',
				'updated_at' => '2015-06-17 20:30:08',
			),
			71 => 
			array (
				'id' => 73,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Lideny Moncada',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:31:26',
				'updated_at' => '2015-06-17 20:31:26',
			),
			72 => 
			array (
				'id' => 74,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Juan J Matamoros',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:31:55',
				'updated_at' => '2015-06-17 20:31:55',
			),
			73 => 
			array (
				'id' => 75,
				'establecimiento_id' => 107,
				'seccion_id' => 33,
				'name' => 'Guadalupe Espino',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:32:35',
				'updated_at' => '2015-06-17 20:32:35',
			),
			74 => 
			array (
				'id' => 76,
				'establecimiento_id' => 107,
				'seccion_id' => 56,
				'name' => 'Bessy Pavon',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:33:23',
				'updated_at' => '2015-06-17 20:34:30',
			),
			75 => 
			array (
				'id' => 77,
				'establecimiento_id' => 107,
				'seccion_id' => 56,
				'name' => 'Sindy Soriano',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:33:58',
				'updated_at' => '2015-06-17 20:33:58',
			),
			76 => 
			array (
				'id' => 78,
				'establecimiento_id' => 107,
				'seccion_id' => 82,
				'name' => 'Eduardo Nelson',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:36:47',
				'updated_at' => '2015-06-17 20:36:47',
			),
			77 => 
			array (
				'id' => 79,
				'establecimiento_id' => 107,
				'seccion_id' => 83,
				'name' => 'Blanca Trinidad',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:46:55',
				'updated_at' => '2015-06-17 20:46:55',
			),
			78 => 
			array (
				'id' => 80,
				'establecimiento_id' => 107,
				'seccion_id' => 46,
				'name' => 'Jose Alvarenga',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:47:22',
				'updated_at' => '2015-06-17 20:47:22',
			),
			79 => 
			array (
				'id' => 81,
				'establecimiento_id' => 107,
				'seccion_id' => 46,
				'name' => 'Ricardo Ventura',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:50:44',
				'updated_at' => '2015-06-17 20:51:23',
			),
			80 => 
			array (
				'id' => 82,
				'establecimiento_id' => 107,
				'seccion_id' => 84,
				'name' => 'Yennifer Alvarado',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:51:59',
				'updated_at' => '2015-06-17 20:51:59',
			),
			81 => 
			array (
				'id' => 83,
				'establecimiento_id' => 107,
				'seccion_id' => 84,
				'name' => 'Elizabeth Godoy',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:52:21',
				'updated_at' => '2015-06-17 20:52:21',
			),
			82 => 
			array (
				'id' => 84,
				'establecimiento_id' => 107,
				'seccion_id' => 84,
				'name' => 'Marcela Hernandez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:53:21',
				'updated_at' => '2015-06-17 20:53:21',
			),
			83 => 
			array (
				'id' => 85,
				'establecimiento_id' => 107,
				'seccion_id' => 84,
				'name' => 'Mildred Lagos',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 20:53:42',
				'updated_at' => '2015-06-17 20:53:42',
			),
			84 => 
			array (
				'id' => 86,
				'establecimiento_id' => 22,
				'seccion_id' => 85,
				'name' => 'Jorge Fransua Padilla Aleman',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 21:04:40',
				'updated_at' => '2015-06-17 21:04:40',
			),
			85 => 
			array (
				'id' => 87,
				'establecimiento_id' => 22,
				'seccion_id' => 85,
				'name' => 'Ivys Josue Hernandez Flores',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 21:05:23',
				'updated_at' => '2015-06-17 21:05:23',
			),
			86 => 
			array (
				'id' => 88,
				'establecimiento_id' => 22,
				'seccion_id' => 86,
				'name' => 'Osmin David Ortiz Perez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 21:06:57',
				'updated_at' => '2015-06-17 21:06:57',
			),
			87 => 
			array (
				'id' => 89,
				'establecimiento_id' => 107,
				'seccion_id' => 86,
				'name' => 'Walter Javier Cruz Aguilar',
				'userstatus_id' => 1,
				'created_at' => '2015-06-17 21:09:03',
				'updated_at' => '2015-06-17 21:09:03',
			),
			88 => 
			array (
				'id' => 90,
				'establecimiento_id' => 163,
				'seccion_id' => 40,
				'name' => 'GERARDO L.TORRES',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 06:25:50',
				'updated_at' => '2015-06-19 06:25:50',
			),
			89 => 
			array (
				'id' => 91,
				'establecimiento_id' => 55,
				'seccion_id' => 5,
				'name' => 'MARIA ELENA AMAYA',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:27:51',
				'updated_at' => '2015-06-19 09:27:51',
			),
			90 => 
			array (
				'id' => 92,
				'establecimiento_id' => 55,
				'seccion_id' => 11,
				'name' => 'REYNA HERNANDEZ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:28:53',
				'updated_at' => '2015-06-19 09:28:53',
			),
			91 => 
			array (
				'id' => 93,
				'establecimiento_id' => 55,
				'seccion_id' => 15,
				'name' => 'MELVIN GUARDADO',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:31:04',
				'updated_at' => '2015-06-19 09:31:04',
			),
			92 => 
			array (
				'id' => 94,
				'establecimiento_id' => 55,
				'seccion_id' => 10,
				'name' => 'BERTHA DUEÑAS',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:32:19',
				'updated_at' => '2015-06-19 09:32:19',
			),
			93 => 
			array (
				'id' => 95,
				'establecimiento_id' => 56,
				'seccion_id' => 15,
				'name' => 'LEANDRO LINARES',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:33:46',
				'updated_at' => '2015-06-19 09:33:46',
			),
			94 => 
			array (
				'id' => 96,
				'establecimiento_id' => 57,
				'seccion_id' => 11,
				'name' => 'JUAN DAMAS',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:35:30',
				'updated_at' => '2015-06-19 09:35:30',
			),
			95 => 
			array (
				'id' => 97,
				'establecimiento_id' => 57,
				'seccion_id' => 15,
				'name' => 'MARIO FUNEZ ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:36:22',
				'updated_at' => '2015-06-19 09:36:22',
			),
			96 => 
			array (
				'id' => 98,
				'establecimiento_id' => 163,
				'seccion_id' => 5,
				'name' => 'JORGE ALBERTO CACERES INESTROZA',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:39:15',
				'updated_at' => '2015-06-19 09:39:15',
			),
			97 => 
			array (
				'id' => 99,
				'establecimiento_id' => 163,
				'seccion_id' => 11,
				'name' => 'KEVIN ALEXANDER GALO SORIANO',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:41:42',
				'updated_at' => '2015-06-19 09:41:42',
			),
			98 => 
			array (
				'id' => 100,
				'establecimiento_id' => 163,
				'seccion_id' => 9,
				'name' => 'IVAN FUNEZ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:42:27',
				'updated_at' => '2015-06-19 09:42:27',
			),
			99 => 
			array (
				'id' => 101,
				'establecimiento_id' => 163,
				'seccion_id' => 11,
				'name' => 'WERNER MANACES PAZ ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:43:18',
				'updated_at' => '2015-06-19 09:43:18',
			),
			100 => 
			array (
				'id' => 102,
				'establecimiento_id' => 163,
				'seccion_id' => 11,
				'name' => 'MARVIN BELIZ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-19 09:44:23',
				'updated_at' => '2015-06-19 09:44:23',
			),
			101 => 
			array (
				'id' => 103,
				'establecimiento_id' => 22,
				'seccion_id' => 37,
				'name' => 'IVYS JOSUE HERNANDEZ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-20 14:42:33',
				'updated_at' => '2015-06-20 14:42:33',
			),
			102 => 
			array (
				'id' => 104,
				'establecimiento_id' => 66,
				'seccion_id' => 5,
				'name' => 'LISSANDRA LAGOS',
				'userstatus_id' => 1,
				'created_at' => '2015-06-22 17:37:36',
				'updated_at' => '2015-06-22 17:37:36',
			),
			103 => 
			array (
				'id' => 105,
				'establecimiento_id' => 69,
				'seccion_id' => 11,
				'name' => 'ERIKA BONILLA',
				'userstatus_id' => 1,
				'created_at' => '2015-06-23 15:52:28',
				'updated_at' => '2015-06-23 15:52:28',
			),
			104 => 
			array (
				'id' => 106,
				'establecimiento_id' => 107,
				'seccion_id' => 7,
				'name' => 'Persona prueba',
				'userstatus_id' => 1,
				'created_at' => '2015-06-25 09:38:51',
				'updated_at' => '2015-06-25 09:38:51',
			),
			105 => 
			array (
				'id' => 107,
				'establecimiento_id' => 162,
				'seccion_id' => 7,
				'name' => 'Danery prueba',
				'userstatus_id' => 1,
				'created_at' => '2015-06-25 11:16:36',
				'updated_at' => '2015-06-25 11:16:36',
			),
			106 => 
			array (
				'id' => 108,
				'establecimiento_id' => 90,
				'seccion_id' => 7,
				'name' => 'prueba 001',
				'userstatus_id' => 1,
				'created_at' => '2015-06-25 15:17:07',
				'updated_at' => '2015-06-25 15:17:07',
			),
			107 => 
			array (
				'id' => 109,
				'establecimiento_id' => 169,
				'seccion_id' => 34,
				'name' => 'Geylin Alvarado ',
				'userstatus_id' => 1,
				'created_at' => '2015-06-26 10:07:56',
				'updated_at' => '2015-06-26 10:07:56',
			),
			108 => 
			array (
				'id' => 110,
				'establecimiento_id' => 170,
				'seccion_id' => 9,
				'name' => 'Martin Perez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-26 15:10:36',
				'updated_at' => '2015-06-26 15:10:36',
			),
			109 => 
			array (
				'id' => 111,
				'establecimiento_id' => 172,
				'seccion_id' => 16,
				'name' => 'Migel aguilar',
				'userstatus_id' => 1,
				'created_at' => '2015-06-27 10:44:07',
				'updated_at' => '2015-06-27 10:48:44',
			),
			110 => 
			array (
				'id' => 112,
				'establecimiento_id' => 57,
				'seccion_id' => 11,
				'name' => 'Ivan Damas',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:22:09',
				'updated_at' => '2015-06-28 11:22:09',
			),
			111 => 
			array (
				'id' => 113,
				'establecimiento_id' => 54,
				'seccion_id' => 5,
				'name' => 'Lidia Suyapa Salgado',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:25:12',
				'updated_at' => '2015-06-28 11:25:12',
			),
			112 => 
			array (
				'id' => 114,
				'establecimiento_id' => 54,
				'seccion_id' => 11,
				'name' => 'Flor Alvarado',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:29:21',
				'updated_at' => '2015-06-28 11:29:21',
			),
			113 => 
			array (
				'id' => 115,
				'establecimiento_id' => 54,
				'seccion_id' => 15,
				'name' => 'Anabel Mendoza Alvarez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:33:35',
				'updated_at' => '2015-06-28 11:33:35',
			),
			114 => 
			array (
				'id' => 116,
				'establecimiento_id' => 54,
				'seccion_id' => 91,
				'name' => 'Seleny Varela',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:34:57',
				'updated_at' => '2015-06-28 11:34:57',
			),
			115 => 
			array (
				'id' => 117,
				'establecimiento_id' => 54,
				'seccion_id' => 91,
				'name' => 'Ingris Patricia Cruz',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:36:07',
				'updated_at' => '2015-06-28 11:36:07',
			),
			116 => 
			array (
				'id' => 118,
				'establecimiento_id' => 54,
				'seccion_id' => 91,
				'name' => 'Marlen Valencia',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:37:05',
				'updated_at' => '2015-06-28 11:37:05',
			),
			117 => 
			array (
				'id' => 119,
				'establecimiento_id' => 54,
				'seccion_id' => 73,
				'name' => 'Yolanda Ortiz',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:38:04',
				'updated_at' => '2015-06-28 11:38:04',
			),
			118 => 
			array (
				'id' => 120,
				'establecimiento_id' => 54,
				'seccion_id' => 34,
				'name' => 'Alejandro Neptali Ortiz',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:39:24',
				'updated_at' => '2015-06-28 11:39:24',
			),
			119 => 
			array (
				'id' => 121,
				'establecimiento_id' => 54,
				'seccion_id' => 13,
				'name' => 'Zunny Rodriguez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 11:40:48',
				'updated_at' => '2015-06-28 11:40:48',
			),
			120 => 
			array (
				'id' => 122,
				'establecimiento_id' => 54,
				'seccion_id' => 17,
				'name' => 'Mario Duarte',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 12:05:14',
				'updated_at' => '2015-06-28 12:05:14',
			),
			121 => 
			array (
				'id' => 123,
				'establecimiento_id' => 54,
				'seccion_id' => 31,
				'name' => 'Marione Abularach',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 12:09:46',
				'updated_at' => '2015-06-28 12:09:46',
			),
			122 => 
			array (
				'id' => 124,
				'establecimiento_id' => 54,
				'seccion_id' => 31,
				'name' => 'Oscar Ruiz',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 12:12:44',
				'updated_at' => '2015-06-28 12:12:44',
			),
			123 => 
			array (
				'id' => 125,
				'establecimiento_id' => 55,
				'seccion_id' => 9,
				'name' => 'Amelia Borjas',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 12:14:16',
				'updated_at' => '2015-06-28 12:14:16',
			),
			124 => 
			array (
				'id' => 126,
				'establecimiento_id' => 76,
				'seccion_id' => 73,
				'name' => 'Edgar Carranza',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 12:15:50',
				'updated_at' => '2015-06-28 12:15:50',
			),
			125 => 
			array (
				'id' => 127,
				'establecimiento_id' => 76,
				'seccion_id' => 91,
				'name' => 'Daniel Vasquez',
				'userstatus_id' => 1,
				'created_at' => '2015-06-28 12:16:32',
				'updated_at' => '2015-06-28 12:16:32',
			),
		));
	}

}
