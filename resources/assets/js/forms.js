(function(){
    $.ajaxSetup({global:true});
    $(document).ajaxStart(function(e) {
        $("#loading").show();
    });

    $(document).ajaxStop(function(e) {
        $("#loading").hide();
    });

    jQuery(document).ready(function(){
        $('a#firma').colorbox();
        $('a#foto').colorbox();
        $('#establecimiento-select').select2({ placeholder: 'Escoge una Sucursal' });
        $('#secciones-select').select2({ placeholder: 'Escoge una Sección' });
        $('#cargo-select').select2({ placeholder: 'Escoge una Sección' });
        $('#dept-select').select2();
        $('#tipo-select').select2();
        $('#sender-select').select2({ placeholder: "Select a state" });
        $('#rol-select').select2({placeholder: 'Escoge un permiso'});

        /** establecimientos.create/edit form script **/
        var mid = $("#dept-select option:selected").val();
        $('#municipios').load("/querys/municipios/" + mid, function(){ $('#munic-select').select2(); });
        $('#dept-select').on('change', function(){
            var mid = $("#dept-select option:selected").val();
            $('#municipios').load("/querys/municipios/" + mid, function(){ $('#munic-select').select2(); });
        });

        /** shipments.create/edit form script **/
        $("#location-select").select2();
        var establecimiento =$("#location-select option:selected").val();
        $('#trader-content').load('/querys/traderlocation/' + establecimiento, function(){$('#reciver-select').select2(); });
        $("#location-select").on('change', function () {
            var establecimiento =$("#location-select option:selected").val();
            $('#trader-content').load('/querys/traderlocation/' + establecimiento, function(){$('#reciver-select').select2(); });
        });

        /** user.create/edit form script **/
        var empresa_id =$("#empresa-select option:selected").val();
        $('#establecimientos-content').load('/listados/establecimientos/' + empresa_id, function(){$('#establecimiento-select').select2(); });
        $("#empresa-select").on('change', function () {
            var empresa_id =$("#empresa-select option:selected").val();
            $('#establecimientos-content').load('/listados/establecimientos/' + empresa_id, function(){$('#establecimiento-select').select2(); });
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
        /***crear perfil en shipments.create */
        $('#cerrar-perfil').hide();
        $('#perfil').on('click', function(e){
            e.preventDefault();
            $(this).hide();
            $('#cerrar-perfil').show(function(){
                $(this).on('click', function(e){
                    e.preventDefault();
                    $('#cerrar-perfil').hide();
                    $('#create-form').slideUp();
                    $('#perfil').show('slow');
                });
            });
            $('#create-form').load('/personal/create', function(){
                $(this).slideDown().css({'background' : '#EEEEEE', 'margin-bottom':'3rem'});
                $('#main_form').val(2);
                $('#establecimiento-select').select2({ placeholder: 'Escoge una Sucursal' });
                $('#secciones-select').select2({ placeholder: 'Escoge una Sección' });
                $('#establecimiento').on('click', function(e){
                    e.preventDefault();
                    $(this).colorbox({
                        onComplete: function loadMunic(){
                            var mid = $("#dept-select option:selected").val();
                            $('#municipios').load("/querys/municipios/" + mid);
                            $('#dept-select').on('change', function(){
                                var mid = $("#dept-select option:selected").val();
                                $('#municipios').load("/querys/municipios/" + mid);
                            });
                        }
                    });

                });
            });
        });
    });
})();
