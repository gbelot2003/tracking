<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class TransitosFormRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'shipment_id' => 'integer|required',
			'estado_id' => 'integer|required',
			'details' => 'string',
			'firma'   => 'mimes:jpeg,bmp,png,jpg',
			'foto'   => 'mimes:jpeg,bmp,png,jpg'
		];
	}

}
