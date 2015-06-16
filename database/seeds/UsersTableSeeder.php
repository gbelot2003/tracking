<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('users')->delete();

		\DB::table('users')->insert([
			0 =>
				[
				'id' => 1,
				'userstatus_id' => 1,
				'name' => 'gbelot2003',
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'gbelot2003@hotmail.com',
				'password' => '$2y$10$mDl.MkctMqXySPi81SJKU.S0WM9yCS4g007EmnwKxLzfF4QuCl4wm',
				'remember_token' => NULL,
				'created_at' => '2015-05-30 20:38:57',
				'updated_at' => '2015-05-30 20:38:57',
				],
			1 =>
				[
				'id' => 2,
				'userstatus_id' => 1,
				'name' => 'Harold Rivera',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'lavariox@hotmail.com',
				'password' => '$2y$10$hgvGASPE2N5cMIaTJZcQTueBWBZgckZnMrdkuraOvrqbcT.z4sI1m',
				'remember_token' => 'K5ndDnt8TVS4KnqFnjRJvLXjafC4HPojbuaMXjff0USoWFPqO0d4ZK5BsZri',
				'created_at' => '2015-05-30 20:46:30',
				'updated_at' => '2015-05-31 02:08:36',
				],
			2 =>
				[
				'id' => 3,
				'userstatus_id' => 1,
				'name' => 'Jose Marcelino Cruz Sanchez',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jsanchez@unidosexpress.com',
				'password' => '$2y$10$n.DZtt8uUK.RJSrS5Ph2tuhJEHE2YWGwqvk3zElfSiCgQsiyrqcLe',
				'remember_token' => 'e551xrEC07vG7ms77U9qSkJAPiYXljzMNla2msW8mo4ZevndJfwi89fMLlEk',
				'created_at' => '2015-05-31 03:14:52',
				'updated_at' => '2015-06-13 10:19:47',
				],
			3 =>
				[
				'id' => 4,
				'userstatus_id' => 1,
				'name' => 'Karen Janeth Carbajal Almendares',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'kalmendarez@unidosexpress.com',
				'password' => '$2y$10$TWrCvSify5fPypUWfsPcxeUaI3IJo5Y8IilrD6rqcsuNoynp4vHSG',
				'remember_token' => 'z48r1Gs6jqq72397ZDtMPr2qwuntr7BlM54fainfvEpWY5POWd9sTzGJ6scL',
				'created_at' => '2015-05-31 03:56:01',
				'updated_at' => '2015-06-13 11:20:32',
				],
			4 =>
				[
				'id' => 5,
				'userstatus_id' => 1,
				'name' => 'Mahelyn Alejandra Funez Espinoza',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'mespinoza@unidosexpress.com',
				'password' => '$2y$10$.VqyROaeiDIi9ygTiTmY5e1.ZkSqRQ46xQl9dCeNpz3PW4LggRJqu',
				'remember_token' => '1v83ctzughG991H5yCPlWXdr51SFsg9mBwilVjpoMzWBN6cKhOltG9A6vbGj',
				'created_at' => '2015-05-31 03:56:52',
				'updated_at' => '2015-06-13 11:20:23',
				],
			5 =>
				[
				'id' => 6,
				'userstatus_id' => 1,
				'name' => 'Nelson Oreste Canales Silva',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'nsilva@unidosexpress.com',
				'password' => '$2y$10$l.09ohqAgIrECdNB14HJnOaU9/2QLK/vkAjocp1IoWoyuM62Gp7q6',
				'remember_token' => 'VDMTMVoYIDgQcEeRVxybCBxxNr10OzMKMl39QLa6quSwELXQ6eheViaDvTdY',
				'created_at' => '2015-05-31 03:57:56',
				'updated_at' => '2015-06-13 10:18:10',
				],
			6 =>
				[
				'id' => 7,
				'userstatus_id' => 1,
				'name' => 'Olvin Rene Amaya Ortez',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'oamaya@unidosexpress.com',
				'password' => '$2y$10$vHCV2wwD8BPudPsgkC65LOY0glDmCsM35j.gX8EO1VA.31nxDWiC6',
				'remember_token' => 'AkuySBtYYjP5fcNH83n3xTOsU8A9dfbCguUYnzA7KSPmyJ26ZEZ7J9goSafv',
				'created_at' => '2015-05-31 03:59:25',
				'updated_at' => '2015-06-13 10:18:44',
				],
			7 =>
				[
				'id' => 8,
				'userstatus_id' => 1,
				'name' => 'Paola Maria Raudales Casco',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'praudales@unidosexpress.com',
				'password' => '$2y$10$DhlTSBuNBYcyRyS2MFq2Teb6lGJOpJjNSvpyhqb4Mz5d4xY5o0v12',
				'remember_token' => 'jiEbcun1Nb2tev9Qw3RxGeTHZ4B2V7L4tb8oBr4mJaemvFydOekx66tVfDWx',
				'created_at' => '2015-05-31 04:00:32',
				'updated_at' => '2015-06-13 10:18:29',
				],
			8 =>
				[
				'id' => 9,
				'userstatus_id' => 1,
				'name' => 'Luis Joel Sanchez Rodezno',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'lsanchez@unidosexpress.com',
				'password' => '$2y$10$kWoMjgZhAe0KmVjBGCzYluxlwq0.FLhyI9sUBWE0cEFZB4N/WaMFC',
				'remember_token' => 'T08IFIi4BqEdK1XC9ULs4sxIQTtMg7HcOykhxu2dgAU5VMDHHi4Ov6TcBo3l',
				'created_at' => '2015-05-31 04:10:38',
				'updated_at' => '2015-06-13 10:18:26',
				],
			9 =>
				[
				'id' => 10,
				'userstatus_id' => 1,
				'name' => 'Victor Hugo Portillo Amador',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'vportillo@unidosexpress.com',
				'password' => '$2y$10$IJBb3stCoPVbn2jjLuqvfOnhy4QCcQuPKo4Q3mQCiRsRHhsnqKE8O',
				'remember_token' => 'V8T3B6clYWVbSWJdQdvZcROCJb9RYfn98SglfcXxnhlqt4PagwK6B7B7ycIa',
				'created_at' => '2015-05-31 04:11:36',
				'updated_at' => '2015-06-13 10:18:09',
				],
			10 =>
				[
				'id' => 11,
				'userstatus_id' => 1,
				'name' => 'Oscar Rene Herrera Gonzalez',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jbanegas@unidosexpress.com',
				'password' => '$2y$10$k9z1D72.IXCTiBLWO79O9eZuXCA1fIJP6U9rN39pYAqT9lyfgEKz2',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:12:17',
				'updated_at' => '2015-05-31 04:12:17',
				],
			11 =>
				[
				'id' => 12,
				'userstatus_id' => 1,
				'name' => 'Jimmy Jovel Caceres Inestroza',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jinestroza@unidosexpress.com',
				'password' => '$2y$10$Ky/HelWKVw41wNzJC/p/5Ol4mR4et5egbYqLiNUpzrlg3EwPtZCva',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:13:10',
				'updated_at' => '2015-05-31 04:13:10',
				],
			12 =>
				[
				'id' => 13,
				'userstatus_id' => 1,
				'name' => 'Franklin Enrique Salinas Guillen',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'fsalinas@unidosexpress.com',
				'password' => '$2y$10$lP8DsOdp4YrM.FTsc/RZK.IfWyf.byaIpEWmnw23OqVswpXTnq2ZG',
				'remember_token' => 'lGrqr0k5lJ2iDQ3D7kxFrfY3hnbTgevNoo0aSJmGk3dPV1vmndBPeCUeac6i',
				'created_at' => '2015-05-31 04:14:14',
				'updated_at' => '2015-06-13 10:18:29',
				],
			13 =>
				[
				'id' => 14,
				'userstatus_id' => 1,
				'name' => 'Flavio Geovanny Solorzano Fortin',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'fsolorzano@unidosexpress.com',
				'password' => '$2y$10$QqV3lZCxHySx6oqWiWduDu7pBFMz2zbhkI4XUdbYGQf9jbxfdgQ82',
				'remember_token' => 'KpuDOaUu1KUNWI3Zlt9Tby5NikB17oeWpNtwFLLGiMShgUXWUxCuKS0QSxDo',
				'created_at' => '2015-05-31 05:43:59',
				'updated_at' => '2015-06-13 10:18:53',
				],
			14 =>
				[
				'id' => 15,
				'userstatus_id' => 1,
				'name' => 'Daniel Abraham Ramos Avila',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'dramos@unidosexpress.com',
				'password' => '$2y$10$cCYAwSfuST.x4jKmSxQcvOf.e.pmJ/QVCDaYPGLNLc3uxRyyjQFw.',
				'remember_token' => 'nmFmyUZUpcuzC9iVmy1NYpbCB3oMwCEWSBFkctVEF9N6w1k644tKfYE4Rm0a',
				'created_at' => '2015-05-31 05:45:19',
				'updated_at' => '2015-06-13 10:30:03',
				],
			15 =>
				[
				'id' => 16,
				'userstatus_id' => 1,
				'name' => 'Byan Eduardo Matute Arias',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'bmatute@unidosexpress.com',
				'password' => '$2y$10$GmQ8.xX2uhxX28yGpuwj3enhd4xIkbnPKWNcx3pidhyd03O6dvJ6y',
				'remember_token' => 'aJt84Dh3E7EsVB8gtIL6J8lWGfVGhhBjZyyYZwc0nLEWuTlBeKcmEAF3S9q3',
				'created_at' => '2015-05-31 05:46:23',
				'updated_at' => '2015-06-13 10:32:41',
				],
			16 =>
				[
				'id' => 17,
				'userstatus_id' => 1,
				'name' => 'Jorge Fransua Padilla Aleman',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jpadilla@unidosexpress.com',
				'password' => '$2y$10$.CemG73/Ag497CMOdMbgbem4HKET9f/dVwkO0i0bUjW4qnW0Pz9bq',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:47:13',
				'updated_at' => '2015-05-31 05:47:13',
				],
			17 =>
				[
				'id' => 18,
				'userstatus_id' => 1,
				'name' => 'Ivys Josue Hernandez Flores',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'iflores@unidosexpress.com',
				'password' => '$2y$10$.zeGOSPvfllW/E7mybk7fu5ZbW6B0clNHIPoV6jGZM4Lck8zJWzoG',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:48:04',
				'updated_at' => '2015-05-31 05:48:04',
				],
			18 =>
				[
				'id' => 19,
				'userstatus_id' => 1,
				'name' => 'Osmin David Ortiz Perez',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'operez@unidosexpress.com',
				'password' => '$2y$10$hXjVehxqBz05sxCxQofsk.ofxNQLMFOS11Yilqn0kbZvEKdg/TNj6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:48:44',
				'updated_at' => '2015-05-31 05:48:44',
				],
			19 =>
				[
				'id' => 20,
				'userstatus_id' => 1,
				'name' => 'Walter Javier Cruz Aguilar',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'wcruz@unidosexpress.com',
				'password' => '$2y$10$q3C2uAckfaa840XxVLCp4uZEsrxjQJaMg2w5R1ppTSG9jt282X8QW',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:49:33',
				'updated_at' => '2015-05-31 05:49:33',
				],
			20 =>
				[
				'id' => 21,
				'userstatus_id' => 1,
				'name' => 'Allan Gerardo Bustillo Quezada',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'abustillo@unidosexpress.com',
				'password' => '$2y$10$fvl2H4Jx01tbg/VH.GIeD.NlfyRTDR3SdNabp1Ta8IslvJulJWwqW',
				'remember_token' => '7iCRchJMZHq2pYBv81iEOq4HjKUyZEbNTO6QBoThFOknIVEnNkYgiIWvqDgE',
				'created_at' => '2015-05-31 05:53:03',
				'updated_at' => '2015-06-13 11:20:34',
				],
			21 =>
				[
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
				],
			22 =>
				[
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
				],
			23 =>
				[
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
				],
			24 =>
				[
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
				],
			25 =>
				[
				'id' => 26,
				'userstatus_id' => 1,
				'name' => 'Jose Jeremias Mejia Duarte',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 2,
				'email' => 'jmejia@unidosexpress.com',
				'password' => '$2y$10$N8CYpua.060H7O7fvsOFIebN7ta4NjHZuOLO9vsPTZCQsemieO6Fa',
				'remember_token' => 'N8abHIbrlrIGWJ5QtOOWeFFJvpu8blMZzZ7xitNUKKD35S8VL1CdFnyDgV7J',
				'created_at' => '2015-05-31 05:56:55',
				'updated_at' => '2015-06-13 11:20:25',
				],
			26 =>
				[
				'id' => 27,
				'userstatus_id' => 1,
				'name' => 'Enrique Fernando De Leon Martinez',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 2,
				'email' => 'emartinez@unidosexpress.com',
				'password' => '$2y$10$mAy9CAhl0lzRZvYtcQwBfuU0pLXOy2SDJrNVYDO4ONf1JCHzeFW86',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:57:44',
				'updated_at' => '2015-05-31 05:58:12',
				],
			27 =>
				[
				'id' => 28,
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Rosales Colman',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jrosales@unidosexpress.com',
				'password' => '$2y$10$Sv..7Sy8fCeVzhwgOddxAOEB62.KOZl6xdRGM0dmmxXd3jpjZzp4K',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:00:21',
				'updated_at' => '2015-05-31 06:00:21',
				],
			28 =>
				[
				'id' => 29,
				'userstatus_id' => 1,
				'name' => 'Sayd Rene Reyes Agurcia',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 2,
				'email' => 'sreyes@unidosexpress.com',
				'password' => '$2y$10$G6mZvEjbGVDUyuB/KRehP.UwGYFk4BL6yZVk5rVlLz.yKqX4NN56y',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:01:05',
				'updated_at' => '2015-05-31 06:01:05',
				],
			29 =>
				[
				'id' => 30,
				'userstatus_id' => 1,
				'name' => 'Jeahns Ruocbell Sevilla Moncada',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jsevilla@unidosexpress.com',
				'password' => '$2y$10$gffXxn4pqFjoXaVNmSvHd.eD833obPTnJ.wzE87ddd7DV5ZcF3pGK',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:01:49',
				'updated_at' => '2015-05-31 06:01:49',
				],
			30 =>
				[
				'id' => 31,
				'userstatus_id' => 1,
				'name' => 'Dorian Danery Matute Gonzales',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'dgonzales@unidosexpress.com',
				'password' => '$2y$10$5PH4v/zqRWEP1EPXRgSMc.rXf1wkcyS7CYpGAFOv8P8KxR1UIxiXC',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:02:49',
				'updated_at' => '2015-05-31 06:02:49',
				],
			31 =>
				[
				'id' => 32,
				'userstatus_id' => 1,
				'name' => 'Allan Josue Espinoza Avila',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'jespinoza@unidosexpress.com',
				'password' => '$2y$10$RtIh65Wl9Wg.FK/5yokOvuunbnN7X0R0Z28hpydv9hHGYnFc6sBAq',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:03:40',
				'updated_at' => '2015-05-31 06:03:40',
				],
			32 =>
				[
				'id' => 33,
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Osorto  caballero',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'rcaballero@unidosexpress.com',
				'password' => '$2y$10$RpLlZIV2gCHU7S37InRgE.1DGJtJz.lv6ddOSTZgSMluniK9bmM/i',
				'remember_token' => 'qmx7UJASBPy4iBDu6Ls9ZAFJ4gB45VOsE5eHT6v2KoE4eBAjaOnm2JJSuuf4',
				'created_at' => '2015-05-31 06:04:18',
				'updated_at' => '2015-06-13 11:20:20',
				],
			33 =>
				[
				'id' => 34,
				'userstatus_id' => 1,
				'name' => 'Selvin Samir Lagos Caballero',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'slagos@unidosexpress.com',
				'password' => '$2y$10$y4C5L.1QHh33X11uLDWpue1ajanF8SLO44LRPb.NwFXfv8ojLF5D2',
				'remember_token' => 'DWo3quqdJkcgMIVrajC2H5dpxUEVLM3Bdu6qe9Hrw9DBjVvoxDai2lYCc12w',
				'created_at' => '2015-05-31 06:05:04',
				'updated_at' => '2015-06-13 11:20:23',
				],
			34 =>
				[
				'id' => 35,
				'userstatus_id' => 1,
				'name' => 'Yeimy Carolina Chavarria Urquia',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'curquia@unidosexpress.com',
				'password' => '$2y$10$auA0V1IQaiINRUPUHNTfYuKUk82CkyiwNZar0OS1hGDYKjw16KXWy',
				'remember_token' => 'Z78fqJSFv6wZR9SOI1v6Eo5iwBS9sAZ3vNlPUaWttBijqMT9JNIuSg2xWJrv',
				'created_at' => '2015-05-31 06:05:44',
				'updated_at' => '2015-06-13 11:20:14',
				],
			35 =>
				[
				'id' => 36,
				'userstatus_id' => 1,
				'name' => 'dtrochez',
				
				
				'empresa_id' => 1,
				'establecimiento_id' => 153,
				'email' => 'dtrochez@conectahn.com',
				'password' => '$2y$10$RPtA6.QA0AqC2bTP3wCkUebT15qvaZwMhWdpR1AHihZ4wu0NFbDU6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:05:44',
				'updated_at' => '2015-05-31 06:05:44',
				],
			36 =>
				[
					'id' => 37,
					'userstatus_id' => 1,
					'name' => 'Gerardo Lopez',
					'empresa_id' => 1,
					'establecimiento_id' => 153,
					'email' => 'glopez@conectahn.com',
					'password' => '$2y$10$RPtA6.QA0AqC2bTP3wCkUebT15qvaZwMhWdpR1AHihZ4wu0NFbDU6',
					'remember_token' => null,
					'created_at' => '2015-05-31 06:05:44',
					'updated_at' => '2015-05-31 06:05:44',
				],
		]);
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
		$user = User::find(36);
		$user->attachRole(2);
	}

}
