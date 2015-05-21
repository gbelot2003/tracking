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
			'establecimiento_id'	=>	'required|Integer',
			'seccion_id' 			=>	'required|Integer',
			'cargo_id'				=>	'required|Integer',
			'first_name'			=> 	'required|String',
			'last_name'				=>  'required|String',
			'user_id'				=> 	'integer'
		];

		return $rules;
	}

}
