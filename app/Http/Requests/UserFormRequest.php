<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserFormRequest extends Request {

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
			'email' => 'required|email',
			'password' => 'required|confirmed',
			'name' => 'required',
			'establecimiento_id' => 'required|integer',
			'empresa_id' => 'required|integer',
			'estado_id' => 'required|integer'
		];

		$edit = [
			'email' => 'required|email',
			'name' => 'required',
			'establecimiento_id' => 'required|integer',
			'empresa_id' => 'required|integer',
			'estado_id' => 'required|integer'
		];

		if($this->method == 'PUT'){
			return $edit;
		} else {
			return $create;
		}
	}

}
