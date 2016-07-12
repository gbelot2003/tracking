<?php namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Bolsa extends Model {

	/**
	 * @var string
	 */
	protected $table = 'bolsas';

	/**
	 * Mass assingment protection
	 * @var array
	 */
	protected $fillable = ['code', 'establecimiento_envio_id', 'establecimiento_recive_id', 'estado_id', 'details', 'user_id'];

	/**
	 * Una Bolsa tiene varios Shipmentes
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function shipments()
	{
		return $this->belongsToMany('App\Shipment', 'bolsa_shipment');
	}

	/**
	 * Referencia al establecimiento al que se envia la bolsa
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function sender()
	{
		return $this->belongsTo('App\Establecimiento', 'establecimiento_envio_id', 'id');
	}

	/**
	 * Referencia al establecimiento que recibe
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function reciber()
	{
		return $this->belongsTo('App\Establecimiento', 'establecimiento_recive_id', 'id');
	}

	/**
	 * Una bolsa tiene un estado
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function estado()
	{
		return $this->belongsTo('App\Estado', 'estado_id');
	}
	/**
	 * Una bolsa pertenece a un usuario
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}

	/**
	 * [transitos description]
	 * @return [type] [description]
	 */
	public function transitos()
	{
		return $this->hasMany('\App\TransitoBolsa')->orderBy('id', 'desc')->latest();
	}

	/**
	 * [transito description]
	 * @return [type] [description]
	 */
	public function transito()
	{
		return $this->hasOne('App\TransitoBolsa')->orderBy('id', 'desc')->latest();
	}

	/**
	 * @param $query
	 * @return mixed
	 */
	public function scopeBolsasindex($query)
	{
		 $query->with('sender.municipio.departamento', 'reciber.municipio.departamento',
		              'user', 'transito.estados');
		 $query->whereRaw('Date(created_at) = CURDATE()');
		 return $query;
	}

	/**
	 * @param $query
	 * @return mixed
	 */
	public function scopeBolsasShowByCode($query)
	{
		$query->with('sender.municipio.departamento', 'reciber.municipio.departamento')->orderBy('id', 'desc')->get();
		return $query;
	}

	/**
	 * @param $query
	 * @return mixed
	 */
	public function scopeBolsasShow($query)
	{
		$query->with(
			'sender.municipio.departamento', 'reciber.municipio.departamento',
			'transitos.estados','transitos.user', 'user',
			'shipments.senders.establecimiento', 'shipments.recivers.establecimiento',
			'transito', 'transito.estados', 'transito.user'
		)->orderBy('id', 'desc');

		return $query;
	}

	/**
	 * @param $quer
	 */
/*	public function scopeBolsasShowList($quer){
        return;
	}*/

	/**
	 * @param $query
	 * @param null $date
	 * @param null $search
	 * @param null $type
	 * @return mixed
	 */
	public function scopeBolsasearch($query, $date = null, $search = null, $type = null){

		$bdate = Carbon::createFromFormat('Y-m-d', $date)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date)->endOfDay();

		$query->with('sender', 'reciber', 'transito.estados', 'user');

		$query->whereBetween('created_at', [$bdate, $edate]);
		
		if($search != null){

			if($type == 1){

				$query->where('code', 'LIKE', $search);

			} elseif($type == 2){

				$query->whereHas('sender', function($q)use($search){
					return $q->where('name', 'LIKE', '%' . $search . '%');
				});

			} elseif($type == 3){

				$query->WhereHas('reciber', function($q)use($search){
					return $q->where('name', 'LIKE', '%' . $search . '%');
				});
			}

		}

		return $query;
	}

}
