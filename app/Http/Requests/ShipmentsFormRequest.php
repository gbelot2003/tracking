<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class ShipmentsFormRequest extends Request {

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

		$rules = [
			'sender_id' => 'required|Integer',
			'reciber_id' => 'required|Integer|different:sender_id',
			'description' => 'String',
			'estado' => 'Integer'
		];

		return $rules;

	}

}
