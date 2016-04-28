<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class ClientesCreateRequest extends Request {

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

		$create = [
			'establecimiento_id'	=>	'required|Integer',
			'seccion_id' 			=>	'required|Integer',
			'name'					=> 	"required|String|unique:traders",
			'user_id'				=> 	'integer'
		];

		return $create;
	}

}
