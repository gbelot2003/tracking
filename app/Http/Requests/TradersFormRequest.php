<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class TradersFormRequest extends Request {

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
		$rules = [
			'establecimiento_id'	=>	'required|integer',
			'seccion_id' 			=>	'required|integer',
			'cargo_id'				=>	'required|integer',
			'first_name'			=> 	'String|integer',
			'last_name'				=>  'String|integet',
			'user_id'				=> 	'integer'
		];

		return $rules;
	}

}
