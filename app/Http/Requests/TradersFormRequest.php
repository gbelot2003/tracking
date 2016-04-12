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
			'name'					=> 	"required|String|unique_with:traders, id",
			'user_id'				=> 	'integer'
		];

		$create = [
			'establecimiento_id'	=>	'required|Integer',
			'seccion_id' 			=>	'required|Integer',
			'name'					=> 	"required|String|unique_with:traders",
			'user_id'				=> 	'integer'
		];

		if($this->method == 'PUT'){
			return $edit;
		} else {
			return $create;
		}
	}

}
