<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('users')->delete();
        
		\DB::table('users')->insert(array (
			0 => 
			array (
				'id' => 1,
				'userstatus_id' => 1,
				'name' => 'gbelot2003',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'gbelot2003@hotmail.com',
				'password' => '$2y$10$mDl.MkctMqXySPi81SJKU.S0WM9yCS4g007EmnwKxLzfF4QuCl4wm',
				'remember_token' => 'oSh2yfGFSEpdTxAGS7Ke6oxfySv6GS76dCrsQb81RkHwbUPKEirjqnq5iatJ',
				'created_at' => '2015-05-30 20:38:57',
				'updated_at' => '2015-07-04 11:10:34',
			),
			1 => 
			array (
				'id' => 2,
				'userstatus_id' => 1,
				'name' => 'Harold Rivera',
				'empresa_id' => 1,
				'establecimiento_id' => 107,
				'email' => 'hrivera@conectahn.com',
				'password' => '$2y$10$uHuDdWLi14zA2jzSkeMNFu5K3TKXTUuEdH7aebh98AUEVPE2FeWba',
				'remember_token' => 'OgHB1u0FEUS8TMKjzXxf50WZqI7TIciCpr8H237iqjIaQFEnuSIruYynnove',
				'created_at' => '2015-05-30 20:46:30',
				'updated_at' => '2015-07-04 17:44:01',
			),
			2 => 
			array (
				'id' => 3,
				'userstatus_id' => 1,
				'name' => 'Jose Marcelino Cruz Sanchez',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'jsanchez@unidosexpress.com',
				'password' => '$2y$10$n.DZtt8uUK.RJSrS5Ph2tuhJEHE2YWGwqvk3zElfSiCgQsiyrqcLe',
				'remember_token' => 'e551xrEC07vG7ms77U9qSkJAPiYXljzMNla2msW8mo4ZevndJfwi89fMLlEk',
				'created_at' => '2015-05-31 03:14:52',
				'updated_at' => '2015-07-01 05:22:47',
			),
			3 => 
			array (
				'id' => 4,
				'userstatus_id' => 1,
				'name' => 'Karen Janeth Carbajal Almendares',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'kalmendarez@unidosexpress.com',
				'password' => '$2y$10$TWrCvSify5fPypUWfsPcxeUaI3IJo5Y8IilrD6rqcsuNoynp4vHSG',
				'remember_token' => 'tKeR9rdqCf3IlhZcgxhiebHrhS8bpIPxFGUrt6HedbPiAIsmI6WAH2gVK2Lw',
				'created_at' => '2015-05-31 03:56:01',
				'updated_at' => '2015-07-01 05:23:28',
			),
			4 => 
			array (
				'id' => 5,
				'userstatus_id' => 1,
				'name' => 'Mahelyn Alejandra Funez Espinoza',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'mespinoza@unidosexpress.com',
				'password' => '$2y$10$.VqyROaeiDIi9ygTiTmY5e1.ZkSqRQ46xQl9dCeNpz3PW4LggRJqu',
				'remember_token' => '1v83ctzughG991H5yCPlWXdr51SFsg9mBwilVjpoMzWBN6cKhOltG9A6vbGj',
				'created_at' => '2015-05-31 03:56:52',
				'updated_at' => '2015-07-01 05:24:05',
			),
			5 => 
			array (
				'id' => 6,
				'userstatus_id' => 1,
				'name' => 'Nelson Oreste Canales Silva',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'nsilva@unidosexpress.com',
				'password' => '$2y$10$l.09ohqAgIrECdNB14HJnOaU9/2QLK/vkAjocp1IoWoyuM62Gp7q6',
				'remember_token' => 'VDMTMVoYIDgQcEeRVxybCBxxNr10OzMKMl39QLa6quSwELXQ6eheViaDvTdY',
				'created_at' => '2015-05-31 03:57:56',
				'updated_at' => '2015-07-01 05:25:05',
			),
			6 => 
			array (
				'id' => 7,
				'userstatus_id' => 1,
				'name' => 'Olvin Rene Amaya Ortez',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'oamaya@unidosexpress.com',
				'password' => '$2y$10$vHCV2wwD8BPudPsgkC65LOY0glDmCsM35j.gX8EO1VA.31nxDWiC6',
				'remember_token' => 'AkuySBtYYjP5fcNH83n3xTOsU8A9dfbCguUYnzA7KSPmyJ26ZEZ7J9goSafv',
				'created_at' => '2015-05-31 03:59:25',
				'updated_at' => '2015-07-01 05:25:54',
			),
			7 => 
			array (
				'id' => 8,
				'userstatus_id' => 1,
				'name' => 'Paola Maria Raudales Casco',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'praudales@unidosexpress.com',
				'password' => '$2y$10$DhlTSBuNBYcyRyS2MFq2Teb6lGJOpJjNSvpyhqb4Mz5d4xY5o0v12',
				'remember_token' => 'jiEbcun1Nb2tev9Qw3RxGeTHZ4B2V7L4tb8oBr4mJaemvFydOekx66tVfDWx',
				'created_at' => '2015-05-31 04:00:32',
				'updated_at' => '2015-07-01 05:26:29',
			),
			8 => 
			array (
				'id' => 9,
				'userstatus_id' => 1,
				'name' => 'Luis Joel Sanchez Rodezno',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'lsanchez@unidosexpress.com',
				'password' => '$2y$10$kWoMjgZhAe0KmVjBGCzYluxlwq0.FLhyI9sUBWE0cEFZB4N/WaMFC',
				'remember_token' => 'T08IFIi4BqEdK1XC9ULs4sxIQTtMg7HcOykhxu2dgAU5VMDHHi4Ov6TcBo3l',
				'created_at' => '2015-05-31 04:10:38',
				'updated_at' => '2015-07-01 05:27:12',
			),
			9 => 
			array (
				'id' => 10,
				'userstatus_id' => 1,
				'name' => 'Victor Hugo Portillo Amador',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'vportillo@unidosexpress.com',
				'password' => '$2y$10$IJBb3stCoPVbn2jjLuqvfOnhy4QCcQuPKo4Q3mQCiRsRHhsnqKE8O',
				'remember_token' => 'Cc3qztIFlxdqFBip0IjpahK4YY1IogfhYEg1ZE6cIdJDsAgRN1MGGDB2zONK',
				'created_at' => '2015-05-31 04:11:36',
				'updated_at' => '2015-07-01 05:27:45',
			),
			10 => 
			array (
				'id' => 11,
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Banegas Caballero',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'jbanegas@unidosexpress.com',
				'password' => '$2y$10$9sGgIDTrPI8VFEzjuVKTPuHLyEuCK.ZVCDc0NTELrWxJZC9XLu5s6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:12:17',
				'updated_at' => '2015-07-01 05:28:20',
			),
			11 => 
			array (
				'id' => 12,
				'userstatus_id' => 1,
				'name' => 'Jimmy Jovel Caceres Inestroza',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'jinestroza@unidosexpress.com',
				'password' => '$2y$10$Ky/HelWKVw41wNzJC/p/5Ol4mR4et5egbYqLiNUpzrlg3EwPtZCva',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:13:10',
				'updated_at' => '2015-07-01 05:28:51',
			),
			12 => 
			array (
				'id' => 13,
				'userstatus_id' => 1,
				'name' => 'Franklin Enrique Salinas Guillen',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'fsalinas@unidosexpress.com',
				'password' => '$2y$10$lP8DsOdp4YrM.FTsc/RZK.IfWyf.byaIpEWmnw23OqVswpXTnq2ZG',
				'remember_token' => 'lGrqr0k5lJ2iDQ3D7kxFrfY3hnbTgevNoo0aSJmGk3dPV1vmndBPeCUeac6i',
				'created_at' => '2015-05-31 04:14:14',
				'updated_at' => '2015-07-01 05:29:22',
			),
			13 => 
			array (
				'id' => 14,
				'userstatus_id' => 1,
				'name' => 'Flavio Geovanny Solorzano Fortin',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'fsolorzano@unidosexpress.com',
				'password' => '$2y$10$QqV3lZCxHySx6oqWiWduDu7pBFMz2zbhkI4XUdbYGQf9jbxfdgQ82',
				'remember_token' => 'KpuDOaUu1KUNWI3Zlt9Tby5NikB17oeWpNtwFLLGiMShgUXWUxCuKS0QSxDo',
				'created_at' => '2015-05-31 05:43:59',
				'updated_at' => '2015-07-01 05:29:55',
			),
			14 => 
			array (
				'id' => 15,
				'userstatus_id' => 1,
				'name' => 'Daniel Abraham Ramos Avila',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'dramos@unidosexpress.com',
				'password' => '$2y$10$cCYAwSfuST.x4jKmSxQcvOf.e.pmJ/QVCDaYPGLNLc3uxRyyjQFw.',
				'remember_token' => 'UURZkNrXBsg8Ej3yhWy8iceZuttqDGo6XGkIRgIZqWRYZcqqfP1wJg4Ttmwl',
				'created_at' => '2015-05-31 05:45:19',
				'updated_at' => '2015-07-04 19:03:48',
			),
			15 => 
			array (
				'id' => 16,
				'userstatus_id' => 1,
				'name' => 'Byan Eduardo Matute Arias',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'bmatute@unidosexpress.com',
				'password' => '$2y$10$LxD/3teoifheiZxeTtZIgOdufZcUwxzqofLs8qZeQ2U05Gl8ruLgK',
				'remember_token' => 'aJt84Dh3E7EsVB8gtIL6J8lWGfVGhhBjZyyYZwc0nLEWuTlBeKcmEAF3S9q3',
				'created_at' => '2015-05-31 05:46:23',
				'updated_at' => '2015-07-01 13:43:59',
			),
			16 => 
			array (
				'id' => 17,
				'userstatus_id' => 1,
				'name' => 'Jorge Fransua Padilla Aleman',
				'empresa_id' => 1,
				'establecimiento_id' => 22,
				'email' => 'jpadilla@unidosexpress.com',
				'password' => '$2y$10$.CemG73/Ag497CMOdMbgbem4HKET9f/dVwkO0i0bUjW4qnW0Pz9bq',
				'remember_token' => 'Gu9qz8XcNs4PF8RaU08ajR2DcBINLJffuJqd66fvOXIId3au2rSPzPSOGrPw',
				'created_at' => '2015-05-31 05:47:13',
				'updated_at' => '2015-07-04 10:17:39',
			),
			17 => 
			array (
				'id' => 18,
				'userstatus_id' => 1,
				'name' => 'Ivys Josue Hernandez Flores',
				'empresa_id' => 1,
				'establecimiento_id' => 22,
				'email' => 'iflores@unidosexpress.com',
				'password' => '$2y$10$.zeGOSPvfllW/E7mybk7fu5ZbW6B0clNHIPoV6jGZM4Lck8zJWzoG',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:48:04',
				'updated_at' => '2015-07-01 05:33:06',
			),
			18 => 
			array (
				'id' => 19,
				'userstatus_id' => 1,
				'name' => 'Osmin David Ortiz Perez',
				'empresa_id' => 1,
				'establecimiento_id' => 22,
				'email' => 'operez@unidosexpress.com',
				'password' => '$2y$10$hXjVehxqBz05sxCxQofsk.ofxNQLMFOS11Yilqn0kbZvEKdg/TNj6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:48:44',
				'updated_at' => '2015-07-01 05:33:38',
			),
			19 => 
			array (
				'id' => 20,
				'userstatus_id' => 1,
				'name' => 'Walter Javier Cruz Aguilar',
				'empresa_id' => 1,
				'establecimiento_id' => 22,
				'email' => 'wcruz@unidosexpress.com',
				'password' => '$2y$10$q3C2uAckfaa840XxVLCp4uZEsrxjQJaMg2w5R1ppTSG9jt282X8QW',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:49:33',
				'updated_at' => '2015-07-01 05:34:12',
			),
			20 => 
			array (
				'id' => 21,
				'userstatus_id' => 1,
				'name' => 'Allan Gerardo Bustillo Quezada',
				'empresa_id' => 1,
				'establecimiento_id' => 188,
				'email' => 'abustillo@unidosexpress.com',
				'password' => '$2y$10$fvl2H4Jx01tbg/VH.GIeD.NlfyRTDR3SdNabp1Ta8IslvJulJWwqW',
				'remember_token' => '9HYKIfYsqsQkq6DlLj62vlv2gsT521AdAE9mFkjFpPSxdYZ61qVsVq8uasE9',
				'created_at' => '2015-05-31 05:53:03',
				'updated_at' => '2015-07-01 12:23:11',
			),
			21 => 
			array (
				'id' => 22,
				'userstatus_id' => 1,
				'name' => 'Jose Manuel Osorto Castellanos',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'josorto@unidosexpress.com',
				'password' => '$2y$10$l1PjXF.Clq.qnfPVTEY9W.BpfeaYUb8TqE018wHI35cjw6tWbmSzC',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:53:57',
				'updated_at' => '2015-05-31 05:53:57',
			),
			22 => 
			array (
				'id' => 23,
				'userstatus_id' => 1,
				'name' => 'Ulices Noe Ordoñez Izaguirre',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'nizaguirre@unidosexpress.com',
				'password' => '$2y$10$1ssJ9Sg90YCvEojCFtFGG.aAHunwWjx.apNJoKDLVa303cgz6RFRe',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:54:40',
				'updated_at' => '2015-05-31 05:54:40',
			),
			23 => 
			array (
				'id' => 24,
				'userstatus_id' => 1,
				'name' => 'Luis Alexis Andino Castro',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'landino@unidosexpress.com',
				'password' => '$2y$10$pXViBrh.vhIQ4VDcYkAiiOwrYLdx8ITDjzWEBm01yjY/e5Pt.MtmS',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:55:25',
				'updated_at' => '2015-05-31 05:55:25',
			),
			24 => 
			array (
				'id' => 25,
				'userstatus_id' => 1,
				'name' => 'Pedro Antonio Cruz Dominguez',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'pcruz@unidosexpress.com',
				'password' => '$2y$10$T6mcWKcW625gj0N1QoycceUfwLAOnka4PcyghcPJIw4TC6mahp0ui',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:56:17',
				'updated_at' => '2015-05-31 05:56:17',
			),
			25 => 
			array (
				'id' => 26,
				'userstatus_id' => 1,
				'name' => 'Jose Jeremias Mejia Duarte',
				'empresa_id' => 1,
				'establecimiento_id' => 91,
				'email' => 'jmejia@unidosexpress.com',
				'password' => '$2y$10$N8CYpua.060H7O7fvsOFIebN7ta4NjHZuOLO9vsPTZCQsemieO6Fa',
				'remember_token' => 'wbNXEkDlqMhbY671pBgtvfyJEhjEDiwK7NIMKhnaoLkpy7jtp10KqdJ3dKD6',
				'created_at' => '2015-05-31 05:56:55',
				'updated_at' => '2015-07-01 05:39:30',
			),
			26 => 
			array (
				'id' => 27,
				'userstatus_id' => 1,
				'name' => 'Enrique Fernando De Leon Martinez',
				'empresa_id' => 1,
				'establecimiento_id' => 54,
				'email' => 'emartinez@unidosexpress.com',
				'password' => '$2y$10$mAy9CAhl0lzRZvYtcQwBfuU0pLXOy2SDJrNVYDO4ONf1JCHzeFW86',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:57:44',
				'updated_at' => '2015-07-01 05:40:10',
			),
			27 => 
			array (
				'id' => 28,
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Rosales Colman',
				'empresa_id' => 1,
				'establecimiento_id' => 78,
				'email' => 'jrosales@unidosexpress.com',
				'password' => '$2y$10$Sv..7Sy8fCeVzhwgOddxAOEB62.KOZl6xdRGM0dmmxXd3jpjZzp4K',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:00:21',
				'updated_at' => '2015-07-01 05:40:53',
			),
			28 => 
			array (
				'id' => 29,
				'userstatus_id' => 1,
				'name' => 'Sayd Rene Reyes Agurcia',
				'empresa_id' => 1,
				'establecimiento_id' => 83,
				'email' => 'sreyes@unidosexpress.com',
				'password' => '$2y$10$mOnZjROYjoSZ23cZkG.Qv.X/hb1vAeauKuxunpV1Ybpj6WpMxwlLm',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:01:05',
				'updated_at' => '2015-07-01 14:49:22',
			),
			29 => 
			array (
				'id' => 30,
				'userstatus_id' => 1,
				'name' => 'Jeahns Ruocbell Sevilla Moncada',
				'empresa_id' => 1,
				'establecimiento_id' => 73,
				'email' => 'jsevilla@unidosexpress.com',
				'password' => '$2y$10$gffXxn4pqFjoXaVNmSvHd.eD833obPTnJ.wzE87ddd7DV5ZcF3pGK',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:01:49',
				'updated_at' => '2015-07-01 05:42:04',
			),
			30 => 
			array (
				'id' => 31,
				'userstatus_id' => 1,
				'name' => 'Dorian Danery Matute Gonzales',
				'empresa_id' => 1,
				'establecimiento_id' => 66,
				'email' => 'dgonzales@unidosexpress.com',
				'password' => '$2y$10$5PH4v/zqRWEP1EPXRgSMc.rXf1wkcyS7CYpGAFOv8P8KxR1UIxiXC',
				'remember_token' => 'A0Mt1bPeQnhFqNBQKi4XYvvTnX21y34GcqTBFc26UFwPbQ1lYO8XsNphar1W',
				'created_at' => '2015-05-31 06:02:49',
				'updated_at' => '2015-07-01 15:55:53',
			),
			31 => 
			array (
				'id' => 32,
				'userstatus_id' => 1,
				'name' => 'Allan Josue Espinoza Avila',
				'empresa_id' => 1,
				'establecimiento_id' => 146,
				'email' => 'jespinoza@unidosexpress.com',
				'password' => '$2y$10$RtIh65Wl9Wg.FK/5yokOvuunbnN7X0R0Z28hpydv9hHGYnFc6sBAq',
				'remember_token' => 'zNNeuchfozNXdjXYzd7t9VDAzpTrZ2knDv6o7JNc2PGQbqvVdxSyUh9vXBu3',
				'created_at' => '2015-05-31 06:03:40',
				'updated_at' => '2015-07-04 13:01:02',
			),
			32 => 
			array (
				'id' => 33,
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Osorto  caballero',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'rcaballero@unidosexpress.com',
				'password' => '$2y$10$RpLlZIV2gCHU7S37InRgE.1DGJtJz.lv6ddOSTZgSMluniK9bmM/i',
				'remember_token' => 'yniqIcV0cjdsWqbty5Mz3m5wl62isfODOyZjSklEXYd9fTCeVt8pMR2AHOlZ',
				'created_at' => '2015-05-31 06:04:18',
				'updated_at' => '2015-07-01 08:57:48',
			),
			33 => 
			array (
				'id' => 34,
				'userstatus_id' => 1,
				'name' => 'Selvin Samir Lagos Carranza',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'slagos@unidosexpress.com',
				'password' => '$2y$10$GNcBCQdrs.EMDvXFvlXEm.X8y4nWPJyakZTJgFHTwxpkl7.yqDrHm',
				'remember_token' => 'neRwAlkg4jWuhyKrAOnsmwM3ECW0p64PRiJSPjidW4nVwnF9pHrunRjKtKXn',
				'created_at' => '2015-05-31 06:05:04',
				'updated_at' => '2015-07-01 05:45:33',
			),
			34 => 
			array (
				'id' => 35,
				'userstatus_id' => 1,
				'name' => 'Yeimy Carolina Chavarria Urquia',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'curquia@unidosexpress.com',
				'password' => '$2y$10$auA0V1IQaiINRUPUHNTfYuKUk82CkyiwNZar0OS1hGDYKjw16KXWy',
				'remember_token' => 'Z78fqJSFv6wZR9SOI1v6Eo5iwBS9sAZ3vNlPUaWttBijqMT9JNIuSg2xWJrv',
				'created_at' => '2015-05-31 06:05:44',
				'updated_at' => '2015-07-01 05:46:02',
			),
			35 => 
			array (
				'id' => 36,
				'userstatus_id' => 1,
				'name' => 'Jose David Trochez',
				'empresa_id' => 1,
				'establecimiento_id' => 107,
				'email' => 'dtrochez@conectahn.com',
				'password' => '$2y$10$78/BYzxDEz3LKkDIjeerKeK7iCx5793bPt97D62YrVHh6lBBM439u',
				'remember_token' => 'yQpgH11F1jSgAMup3ndXaQq0ne7aue7WQCvAnaaxsQ0EnbSImCm1HN2IDJzr',
				'created_at' => '2015-05-31 06:05:44',
				'updated_at' => '2015-06-29 14:54:01',
			),
			36 => 
			array (
				'id' => 37,
				'userstatus_id' => 1,
				'name' => 'Gerardo Lopez',
				'empresa_id' => 1,
				'establecimiento_id' => 1,
				'email' => 'glopez@conectahn.com',
				'password' => '$2y$10$RPtA6.QA0AqC2bTP3wCkUebT15qvaZwMhWdpR1AHihZ4wu0NFbDU6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:05:44',
				'updated_at' => '2015-06-16 09:39:13',
			),
			37 => 
			array (
				'id' => 38,
				'userstatus_id' => 1,
				'name' => 'Gerardo Enrique Lopez Torres',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'glopez@unidosexpress.com',
				'password' => '$2y$10$/8ZUM2J8ii5YUJeQPf3x2..hZQzudDZbhM9wdqKj9t3nTNSOIcZtG',
				'remember_token' => 'CC6U3iOC8swreRdlAE8lzvXROi84YVwRJNwLYTn0HqeJbogT58z8lMOLSYG0',
				'created_at' => '2015-06-16 14:18:18',
				'updated_at' => '2015-07-03 11:02:54',
			),
			38 => 
			array (
				'id' => 39,
				'userstatus_id' => 1,
				'name' => 'Manuel Canales',
				'empresa_id' => 1,
				'establecimiento_id' => 22,
				'email' => 'mcanales@unidosexpress.com',
				'password' => '$2y$10$CEdhsq3B7Q9/WwHrN0aQXOS5hw7SnNpdevHwfw2W3SeO4BZuxgyH6',
				'remember_token' => NULL,
				'created_at' => '2015-06-16 21:16:29',
				'updated_at' => '2015-07-01 05:47:15',
			),
			39 => 
			array (
				'id' => 40,
				'userstatus_id' => 1,
				'name' => 'NOMBRE DE PRUEBA',
				'empresa_id' => 1,
				'establecimiento_id' => 91,
				'email' => 'lavariox@hotmail.com',
				'password' => '$2y$10$7Frp8hAa7NsZUdMmF/2RuuyuEG5X0sXf9P6sGdSiPDEJc.pkR1uT.',
				'remember_token' => NULL,
				'created_at' => '2015-06-19 14:58:47',
				'updated_at' => '2015-06-19 14:58:47',
			),
			40 => 
			array (
				'id' => 41,
				'userstatus_id' => 1,
				'name' => 'Edwin Bladimir Martinez',
				'empresa_id' => 3,
				'establecimiento_id' => 107,
				'email' => 'bmartinez@grupoficohsa.hn',
				'password' => '$2y$10$wu8l7uRrN.dNU2BbMYeaqeWzVmNv.1O4BPFO9EOXtv4XxtW9Z2Gnq',
				'remember_token' => 'FVggS0yEI5Oh6f651fmikHPCYkpLNwQpIIgt20Io10DxFXjDzUEC4XbaruB2',
				'created_at' => '2015-06-29 14:03:40',
				'updated_at' => '2015-07-01 17:01:43',
			),
			41 => 
			array (
				'id' => 42,
				'userstatus_id' => 1,
				'name' => 'Lenin Lozano Velasquez',
				'empresa_id' => 3,
				'establecimiento_id' => 107,
				'email' => 'lalozano@grupoficohsa.hn',
				'password' => '$2y$10$csGADNPhs8CI0AhIc/lbsOSw6Ln7NC4ff6k.c/HmXz9ug2eTSCN32',
				'remember_token' => 'AxUe3dPsocgYayrMMGCJdyZU1dGL6bgGCyCKGIiUFEsEaDGhPzAGSaKo0nu6',
				'created_at' => '2015-06-29 14:08:01',
				'updated_at' => '2015-06-29 14:52:01',
			),
			42 => 
			array (
				'id' => 43,
				'userstatus_id' => 1,
				'name' => 'Oscar Rene Herrera Gonzalez',
				'empresa_id' => 1,
				'establecimiento_id' => 145,
				'email' => 'oherrera@Unidosexpress.com',
				'password' => '$2y$10$YcFql3P.lFFTO4fevAiJLOvmjO6Hrj1pnZaJK.LCJ6FSEzm4z9/gO',
				'remember_token' => 'BIdQ9ZEtp0CUk5shU5c1xuKVM0uRMPEt7iVTcAYwHYDj8GEWkXq9Z2Xt8uql',
				'created_at' => '2015-07-01 05:56:11',
				'updated_at' => '2015-07-04 11:14:04',
			),
		));

		$user = new App\User();
		$user = User::find(1); $user->attachRole(1);
		$user = User::find(2); $user->attachRole(1);
		$user = User::find(3); $user->attachRole(4);
		$user = User::find(4); $user->attachRole(4);
		$user = User::find(5); $user->attachRole(4);
		$user = User::find(6); $user->attachRole(4);
		$user = User::find(7); $user->attachRole(4);
		$user = User::find(8); $user->attachRole(4);
		$user = User::find(9); $user->attachRole(4);
		$user = User::find(10); $user->attachRole(4);

		$user = User::find(11); $user->attachRole(4);
		$user = User::find(12); $user->attachRole(4);
		$user = User::find(13); $user->attachRole(4);
		$user = User::find(14); $user->attachRole(4);
		$user = User::find(15); $user->attachRole(4);
		$user = User::find(16); $user->attachRole(4);
		$user = User::find(17); $user->attachRole(4);
		$user = User::find(18); $user->attachRole(4);
		$user = User::find(19); $user->attachRole(4);
		$user = User::find(20); $user->attachRole(4);

		$user = User::find(21); $user->attachRole(4);
		$user = User::find(22); $user->attachRole(4);
		$user = User::find(23); $user->attachRole(4);
		$user = User::find(24); $user->attachRole(4);
		$user = User::find(25); $user->attachRole(4);
		$user = User::find(26); $user->attachRole(4);
		$user = User::find(27); $user->attachRole(4);
		$user = User::find(28); $user->attachRole(4);
		$user = User::find(29); $user->attachRole(4);
		$user = User::find(30); $user->attachRole(4);

		$user = User::find(31); $user->attachRole(4);
		$user = User::find(32); $user->attachRole(4);
		$user = User::find(33); $user->attachRole(4);
		$user = User::find(34); $user->attachRole(4);
		$user = User::find(35); $user->attachRole(4);
		$user = User::find(36); $user->attachRole(4);
		$user = User::find(36); $user->attachRole(2);
		$user = User::find(37); $user->attachRole(2);
		$user = User::find(38); $user->attachRole(2);
		$user = User::find(39); $user->attachRole(4);
		$user = User::find(40); $user->attachRole(2);
		$user = User::find(41); $user->attachRole(1);
		$user = User::find(42); $user->attachRole(1);
		$user = User::find(43); $user->attachRole(4);
	}

}
