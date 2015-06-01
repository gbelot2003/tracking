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
				'userstatus_id' => 1,
				'name' => 'gbelot2003',
				'first_name' => 'Gerardo A',
				'last_name' => 'Belot',
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'gbelot2003@hotmail.com',
				'password' => '$2y$10$mDl.MkctMqXySPi81SJKU.S0WM9yCS4g007EmnwKxLzfF4QuCl4wm',
				'remember_token' => NULL,
				'created_at' => '2015-05-30 20:38:57',
				'updated_at' => '2015-05-30 20:38:57',
			),
			1 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Harold Rivera',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'lavariox@hotmail.com',
				'password' => '$2y$10$hgvGASPE2N5cMIaTJZcQTueBWBZgckZnMrdkuraOvrqbcT.z4sI1m',
				'remember_token' => 'K5ndDnt8TVS4KnqFnjRJvLXjafC4HPojbuaMXjff0USoWFPqO0d4ZK5BsZri',
				'created_at' => '2015-05-30 20:46:30',
				'updated_at' => '2015-05-31 02:08:36',
			),
			2 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Jose Marcelino Cruz Sanchez',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jsanchez@unidosexpress.com',
				'password' => '$2y$10$n.DZtt8uUK.RJSrS5Ph2tuhJEHE2YWGwqvk3zElfSiCgQsiyrqcLe',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 03:14:52',
				'updated_at' => '2015-05-31 03:14:52',
			),
			3 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Karen Janeth Carbajal Almendares',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'kalmendarez@unidosexpress.com',
				'password' => '$2y$10$TWrCvSify5fPypUWfsPcxeUaI3IJo5Y8IilrD6rqcsuNoynp4vHSG',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 03:56:01',
				'updated_at' => '2015-05-31 03:56:01',
			),
			4 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Mahelyn Alejandra Funez Espinoza',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'mespinoza@unidosexpress.com',
				'password' => '$2y$10$.VqyROaeiDIi9ygTiTmY5e1.ZkSqRQ46xQl9dCeNpz3PW4LggRJqu',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 03:56:52',
				'updated_at' => '2015-05-31 03:56:52',
			),
			5 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Nelson Oreste Canales Silva',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'nsilva@unidosexpress.com',
				'password' => '$2y$10$l.09ohqAgIrECdNB14HJnOaU9/2QLK/vkAjocp1IoWoyuM62Gp7q6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 03:57:56',
				'updated_at' => '2015-05-31 03:57:56',
			),
			6 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Olvin Rene Amaya Ortez',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'oamaya@unidosexpress.com',
				'password' => '$2y$10$vHCV2wwD8BPudPsgkC65LOY0glDmCsM35j.gX8EO1VA.31nxDWiC6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 03:59:25',
				'updated_at' => '2015-05-31 03:59:25',
			),
			7 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Paola Maria Raudales Casco',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'praudales@unidosexpress.com',
				'password' => '$2y$10$DhlTSBuNBYcyRyS2MFq2Teb6lGJOpJjNSvpyhqb4Mz5d4xY5o0v12',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:00:32',
				'updated_at' => '2015-05-31 04:00:32',
			),
			8 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Luis Joel Sanchez Rodezno',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'lsanchez@unidosexpress.com',
				'password' => '$2y$10$kWoMjgZhAe0KmVjBGCzYluxlwq0.FLhyI9sUBWE0cEFZB4N/WaMFC',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:10:38',
				'updated_at' => '2015-05-31 04:10:38',
			),
			9 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Victor Hugo Portillo Amador',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'vportillo@unidosexpress.com',
				'password' => '$2y$10$IJBb3stCoPVbn2jjLuqvfOnhy4QCcQuPKo4Q3mQCiRsRHhsnqKE8O',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:11:36',
				'updated_at' => '2015-05-31 04:11:36',
			),
			10 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Oscar Rene Herrera Gonzalez',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jbanegas@unidosexpress.com',
				'password' => '$2y$10$k9z1D72.IXCTiBLWO79O9eZuXCA1fIJP6U9rN39pYAqT9lyfgEKz2',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:12:17',
				'updated_at' => '2015-05-31 04:12:17',
			),
			11 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Jimmy Jovel Caceres Inestroza',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jinestroza@unidosexpress.com',
				'password' => '$2y$10$Ky/HelWKVw41wNzJC/p/5Ol4mR4et5egbYqLiNUpzrlg3EwPtZCva',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:13:10',
				'updated_at' => '2015-05-31 04:13:10',
			),
			12 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Franklin Enrique Salinas Guillen',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'fsalinas@unidosexpress.com',
				'password' => '$2y$10$lP8DsOdp4YrM.FTsc/RZK.IfWyf.byaIpEWmnw23OqVswpXTnq2ZG',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 04:14:14',
				'updated_at' => '2015-05-31 04:14:14',
			),
			13 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Flavio Geovanny Solorzano Fortin',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'fsolorzano@unidosexpress.com',
				'password' => '$2y$10$QqV3lZCxHySx6oqWiWduDu7pBFMz2zbhkI4XUdbYGQf9jbxfdgQ82',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:43:59',
				'updated_at' => '2015-05-31 05:43:59',
			),
			14 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Daniel Abraham Ramos Avila',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'dramos@unidosexpress.com',
				'password' => '$2y$10$cCYAwSfuST.x4jKmSxQcvOf.e.pmJ/QVCDaYPGLNLc3uxRyyjQFw.',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:45:19',
				'updated_at' => '2015-05-31 05:45:19',
			),
			15 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Byan Eduardo Matute Arias',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'bmatute@unidosexpress.com',
				'password' => '$2y$10$GmQ8.xX2uhxX28yGpuwj3enhd4xIkbnPKWNcx3pidhyd03O6dvJ6y',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:46:23',
				'updated_at' => '2015-05-31 05:46:23',
			),
			16 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Jorge Fransua Padilla Aleman',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jpadilla@unidosexpress.com',
				'password' => '$2y$10$.CemG73/Ag497CMOdMbgbem4HKET9f/dVwkO0i0bUjW4qnW0Pz9bq',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:47:13',
				'updated_at' => '2015-05-31 05:47:13',
			),
			17 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Ivys Josue Hernandez Flores',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'iflores@unidosexpress.com',
				'password' => '$2y$10$.zeGOSPvfllW/E7mybk7fu5ZbW6B0clNHIPoV6jGZM4Lck8zJWzoG',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:48:04',
				'updated_at' => '2015-05-31 05:48:04',
			),
			18 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Osmin David Ortiz Perez',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'operez@unidosexpress.com',
				'password' => '$2y$10$hXjVehxqBz05sxCxQofsk.ofxNQLMFOS11Yilqn0kbZvEKdg/TNj6',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:48:44',
				'updated_at' => '2015-05-31 05:48:44',
			),
			19 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Walter Javier Cruz Aguilar',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'wcruz@unidosexpress.com',
				'password' => '$2y$10$q3C2uAckfaa840XxVLCp4uZEsrxjQJaMg2w5R1ppTSG9jt282X8QW',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:49:33',
				'updated_at' => '2015-05-31 05:49:33',
			),
			20 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Allan Gerardo Bustillo Quezada',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'abustillo@unidosexpress.com',
				'password' => '$2y$10$fvl2H4Jx01tbg/VH.GIeD.NlfyRTDR3SdNabp1Ta8IslvJulJWwqW',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:53:03',
				'updated_at' => '2015-05-31 05:53:03',
			),
			21 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Jose Manuel Osorto Castellanos',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'josorto@unidosexpress.com',
				'password' => '$2y$10$l1PjXF.Clq.qnfPVTEY9W.BpfeaYUb8TqE018wHI35cjw6tWbmSzC',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:53:57',
				'updated_at' => '2015-05-31 05:53:57',
			),
			22 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Ulices Noe Ordoñez Izaguirre',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'nizaguirre@unidosexpress.com',
				'password' => '$2y$10$1ssJ9Sg90YCvEojCFtFGG.aAHunwWjx.apNJoKDLVa303cgz6RFRe',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:54:40',
				'updated_at' => '2015-05-31 05:54:40',
			),
			23 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Luis Alexis Andino Castro',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'landino@unidosexpress.com',
				'password' => '$2y$10$pXViBrh.vhIQ4VDcYkAiiOwrYLdx8ITDjzWEBm01yjY/e5Pt.MtmS',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:55:25',
				'updated_at' => '2015-05-31 05:55:25',
			),
			24 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Pedro Antonio Cruz Dominguez',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'pcruz@unidosexpress.com',
				'password' => '$2y$10$T6mcWKcW625gj0N1QoycceUfwLAOnka4PcyghcPJIw4TC6mahp0ui',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:56:17',
				'updated_at' => '2015-05-31 05:56:17',
			),
			25 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Jose Jeremias Mejia Duarte',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 2,
				'empresa_id' => 1,
				'email' => 'jmejia@unidosexpress.com',
				'password' => '$2y$10$N8CYpua.060H7O7fvsOFIebN7ta4NjHZuOLO9vsPTZCQsemieO6Fa',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:56:55',
				'updated_at' => '2015-05-31 05:56:55',
			),
			26 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Enrique Fernando De Leon Martinez',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 2,
				'empresa_id' => 1,
				'email' => 'emartinez@unidosexpress.com',
				'password' => '$2y$10$mAy9CAhl0lzRZvYtcQwBfuU0pLXOy2SDJrNVYDO4ONf1JCHzeFW86',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 05:57:44',
				'updated_at' => '2015-05-31 05:58:12',
			),
			27 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Rosales Colman',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jrosales@unidosexpress.com',
				'password' => '$2y$10$Sv..7Sy8fCeVzhwgOddxAOEB62.KOZl6xdRGM0dmmxXd3jpjZzp4K',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:00:21',
				'updated_at' => '2015-05-31 06:00:21',
			),
			28 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Sayd Rene Reyes Agurcia',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 2,
				'empresa_id' => 1,
				'email' => 'sreyes@unidosexpress.com',
				'password' => '$2y$10$G6mZvEjbGVDUyuB/KRehP.UwGYFk4BL6yZVk5rVlLz.yKqX4NN56y',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:01:05',
				'updated_at' => '2015-05-31 06:01:05',
			),
			29 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Jeahns Ruocbell Sevilla Moncada',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jsevilla@unidosexpress.com',
				'password' => '$2y$10$gffXxn4pqFjoXaVNmSvHd.eD833obPTnJ.wzE87ddd7DV5ZcF3pGK',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:01:49',
				'updated_at' => '2015-05-31 06:01:49',
			),
			30 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Dorian Danery Matute Gonzales',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'dgonzales@unidosexpress.com',
				'password' => '$2y$10$5PH4v/zqRWEP1EPXRgSMc.rXf1wkcyS7CYpGAFOv8P8KxR1UIxiXC',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:02:49',
				'updated_at' => '2015-05-31 06:02:49',
			),
			31 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Allan Josue Espinoza Avila',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'jespinoza@unidosexpress.com',
				'password' => '$2y$10$RtIh65Wl9Wg.FK/5yokOvuunbnN7X0R0Z28hpydv9hHGYnFc6sBAq',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:03:40',
				'updated_at' => '2015-05-31 06:03:40',
			),
			32 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Juan Ramon Osorto  caballero',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'rcaballero@unidosexpress.com',
				'password' => '$2y$10$RpLlZIV2gCHU7S37InRgE.1DGJtJz.lv6ddOSTZgSMluniK9bmM/i',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:04:18',
				'updated_at' => '2015-05-31 06:04:18',
			),
			33 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Selvin Samir Lagos Caballero',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'slagos@unidosexpress.com',
				'password' => '$2y$10$y4C5L.1QHh33X11uLDWpue1ajanF8SLO44LRPb.NwFXfv8ojLF5D2',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:05:04',
				'updated_at' => '2015-05-31 06:05:04',
			),
			34 =>
			array (
				'userstatus_id' => 1,
				'name' => 'Yeimy Carolina Chavarria Urquia',
				'first_name' => NULL,
				'last_name' => NULL,
				'area_id' => 1,
				'empresa_id' => 1,
				'email' => 'curquia@unidosexpress.com',
				'password' => '$2y$10$auA0V1IQaiINRUPUHNTfYuKUk82CkyiwNZar0OS1hGDYKjw16KXWy',
				'remember_token' => NULL,
				'created_at' => '2015-05-31 06:05:44',
				'updated_at' => '2015-05-31 06:05:44',
			),
		));

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

	}

}
