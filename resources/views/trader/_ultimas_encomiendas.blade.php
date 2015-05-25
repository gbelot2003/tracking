	<h3>Ultimas Encomiendas</h3>
	<!-- Nav tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Recividas/Esperando</a></li>
		<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Envios</a></li>
	</ul>
	<div class="tab-content">
		<div role="tabpanel" class="tab-pane active" id="home">
			<h4>Recividas/Esperando</h4>
			@include('trader._reciver_table')
		</div>
		<div role="tabpanel" class="tab-pane" id="profile">
			<h4>Envios</h4>
			@include('trader._sender_table')
		</div>
	</div>
