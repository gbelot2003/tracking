<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class RolesCreateRequest extends Request {

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
		return $create = [
			'name'			=> 'unique:role|required|string',
			'display_name' 	=> 'required|string',
			'description'	=> 'string'
		];
	}

}