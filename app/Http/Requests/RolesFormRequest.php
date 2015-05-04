<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class RolesFormRequest extends Request {

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
			'slug' 			=> 'required|unique:roles',
			'description'	=> 'string',
			'level' 		=> 'required|integer|max:6'
		];

		$edit = [
			'name' 			=> 'required',
			'slug' 			=> 'required',
			'description'	=> 'string',
			'level' 		=> 'required|integer|max:6'
		];

		if($this->method == 'PUT'){
			return $edit;
		} else {
			return $create;
		}

	}

}
