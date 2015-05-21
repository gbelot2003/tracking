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
		$edit 	= [
			'establecimiento_id'	=>	'required|Integer',
			'seccion_id' 			=>	'required|Integer',
			'cargo_id'				=>	'required|Integer',
			'first_name'			=> 	"required|String|unique_with:traders,last_name, id",
			'last_name'				=>  'required|String',
			'user_id'				=> 	'integer'
		];

		$create = [
			'establecimiento_id'	=>	'required|Integer',
			'seccion_id' 			=>	'required|Integer',
			'cargo_id'				=>	'required|Integer',
			'first_name'			=> 	"required|String|unique_with:traders,first_name,last_name",
			'last_name'				=>  'required|String',
			'user_id'				=> 	'integer'
		];

		if($this->method == 'PUT'){
			return $edit;
		} else {
			return $create;
		}
	}

}
