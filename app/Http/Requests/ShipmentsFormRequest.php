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


	public function all()
	{
		$request = parent::all();
		$request['code'] = ltrim($request['code'], '0');
		return $request;
	}
	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{

		$rules = [
			'code' => 'required|Integer|unique:shipments',
			'sender_id' => 'required|Integer',
			'reciber_id' => 'required|Integer|different:sender_id',
			'description' => 'String',
			'estado' => 'Integer'
		];

		return $rules;

	}

}
