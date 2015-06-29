<?php

use Illuminate\Database\Seeder;

class SeccionsTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('seccions')->delete();
        
		\DB::table('seccions')->insert(array (
			0 => 
			array (
				'id' => 1,
				'name' => 'Presidencia',
			),
			1 => 
			array (
				'id' => 2,
				'name' => 'Vice Presidencia',
			),
			2 => 
			array (
				'id' => 3,
				'name' => 'Dirección',
			),
			3 => 
			array (
				'id' => 4,
				'name' => 'Sub Dirección',
			),
			4 => 
			array (
				'id' => 5,
				'name' => 'Gerencia',
			),
			5 => 
			array (
				'id' => 6,
				'name' => 'Sub Gerencia',
			),
			6 => 
			array (
				'id' => 7,
				'name' => 'Personal',
			),
			7 => 
			array (
				'id' => 8,
				'name' => 'Auditoria',
			),
			8 => 
			array (
				'id' => 9,
				'name' => 'Administración',
			),
			9 => 
			array (
				'id' => 10,
				'name' => 'Oficina de Negocios',
			),
			10 => 
			array (
				'id' => 11,
				'name' => 'Sección Administrativa',
			),
			11 => 
			array (
				'id' => 12,
				'name' => 'Compras',
			),
			12 => 
			array (
				'id' => 13,
				'name' => 'Contabilídad',
			),
			13 => 
			array (
				'id' => 14,
				'name' => 'Asesoria Legal',
			),
			14 => 
			array (
				'id' => 15,
				'name' => 'Sección de Caja',
			),
			15 => 
			array (
				'id' => 16,
				'name' => 'Sección de Informatica',
			),
			16 => 
			array (
				'id' => 17,
				'name' => 'Seguridad',
			),
			17 => 
			array (
				'id' => 18,
				'name' => 'Fideicomisos',
			),
			18 => 
			array (
				'id' => 19,
				'name' => 'Aseo y mensajeria',
			),
			19 => 
			array (
				'id' => 20,
				'name' => 'Recuperaciones',
			),
			20 => 
			array (
				'id' => 21,
				'name' => 'Comisión de Prestamos',
			),
			21 => 
			array (
				'id' => 22,
				'name' => 'Soporte Tecnico',
			),
			22 => 
			array (
				'id' => 23,
				'name' => 'Pagos',
			),
			23 => 
			array (
				'id' => 24,
				'name' => 'Validación',
			),
			24 => 
			array (
				'id' => 25,
				'name' => 'Garantías',
			),
			25 => 
			array (
				'id' => 26,
				'name' => 'Internacional',
			),
			26 => 
			array (
				'id' => 27,
				'name' => 'Créditos',
			),
			27 => 
			array (
				'id' => 28,
				'name' => 'Hipotecas',
			),
			28 => 
			array (
				'id' => 29,
				'name' => 'Operaciones',
			),
			29 => 
			array (
				'id' => 30,
				'name' => 'Calidad',
			),
			30 => 
			array (
				'id' => 31,
				'name' => 'Prestamos',
			),
			31 => 
			array (
				'id' => 32,
				'name' => 'Riesgo',
			),
			32 => 
			array (
				'id' => 33,
				'name' => 'Finanzas',
			),
			33 => 
			array (
				'id' => 34,
				'name' => 'Caja',
			),
			34 => 
			array (
				'id' => 35,
				'name' => 'Tesorería',
			),
			35 => 
			array (
				'id' => 36,
				'name' => 'Convenios',
			),
			36 => 
			array (
				'id' => 37,
				'name' => 'Servicios Generales',
			),
			37 => 
			array (
				'id' => 38,
				'name' => 'Administración de Cartera',
			),
			38 => 
			array (
				'id' => 39,
				'name' => 'Sistemas',
			),
			39 => 
			array (
				'id' => 40,
				'name' => 'Control de Personal',
			),
			40 => 
			array (
				'id' => 41,
				'name' => 'V.A.R.',
			),
			41 => 
			array (
				'id' => 42,
				'name' => 'Gerente Finanzas',
			),
			42 => 
			array (
				'id' => 43,
				'name' => 'Marketing',
			),
			43 => 
			array (
				'id' => 44,
				'name' => 'Mercadeo',
			),
			44 => 
			array (
				'id' => 45,
				'name' => 'Diseño',
			),
			45 => 
			array (
				'id' => 46,
				'name' => 'Tecnología',
			),
			46 => 
			array (
				'id' => 47,
				'name' => 'Cumplimiento',
			),
			47 => 
			array (
				'id' => 48,
				'name' => 'Jurídico',
			),
			48 => 
			array (
				'id' => 49,
				'name' => 'Organización y Planeamiento',
			),
			49 => 
			array (
				'id' => 50,
				'name' => 'Sub Gerencia de Operaciones',
			),
			50 => 
			array (
				'id' => 51,
				'name' => 'Sub Gerencia de Administración',
			),
			51 => 
			array (
				'id' => 52,
				'name' => 'Sub Gerencia de Administración Técnica',
			),
			52 => 
			array (
				'id' => 53,
				'name' => 'Sub Gerencia de Estudios Económicos',
			),
			53 => 
			array (
				'id' => 54,
				'name' => 'Programación y Análisis Financiero',
			),
			54 => 
			array (
				'id' => 55,
				'name' => 'Contaduría',
			),
			55 => 
			array (
				'id' => 56,
				'name' => 'Recursos Humanos',
			),
			56 => 
			array (
				'id' => 57,
				'name' => 'Emisión y Tesorería',
			),
			57 => 
			array (
				'id' => 58,
				'name' => 'Operaciones Monetarias',
			),
			58 => 
			array (
				'id' => 59,
				'name' => 'Estadísticas Macro económicas',
			),
			59 => 
			array (
				'id' => 60,
				'name' => 'Gestión de Información Económica',
			),
			60 => 
			array (
				'id' => 61,
				'name' => 'Sistema de Pagos',
			),
			61 => 
			array (
				'id' => 62,
				'name' => 'Previsión Social',
			),
			62 => 
			array (
				'id' => 63,
				'name' => 'Tecnología y Comunicaciones',
			),
			63 => 
			array (
				'id' => 64,
				'name' => 'Servicios Fiscales',
			),
			64 => 
			array (
				'id' => 65,
				'name' => 'Investigación Económica',
			),
			65 => 
			array (
				'id' => 66,
				'name' => 'Gestión de Riesgos',
			),
			66 => 
			array (
				'id' => 67,
				'name' => 'Relaciones Institucionales',
			),
			67 => 
			array (
				'id' => 68,
				'name' => 'Presupuesto',
			),
			68 => 
			array (
				'id' => 69,
				'name' => 'Relaciones Públicas',
			),
			69 => 
			array (
				'id' => 70,
				'name' => 'Gestiones y Reclamos',
			),
			70 => 
			array (
				'id' => 71,
				'name' => 'Centro de Procesamiento CDP',
			),
			71 => 
			array (
				'id' => 72,
				'name' => 'UAR',
			),
			72 => 
			array (
				'id' => 73,
				'name' => 'Oficial de Negocios',
			),
			73 => 
			array (
				'id' => 74,
				'name' => 'Control de Gestión',
			),
			74 => 
			array (
				'id' => 75,
				'name' => 'Ventas',
			),
			75 => 
			array (
				'id' => 76,
				'name' => 'Comercial',
			),
			76 => 
			array (
				'id' => 77,
				'name' => 'Publicidad',
			),
			77 => 
			array (
				'id' => 78,
				'name' => 'Inversiones',
			),
			78 => 
			array (
				'id' => 79,
				'name' => 'Banca Electrónica',
			),
			79 => 
			array (
				'id' => 80,
				'name' => 'Dirección Ejecutiva',
			),
			80 => 
			array (
				'id' => 81,
				'name' => 'Consejo Directivo',
			),
			81 => 
			array (
				'id' => 82,
				'name' => 'Archivo',
			),
			82 => 
			array (
				'id' => 83,
				'name' => 'Logistica',
			),
			83 => 
			array (
				'id' => 84,
				'name' => 'Premier',
			),
			84 => 
			array (
				'id' => 85,
				'name' => 'Agentes Servicio Externo',
			),
			85 => 
			array (
				'id' => 86,
				'name' => 'Agentes Servicio Interno',
			),
			86 => 
			array (
				'id' => 87,
				'name' => 'Planificación',
			),
			87 => 
			array (
				'id' => 88,
				'name' => 'Desarrollo Personal',
			),
			88 => 
			array (
				'id' => 89,
				'name' => 'Investigación',
			),
			89 => 
			array (
				'id' => 90,
				'name' => 'Cobros',
			),
			90 => 
			array (
				'id' => 91,
				'name' => 'Servicio al Cliente',
			),
			91 => 
			array (
				'id' => 92,
				'name' => 'Producción',
			),
			92 => 
			array (
				'id' => 93,
				'name' => 'Ingenieria',
			),
			93 => 
			array (
				'id' => 94,
				'name' => 'Jefe Administrativo',
			),
			94 => 
			array (
				'id' => 95,
				'name' => 'Cajero De Apoyo',
			),
			95 => 
			array (
				'id' => 96,
				'name' => 'Compensacion',
			),
			96 => 
			array (
				'id' => 97,
				'name' => 'Jefe De Seguridad',
			),
			97 => 
			array (
				'id' => 98,
				'name' => 'Ficohsa Seguros',
			),
			98 => 
			array (
				'id' => 99,
				'name' => 'Pymex',
			),
		));
	}

}
