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

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		$create = [
			'code' => "integer|required",
			'envios_establecimiento_id' => 'interger',
			'establecimiento_id' => 'integer'
		];

		$edit = [
			'code' => "integer|required",
			'envios_establecimiento_id' => 'interger',
			'establecimiento_id' => 'integer'
		];

		if($this->method == 'PUT'){
			foreach($this->request->get('shipment_id') as $key => $val)
			{
				$create['shipment_id.'.$key] = 'required|max:10';
			}

			return $create;
		} else {
			foreach($this->request->get('shipment_id') as $key => $val)
			{
				$edit['shipment_id.'.$key] = 'required|max:10';
			}
			return $edit;
		}
	}

}
