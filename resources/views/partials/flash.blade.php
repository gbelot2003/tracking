@if(Session::has('flash_message'))
<div class="alert alert-success {{Session::has('flash_message_important') ? 'alert-danger' : ''}} ">
	<button class="close" type="button" data-dismiss="alert" aria-hidden="true">&times;</button>
	{{Session('flash_message')}}
</div>
@endif