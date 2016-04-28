<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class EstablecimientosCreateRequest extends Request {

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
			'name' 				=> 'required|unique:establecimientos',
			'departamento_id' 	=> 'required',
			'municipio_id'		=> 'required',
			'empresa_id'		=> 'required|integer',
			'address'			=> 'string'
		];

		return $create;

	}

}