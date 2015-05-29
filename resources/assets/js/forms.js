(function(){
    $.ajaxSetup({global:true});
    $(document).ajaxStart(function(e) {
        $("#loading").show();
    });

    $(document).ajaxStop(function(e) {
        $("#loading").hide();
    });
    jQuery(document).ready(function(){
        $('#sender-select').select2({ placeholder: "Select a state" });
        $('#reciver-select').select2({ placeholder: "Select a state" });
        $('#establecimiento-select').select2({ placeholder: 'Escoge una Sucursal' });
        $('#secciones-select').select2({ placeholder: 'Escoge una Sección' });
        $('#cargo-select').select2({ placeholder: 'Escoge una Sección' });
        $('#dept-select').select2();
        /** establecimientos.create/edit form script **/
        var mid = $("#dept-select option:selected").val();
        $('#municipios').load("/querys/municipios/" + mid, function(){ $('#munic-select').select2(); });
        $('#dept-select').on('change', function(){
            var mid = $("#dept-select option:selected").val();
                $('#municipios').load("/querys/municipios/" + mid, function(){ $('#munic-select').select2(); });
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
                $('#main_form').val(2)
                $('#establecimiento-select').select2({ placeholder: 'Escoge una Sucursal' });
                $('#secciones-select').select2({ placeholder: 'Escoge una Sección' });
            });
        });
    });
})();
