<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class UsuariosFormRequest extends Request {

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
			'name' 			=> 'requiered|min:5|unique:user',
			'email' 		=> 'requiered|email|unique:user',
			'password'		=> 'required|min:6',
			'empresa_id' 	=> 'required|integer'

		];

		$edit = [
			'name' 		=> 'requiered',
			'email' 	=> 'requiered',
			'empresa_id' 	=> 'required|integer'
		];

		if($this->method == 'PUT'){
			return $edit;
		} else {
			return $create;
		}
	}

}
