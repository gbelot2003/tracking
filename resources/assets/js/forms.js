(function(){
    jQuery(document).ready(function(){

        $('#sender-select').select2({
            placeholder: "Select a state"
        });
        $('#reciver-select').select2({
            placeholder: "Select a state"
        });
        $('#establecimiento-select').select2({
            placeholder: 'Escoge una Sucursal'
        });
        $('#secciones-select').select2({
            placeholder: 'Escoge una Sección'
        });
        $('#cargo-select').select2({
            placeholder: 'Escoge una Sección'
        });

        $(document).ready(function(){
            $('#table').DataTable({
                processing: true,
                serverSide: true,
                ajax: '{{ URL::to("listados/personal") }}',
                columns: [
                    {data: 'last_name', name: 'traders.last_name'},
                    {data: 'first_name', name: 'traders.first_name'},
                    {data: 'name', name: 'establecimientos.name'},
                    {data: 'seccion', name: 'seccions.name'},
                    {data: 'Operaciones', name: 'acciones', searchable: false},
                ]
            });
        });

        /** Shipments.show form script **/
        $('form[data-ask-submit]').on('click', function(e){
            e.preventDefault();
            bootbox.dialog({
                message: "Estas seguro de enviar este transito correcto??",
                title: "Transito Correcto",
                buttons: {
                    success: {
                        label: "Enviar!",
                        className: "btn-success",
                        callback: function() {
                            $('form[data-ask-submit]').submit();
                        }
                    }
                }
            });
        });
        /** establecimientos.create/edit form script **/
        jQuery(document).ready(function(){
            var mid = $("#dept-select option:selected").val();
            $('#municipios').load("/querys/municipios/" + mid, function(){
                $('#munic-select').select2();
            });

            $('#dept-select').on('change', function(){
                var mid = $("#dept-select option:selected").val();
                $('#municipios').load("/querys/municipios/" + mid, function(){
                    $('#munic-select').select2();
                });
            });
        });

        $('#dept-select').select2();
    });
})();
