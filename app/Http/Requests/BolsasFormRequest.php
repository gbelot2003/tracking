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
	 * rewritte all function
	 * @return array
	 */
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

		if($this->method == 'PUT'){
			$edit = [
				'establecimiento_envio_id' => 'integer',
				'establecimiento_recive_id' => 'integer',
				'establecimiento_id' => 'integer'
			];

			return $edit;
		} else {

			$create = [
				'code' => "required|integer|unique:bolsas",
				'establecimiento_envio_id' => 'integer',
				'establecimiento_recive_id' => 'integer',
				'establecimiento_id' => 'integer'
			];

			return $create;
		}
	}

}
