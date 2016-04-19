<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserFormCreateRequest extends Request {

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
		return $rules = [
			'email' => 'unique:users|required|email',
			'password' => 'required|confirmed',
			'name' => 'unique:users|required',
			'establecimiento_id' => 'required|integer',
			'empresa_id' => 'required|integer',
			'userstatus_id' => 'required|integer'
		];
	}

}
