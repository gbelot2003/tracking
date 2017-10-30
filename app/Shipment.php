<?php namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model {

	/**
	 * @var string
	 */
	protected $table = 'shipments';

	/**
	 * Proteccion para MassAssigments
	 * @var array
	 */
	protected $fillable = ['code', 'sender_id', 'reciber_id', 'reciber_seccion', 'description', 'estado_id', 'firma', 'user_id'];

	/**
	 * protected dates
	 * @var array
	 */
	protected $dates = ['created_at', 'updated_at'];

	/**
	 * Un sender pertenece a un Trader
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function senders()
	{
		return $this->belongsTo('App\Trader', 'sender_id', 'id');
	}

	/**
	 * Un reciver pretenece a un Trader
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function recivers()
	{
		return $this->belongsTo('App\Trader', 'reciber_id', 'id');
	}


	/**
	 * Un encargo puede tener muchos trancitos
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function transitos()
	{
		return $this->hasMany('App\Transito')->orderBy('id', 'desc')->latest();
	}

    /**
     * Retornar el ultimo registro relacionado en la tabla de transitos
     * @return mixed
     */
    public function transito()
    {
        return $this->hasOne('App\Transito', 'shipment_id', 'id')->orderBy('id', 'desc')->latest();
    }


	/**
	 * Seguda relacion de actualización de estados de transito en shipments
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function btransitos()
	{
		return $this->belongsTo('App\Transito', 'transito_id', 'id');
	}

	/**
	 * @return mixed
	 */
	public function scopeTransitorel($query)
	{
		return $query->with(['transitos' => function($q){
			$q->with('estados')->orderBy('id', 'desc')->get();
		}]);
	}


	public function scopeGetByCode($query, $code)
	{

        try {
            return $query->with(
                'senders.establecimiento',
                'recivers.establecimiento',
                'senders.establecimiento',
                'recivers.establecimiento',
                'transito.establecimiento'
            )->where('code', '=', $code);
        } catch(\Illuminate\Database\QueryException $ex){
            return ($ex->getMessage());
        }

	}


    /**
     * @param $query
     * @return mixed
     */
    public function scopeShipmentindex($query){


		$query->with(
            'senders.establecimiento',
            'recivers.establecimiento',
            'senders.seccion',
            'recivers.seccion',
            'transito.estados'
        );

		$query->whereRaw('Date(created_at) = CURDATE()');

		return $query;
    }

	public function scopeShipmentsearch($query, $date = null, $search = null, $type = null){

		$bdate = Carbon::createFromFormat('Y-m-d', $date)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date)->endOfDay();

		$query->with(
			'senders.establecimiento',
			'recivers.establecimiento',
			'senders.seccion',
			'recivers.seccion',
			'transito.estados'
		);

		if($search != null){

			if($type == 1){

				$query->where('code', 'LIKE', $search);

			} elseif($type == 2){

				$query->whereHas('senders', function($q)use($search){
					return $q->where('name', 'LIKE', '%' . $search . '%');
				});

			} elseif($type == 3){

				$query->WhereHas('recivers', function($q)use($search){
					return $q->where('name', 'LIKE', '%' . $search . '%');
				});
			}

		}

		if($type != 1){
			$query->whereBetween('created_at', [$bdate, $edate]);
		}

		$query->orderBy('id', 'DESC');

		return $query;
	}

	/**
	*
	**/
	public function scopeShipmentshow($query){
		$query->with(
			'senders.establecimiento', 'recivers.establecimiento', 'senders.seccion',
			'recivers.seccion', 'transitos.estados', 'transitos.user', 'transitos.establecimiento',
			'transito.estados', 'transito.user', 'transito.establecimiento'
		);
	}

	/**
	 * Un shipment fue creado por un usuario
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo('App\User', 'user_id', 'id');
	}

	/**
	 * Un shipment tiene varias bolsas
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function bolsas()
	{
		return $this->belongsToMany('App\Bolsa', 'bolsa_shipment');
	}

	/**
	 * Un shoipment tiene un estado
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function estados()
	{
		return $this->belongsTo('App\Estado', 'estado_id');
	}


    /**
     * Test Class
     * Contar cuantos transitos hay por cada shipment
     * @return mixed
     */
    public function transitosCount($estado_id)
    {
        return $this->hasMany(Transito::class)->selectRaw('SUM(IF(estado_id ='. $estado_id .',1,0))');
		/*
		 *
		return $this->hasOne('Price')
      		->selectRaw('product_id, max(price) as aggregate')
      		->groupBy('product_id');
		 * */
    }


}
