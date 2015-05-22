<?php
/**
 * Created by PhpStorm.
 * User: ajax
 */

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Shipment;

class ShipmentTableSeeder extends Seeder
{
    public function run()
    {
		DB::table('shipments')->delete();

		Shipment::create([
			"sender_id" 		=> 1,
			"reciber_id"		=> 4,
			"description"		=> "Sit ut porttitor risus ultricies urna sed? Sagittis, ultricies, ultrices cursus integer massa in rhoncus dolor porta rhoncus cum, integer turpis, enim lectus! Natoque non augue dignissim amet eros mattis. Sed, dictumst placerat, et et?"
		]);

		Shipment::create([
			"sender_id" 		=> 3,
			"reciber_id"		=> 8,
			"description"		=> "Sit ut porttitor risus ultricies urna sed? Sagittis, ultricies, ultrices cursus integer massa in rhoncus dolor porta rhoncus cum, integer turpis, enim lectus! Natoque non augue dignissim amet eros mattis. Sed, dictumst placerat, et et?"

		]);

		Shipment::create([
			"sender_id" 		=> 4,
			"reciber_id"		=> 9,
			"description"		=> "Sit ut porttitor risus ultricies urna sed? Sagittis, ultricies, ultrices cursus integer massa in rhoncus dolor porta rhoncus cum, integer turpis, enim lectus! Natoque non augue dignissim amet eros mattis. Sed, dictumst placerat, et et?"

		]);

		Shipment::create([
			"sender_id" 		=> 8,
			"reciber_id"		=> 10,
			"description"		=> "Sit ut porttitor risus ultricies urna sed? Sagittis, ultricies, ultrices cursus integer massa in rhoncus dolor porta rhoncus cum, integer turpis, enim lectus! Natoque non augue dignissim amet eros mattis. Sed, dictumst placerat, et et?"

		]);

		Shipment::create([
			"sender_id" 		=> 6,
			"reciber_id"		=> 8,
			"description"		=> "Sit ut porttitor risus ultricies urna sed? Sagittis, ultricies, ultrices cursus integer massa in rhoncus dolor porta rhoncus cum, integer turpis, enim lectus! Natoque non augue dignissim amet eros mattis. Sed, dictumst placerat, et et?"

		]);
	}
}
