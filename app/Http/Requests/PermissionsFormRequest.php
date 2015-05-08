<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class PermissionsFormRequest extends Request {

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
			'name' 			=> 'required|unique:roles',
			'display_name' 	=> 'required',
			'description'	=> 'string'
		];

		$edit = [
			'name' 			=> 'required',
			'display_name' 	=> 'required',
			'description'	=> 'string'
		];

		if($this->method == 'PUT'){
			return $edit;
		} else {
			return $create;
		}
	}

}
