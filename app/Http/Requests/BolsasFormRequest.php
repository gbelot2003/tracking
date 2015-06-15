<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class BolsasFormRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	public function messages()
	{
		$messages = [];
		foreach($this->request->get('shipment_id') as $key => $val)
		{
			$messages['items.'.$key.'.max'] = 'The field labeled "Book Title '.$key.'" must be less than :max characters.';
		}
		return $messages;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{

		if($this->method == 'PUT'){
			$edit = [

				'envios_establecimiento_id' => 'interger',
				'destino_id' => 'integer',
				'establecimiento_id' => 'integer'
			];

			return $edit;
		} else {

			$create = [
				'code' => "required|integer|unique:bolsas",
				'envios_establecimiento_id' => 'interger',
				'destino_id' => 'integer',
				'establecimiento_id' => 'integer'
			];

			return $create;
		}
	}

}
