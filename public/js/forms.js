!function () {
    $.ajaxSetup({global: !0}), $(document).ajaxStart(function (e) {
        $("#loading").show()
    }), $(document).ajaxStop(function (e) {
        $("#loading").hide()
    }), jQuery(document).ready(function () {
        $("a#firma").colorbox(), $("a#foto").colorbox(), $("#establecimiento-select").select2({placeholder: "Escoge una Sucursal"}), $("#secciones-select").select2({placeholder: "Escoge una Sección"}), $("#cargo-select").select2({placeholder: "Escoge una Sección"}), $("#dept-select").select2(), $("#tipo-select").select2(), $("#sender-select").select2({placeholder: "Select a state"}), $("#rol-select").select2({placeholder: "Escoge un permiso"});
        var e = $("#dept-select option:selected").val();
        $("#municipios").load("/querys/municipios/" + e, function () {
            $("#munic-select").select2()
        }), $("#dept-select").on("change", function () {
            var e = $("#dept-select option:selected").val();
            $("#municipios").load("/querys/municipios/" + e, function () {
                $("#munic-select").select2()
            })
        }), $("#location-select").select2();
        var t = $("#location-select option:selected").val();
        $("#trader-content").load("/querys/traderlocation/" + t, function () {
            $("#reciver-select").select2()
        }), $("#location-select").on("change", function () {
            var e = $("#location-select option:selected").val();
            $("#trader-content").load("/querys/traderlocation/" + e, function () {
                $("#reciver-select").select2()
            })
        });
        var c = $("#empresa-select option:selected").val();
        $("#establecimientos-content").load("/listados/establecimientos/" + c, function () {
            $("#establecimiento-select").select2()
        }), $("#empresa-select").on("change", function () {
            var e = $("#empresa-select option:selected").val();
            $("#establecimientos-content").load("/listados/establecimientos/" + e, function () {
                $("#establecimiento-select").select2()
            })
        }), $("form[data-ask-submit]").on("click", function (e) {
            e.preventDefault(), bootbox.dialog({
                message: "Estas seguro de enviar este transito correcto??",
                title: "Transito Correcto",
                buttons: {
                    success: {
                        label: "Enviar!", className: "btn-success", callback: function () {
                            $("form[data-ask-submit]").submit()
                        }
                    }
                }
            })
        }), $("#cerrar-perfil").hide(), $("#perfil").on("click", function (e) {
            e.preventDefault(), $(this).hide(), $("#cerrar-perfil").show(function () {
                $(this).on("click", function (e) {
                    e.preventDefault(), $("#cerrar-perfil").hide(), $("#create-form").slideUp(), $("#perfil").show("slow")
                })
            }), $("#create-form").load("/personal/create", function () {
                $(this).slideDown().css({
                    background: "#EEEEEE",
                    "margin-bottom": "3rem"
                }), $("#main_form").val(2), $("#establecimiento-select").select2({placeholder: "Escoge una Sucursal"}), $("#secciones-select").select2({placeholder: "Escoge una Sección"}), $("#establecimiento").on("click", function (e) {
                    e.preventDefault(), $(this).colorbox({
                        onComplete: function () {
                            var e = $("#dept-select option:selected").val();
                            $("#municipios").load("/querys/municipios/" + e), $("#dept-select").on("change", function () {
                                var e = $("#dept-select option:selected").val();
                                $("#municipios").load("/querys/municipios/" + e)
                            })
                        }
                    })
                })
            })
        })
    })
}();