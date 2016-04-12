<?php

use Illuminate\Database\Seeder;

class ShipmentsTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('shipments')->delete();

		\DB::table('shipments')->insert([
			0 =>
				[
				'id' => 1,
				'code' => 10000001,
				'sender_id' => 6,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
					'estado_id' => 2,
				'description' => 'Nada en particular',
				'created_at' => '2015-06-04 09:07:06',
				'updated_at' => '2015-06-04 09:07:06',
				],
			1 =>
				[
				'id' => 2,
				'code' => 10000002,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-04 09:07:56',
				'updated_at' => '2015-06-04 09:07:56',
				],
			2 =>
				[
				'id' => 3,
				'code' => 10000003,
				'sender_id' => 7,
				'reciber_id' => 6,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-04 09:09:16',
				'updated_at' => '2015-06-08 21:16:40',
				],
			3 =>
				[
				'id' => 4,
				'code' => 89562352,
				'sender_id' => 4,
				'reciber_id' => 2,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => 'Paquete',
				'created_at' => '2015-06-09 20:21:33',
				'updated_at' => '2015-06-09 20:21:33',
				],
			4 =>
				[
				'id' => 5,
				'code' => 98875450,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Paquete mojado',
				'created_at' => '2015-06-09 20:37:24',
				'updated_at' => '2015-06-09 22:25:50',
				],
			5 =>
				[
				'id' => 6,
				'code' => 98875429,
				'sender_id' => 7,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
					'estado_id' => 2,
				'description' => 'Viene abierto',
				'created_at' => '2015-06-09 20:41:45',
				'updated_at' => '2015-06-09 23:32:05',
				],
			6 =>
				[
				'id' => 7,
				'code' => 78561250,
				'sender_id' => 1,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Paquete sin sello',
				'created_at' => '2015-06-09 20:50:02',
				'updated_at' => '2015-06-09 20:50:02',
				],
			7 =>
				[
				'id' => 8,
				'code' => 302632482,
				'sender_id' => 1,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'prueba de creacio de numeroacion o numeros de GUIA',
				'created_at' => '2015-06-09 23:55:41',
				'updated_at' => '2015-06-10 00:39:14',
				],
			8 =>
				[
				'id' => 9,
				'code' => 856204812,
				'sender_id' => 2,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'prueba 2 con numero de guia generado',
				'created_at' => '2015-06-10 00:40:37',
				'updated_at' => '2015-06-10 00:40:37',
				],
			9 =>
				[
				'id' => 10,
				'code' => 890058516,
				'sender_id' => 10,
				'reciber_id' => 6,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => 'prueba de envio a la misma persona que envia ',
				'created_at' => '2015-06-10 01:52:58',
				'updated_at' => '2015-06-10 01:52:58',
				],
			10 =>
				[
				'id' => 11,
				'code' => 322384937,
				'sender_id' => 11,
				'reciber_id' => 6,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => 'Pruebas con otros usuarios de unidos Express Karen Janeth',
				'created_at' => '2015-06-10 02:11:02',
				'updated_at' => '2015-06-10 13:34:35',
				],
			11 =>
				[
				'id' => 12,
				'code' => 796546721,
				'sender_id' => 6,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Pruebas con usuarios de ue',
				'created_at' => '2015-06-10 13:19:35',
				'updated_at' => '2015-06-10 13:19:35',
				],
			12 =>
				[
				'id' => 13,
				'code' => 720432447,
				'sender_id' => 3,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
					'estado_id' => 2,
				'description' => 'Manila bien esta ado',
				'created_at' => '2015-06-10 13:39:01',
				'updated_at' => '2015-06-10 13:39:01',
				],
			13 =>
				[
				'id' => 14,
				'code' => 36985470,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 14:09:54',
				'updated_at' => '2015-06-10 14:09:54',
				],
			14 =>
				[
				'id' => 15,
				'code' => 98732159,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Paquete rallado',
				'created_at' => '2015-06-10 14:23:35',
				'updated_at' => '2015-06-10 14:23:35',
				],
			15 =>
				[
				'id' => 16,
				'code' => 32659849,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 14:25:39',
				'updated_at' => '2015-06-10 14:25:39',
				],
			16 =>
				[
				'id' => 17,
				'code' => 85891463,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 14:39:43',
				'updated_at' => '2015-06-10 14:39:43',
				],
			17 =>
				[
				'id' => 18,
				'code' => 33889979,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Paquete mojado',
				'created_at' => '2015-06-10 14:41:55',
				'updated_at' => '2015-06-10 14:41:55',
				],
			18 =>
				[
				'id' => 19,
				'code' => 89565421,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:02:34',
				'updated_at' => '2015-06-10 15:02:34',
				],
			19 =>
				[
				'id' => 20,
				'code' => 98643103,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:08:05',
				'updated_at' => '2015-06-10 15:08:05',
				],
			20 =>
				[
				'id' => 21,
				'code' => 36749850,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:08:57',
				'updated_at' => '2015-06-10 15:08:57',
				],
			21 =>
				[
				'id' => 22,
				'code' => 98653218,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:19:16',
				'updated_at' => '2015-06-10 15:19:16',
				],
			22 =>
				[
				'id' => 23,
				'code' => 63928143,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:20:39',
				'updated_at' => '2015-06-10 15:20:39',
				],
			23 =>
				[
				'id' => 24,
				'code' => 33552248,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:40:08',
				'updated_at' => '2015-06-10 15:40:08',
				],
			24 =>
				[
				'id' => 25,
				'code' => 66993384,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:42:31',
				'updated_at' => '2015-06-10 15:42:31',
				],
			25 =>
				[
				'id' => 26,
				'code' => 11998839,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:45:52',
				'updated_at' => '2015-06-10 15:45:52',
				],
			26 =>
				[
				'id' => 27,
				'code' => 56451207,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:51:31',
				'updated_at' => '2015-06-10 15:51:31',
				],
			27 =>
				[
				'id' => 28,
				'code' => 65983249,
				'sender_id' => 12,
				'reciber_id' => 7,
				'reciber_seccion' => 6,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:54:52',
				'updated_at' => '2015-06-10 15:54:52',
				],
			28 =>
				[
				'id' => 29,
				'code' => 98756544,
				'sender_id' => 6,
				'reciber_id' => 2,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => 'Ingresi con codigo debarras',
				'created_at' => '2015-06-10 15:56:39',
				'updated_at' => '2015-06-10 15:56:39',
				],
			29 =>
				[
				'id' => 30,
				'code' => 78945623,
				'sender_id' => 12,
				'reciber_id' => 3,
				'reciber_seccion' => 8,
					'estado_id' => 2,
				'description' => 'Producto no allegado',
				'created_at' => '2015-06-10 15:57:15',
				'updated_at' => '2015-06-10 15:57:15',
				],
			30 =>
				[
				'id' => 31,
				'code' => 33998855,
				'sender_id' => 9,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigo de barras',
				'created_at' => '2015-06-10 15:57:53',
				'updated_at' => '2015-06-10 15:57:53',
				],
			31 =>
				[
				'id' => 32,
				'code' => 39856470,
				'sender_id' => 10,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigo de barras',
				'created_at' => '2015-06-10 15:58:36',
				'updated_at' => '2015-06-10 15:58:36',
				],
			32 =>
				[
				'id' => 33,
				'code' => 12365876,
				'sender_id' => 9,
				'reciber_id' => 12,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigodebarras',
				'created_at' => '2015-06-10 15:59:27',
				'updated_at' => '2015-06-10 15:59:27',
				],
			33 =>
				[
				'id' => 34,
				'code' => 19854236,
				'sender_id' => 12,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 15:59:48',
				'updated_at' => '2015-06-10 15:59:48',
				],
			34 =>
				[
				'id' => 35,
				'code' => 23564510,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:02:20',
				'updated_at' => '2015-06-10 16:02:20',
				],
			35 =>
				[
				'id' => 36,
				'code' => 56982343,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:04:07',
				'updated_at' => '2015-06-10 16:04:07',
				],
			36 =>
				[
				'id' => 37,
				'code' => 19875422,
				'sender_id' => 4,
				'reciber_id' => 7,
				'reciber_seccion' => 6,
					'estado_id' => 2,
				'description' => 'Mismomanda mismo recibe',
				'created_at' => '2015-06-10 16:04:32',
				'updated_at' => '2015-06-10 16:04:32',
				],
			37 =>
				[
				'id' => 38,
				'code' => 13468521,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:05:28',
				'updated_at' => '2015-06-10 16:05:28',
				],
			38 =>
				[
				'id' => 39,
				'code' => 12345649,
				'sender_id' => 6,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigo',
				'created_at' => '2015-06-10 16:06:11',
				'updated_at' => '2015-06-10 16:06:11',
				],
			39 =>
				[
				'id' => 40,
				'code' => 97643159,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:07:01',
				'updated_at' => '2015-06-10 16:07:01',
				],
			40 =>
				[
				'id' => 41,
				'code' => 36987580,
				'sender_id' => 9,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigo dificil',
				'created_at' => '2015-06-10 16:07:58',
				'updated_at' => '2015-06-10 16:07:58',
				],
			41 =>
				[
				'id' => 42,
				'code' => 12457892,
				'sender_id' => 11,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigo',
				'created_at' => '2015-06-10 16:08:45',
				'updated_at' => '2015-06-10 16:08:45',
				],
			42 =>
				[
				'id' => 43,
				'code' => 28769439,
				'sender_id' => 3,
				'reciber_id' => 12,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Codigo',
				'created_at' => '2015-06-10 16:09:23',
				'updated_at' => '2015-06-10 16:09:23',
				],
			43 =>
				[
				'id' => 44,
				'code' => 64973166,
				'sender_id' => 12,
				'reciber_id' => 1,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:16:31',
				'updated_at' => '2015-06-10 16:16:31',
				],
			44 =>
				[
				'id' => 45,
				'code' => 82947569,
				'sender_id' => 3,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
					'estado_id' => 2,
				'description' => 'Codigo facil',
				'created_at' => '2015-06-10 16:18:06',
				'updated_at' => '2015-06-10 16:18:06',
				],
			45 =>
				[
				'id' => 46,
				'code' => 66887737,
				'sender_id' => 12,
				'reciber_id' => 8,
				'reciber_seccion' => 3,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:18:47',
				'updated_at' => '2015-06-10 16:18:47',
				],
			46 =>
				[
				'id' => 47,
				'code' => 66998853,
				'sender_id' => 12,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:22:19',
				'updated_at' => '2015-06-10 16:22:19',
				],
			47 =>
				[
				'id' => 48,
				'code' => 98785421,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:34:00',
				'updated_at' => '2015-06-10 16:34:00',
				],
			48 =>
				[
				'id' => 49,
				'code' => 69874215,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:39:03',
				'updated_at' => '2015-06-10 16:39:03',
				],
			49 =>
				[
				'id' => 50,
				'code' => 98543212,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:40:02',
				'updated_at' => '2015-06-10 16:40:02',
				],
			50 =>
				[
				'id' => 51,
				'code' => 23857131,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:43:25',
				'updated_at' => '2015-06-10 16:43:25',
				],
			51 =>
				[
				'id' => 52,
				'code' => 96385326,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:44:12',
				'updated_at' => '2015-06-10 16:44:12',
				],
			52 =>
				[
				'id' => 53,
				'code' => 22885517,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:45:12',
				'updated_at' => '2015-06-10 16:45:12',
				],
			53 =>
				[
				'id' => 54,
				'code' => 98745845,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 16:46:14',
				'updated_at' => '2015-06-10 16:46:14',
				],
			54 =>
				[
				'id' => 55,
				'code' => 33524870,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:28:50',
				'updated_at' => '2015-06-10 17:28:50',
				],
			55 =>
				[
				'id' => 56,
				'code' => 22887795,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:30:01',
				'updated_at' => '2015-06-10 17:30:01',
				],
			56 =>
				[
				'id' => 57,
				'code' => 98732418,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:30:58',
				'updated_at' => '2015-06-10 17:30:58',
				],
			57 =>
				[
				'id' => 58,
				'code' => 99885526,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:33:25',
				'updated_at' => '2015-06-10 17:33:25',
				],
			58 =>
				[
				'id' => 59,
				'code' => 33882277,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:34:28',
				'updated_at' => '2015-06-10 17:34:28',
				],
			59 =>
				[
				'id' => 60,
				'code' => 99996857,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:36:29',
				'updated_at' => '2015-06-10 17:36:29',
				],
			60 =>
				[
				'id' => 61,
				'code' => 23468597,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:39:17',
				'updated_at' => '2015-06-10 17:39:17',
				],
			61 =>
				[
				'id' => 62,
				'code' => 89236482,
				'sender_id' => 12,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-10 17:41:31',
				'updated_at' => '2015-06-10 17:41:31',
				],
			62 =>
				[
				'id' => 63,
				'code' => 328858153,
				'sender_id' => 10,
				'reciber_id' => 11,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Prueba',
				'created_at' => '2015-06-10 19:56:56',
				'updated_at' => '2015-06-10 19:56:56',
				],
			63 =>
				[
				'id' => 64,
				'code' => 532771426,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'PruenbA',
				'created_at' => '2015-06-10 23:41:31',
				'updated_at' => '2015-06-10 23:41:31',
				],
			64 =>
				[
				'id' => 65,
				'code' => 532068807,
				'sender_id' => 6,
				'reciber_id' => 13,
				'reciber_seccion' => 93,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-11 00:02:24',
				'updated_at' => '2015-06-11 00:02:24',
				],
			65 =>
				[
				'id' => 66,
				'code' => 374157562,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Urgente',
				'created_at' => '2015-06-13 10:41:03',
				'updated_at' => '2015-06-13 10:41:03',
				],
			66 =>
				[
				'id' => 67,
				'code' => 601952437,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-13 10:41:26',
				'updated_at' => '2015-06-13 10:41:26',
				],
			67 =>
				[
				'id' => 68,
				'code' => 410764813,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '',
				'created_at' => '2015-06-13 10:41:27',
				'updated_at' => '2015-06-13 10:41:27',
				],
			68 =>
				[
				'id' => 69,
				'code' => 212422907,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => '  
',
				'created_at' => '2015-06-13 10:41:28',
				'updated_at' => '2015-06-13 10:41:28',
				],
			69 =>
				[
				'id' => 70,
				'code' => 497150767,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Urgente fragil',
				'created_at' => '2015-06-13 10:41:30',
				'updated_at' => '2015-06-13 10:41:30',
				],
			70 =>
				[
				'id' => 71,
				'code' => 230719353,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Urgente',
				'created_at' => '2015-06-13 10:42:13',
				'updated_at' => '2015-06-13 10:42:13',
				],
			71 =>
				[
				'id' => 72,
				'code' => 837339759,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Urgente',
				'created_at' => '2015-06-13 10:42:14',
				'updated_at' => '2015-06-13 10:42:14',
				],
			72 =>
				[
				'id' => 73,
				'code' => 596405605,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
					'estado_id' => 2,
				'description' => 'Un sobre de manila',
				'created_at' => '2015-06-13 10:42:15',
				'updated_at' => '2015-06-13 10:42:15',
				],
			73 =>
				[
				'id' => 74,
				'code' => 314912636,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'Muy urgente',
				'created_at' => '2015-06-13 10:48:34',
				'updated_at' => '2015-06-13 11:00:17',
				],
			74 =>
				[
				'id' => 75,
				'code' => 168018718,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'urgente ',
				'created_at' => '2015-06-13 10:48:34',
				'updated_at' => '2015-06-13 11:00:15',
				],
			75 =>
				[
				'id' => 76,
				'code' => 449182474,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => '',
				'created_at' => '2015-06-13 10:48:35',
				'updated_at' => '2015-06-13 11:00:22',
				],
			76 =>
				[
				'id' => 77,
				'code' => 907378420,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'Urgente',
				'created_at' => '2015-06-13 10:48:35',
				'updated_at' => '2015-06-13 11:00:18',
				],
			77 =>
				[
				'id' => 78,
				'code' => 923000118,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'Urgente',
				'created_at' => '2015-06-13 10:48:36',
				'updated_at' => '2015-06-13 11:00:16',
				],
			78 =>
				[
				'id' => 79,
				'code' => 446146230,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'Urgente',
				'created_at' => '2015-06-13 10:48:36',
				'updated_at' => '2015-06-13 11:00:17',
				],
			79 =>
				[
				'id' => 80,
				'code' => 609321898,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'urgente',
				'created_at' => '2015-06-13 10:48:36',
				'updated_at' => '2015-06-13 11:00:17',
				],
			80 =>
				[
				'id' => 81,
				'code' => 363896692,
				'sender_id' => 4,
				'reciber_id' => 10,
				'reciber_seccion' => 1,
				'estado' => 3,
				'description' => 'urgente',
				'created_at' => '2015-06-13 10:48:37',
				'updated_at' => '2015-06-13 11:00:18',
				],
			81 =>
				[
				'id' => 82,
				'code' => 624187960,
				'sender_id' => 5,
				'reciber_id' => 6,
				'reciber_seccion' => 2,
					'estado_id' => 2,
				'description' => 'Cualquier cosa',
				'created_at' => '2015-06-13 11:10:40',
				'updated_at' => '2015-06-13 11:10:40',
				],
		]);
	}

}
