(function(){
    jQuery(document).ready(function(){
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
