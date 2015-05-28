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


});