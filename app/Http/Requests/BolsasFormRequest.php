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
		$shipment = count($this->request->get('shipment_id'));


		if($this->method == 'PUT'){
			if($shipment > 1)
			{
				$edit = [
					'envios_establecimiento_id' => 'interger',
					'destino_id' => 'integer',
					'establecimiento_id' => 'integer'
				];

				foreach($this->request->get('shipment_id') as $key => $val)
				{
					$edit['shipment_id.'.$key] = 'required|max:10';
				}
			} else {
				$edit = ['shipment_id' => 'required'];
			}

			return $edit;
		} else {

			if($shipment > 1)
			{
				$create = [
					'code' => "required|integer|unique:bolsas",
					'envios_establecimiento_id' => 'interger',
					'destino_id' => 'integer',
					'establecimiento_id' => 'integer'
				];
				foreach($this->request->get('shipment_id') as $key => $val)
				{
					$create['shipment_id.'.$key] = 'required|max:10';
				}
			}else {
				$create = ['shipment_id' => 'required'];
			}
			return $create;
		}
	}

}
