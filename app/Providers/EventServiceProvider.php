<?php namespace App\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider {

	/**
	 * The event handler mappings for the application.
	 *
	 * @var array
	 */
	protected $listen = [
		'App\Event\SaveTransitos' => [
			'App\Listeners\CheckTransitosAbileble',
			'App\Listeners\TransitosUploadImage',
			'App\Listeners\TransitosSaveRecordsOnTransaction',
			'App\Listeners\CheckTransitosVariables',

		],
		'App\Event\SaveTransitosBolsas' => [
			'App\Listeners\UploadImages',
			'App\Listeners\CheckVariables',
			'App\Listeners\SaveRecordsOnTransaction'
		],
	];

	/**
	 * Register any other events for your application.
	 *
	 * @param  \Illuminate\Contracts\Events\Dispatcher  $events
	 * @return void
	 */
	public function boot(DispatcherContract $events)
	{
		parent::boot($events);

		//
	}

}
