module.exports = function(app){
	app.service('estadosService', function(){
		return {
			estado_paquetes:[
		        {id: 2, name:'Transito, regular', description: 'La encomienda a ingresado a la linea de entragas y esta en manos de la empresa de mensajeria.'},
		        {id: 3, name:'Transito, Centro de acopio', description: 'La encomienda a ingresado a el centro de acopio descrito.'},
		        {id: 4, name:'Transito, en bolsa de transporte', description: 'El paquete a ingresado a una bolsa para su traslado a destinos posteriores o su entrega.'},
		        {id: 5, name:'Transito, presenta daños ligeros', description: 'La encomienda presenta algun tipo de daños.'},
		        {id: 6, name:'Transito, presenta daños graves', description:'La encomienda presenta daños severos, sellos violentados, ruturas, contenido roto etc.'},
		        {id: 7, name:'Entregada a terceros - Transitos continuan', description:'La encomienda a pasado a manos de terseras personas o empresas para su manejo y entrega en otra agencia del banco.'},
		        {id: 8, name:'Extraviado', description:'La encomienda se a extraviado en algun punto en la linea de transito'},
		        {id: 9, name:'Robado', description:'El paquete a sido robado.'},
		        {id: 10, name:'Dañado por completo', description:'La encomienda a sido dañada y su contenido esta inutilizado'},
		        {id: 11, name:'Entregado y Cerrado', description:'La encomienda a sido entregada sin observaciones'},
		        {id: 12, name:'Entregado con observaciones', description:'La encomienda a sido entregada y hay observaciones en su entrega'},
		        {id: 13, name:'Entregado a terceros, entrega final', description:'Se entrega a otra empresa de mensajería o a personal autorizados por la empresa para entregar la encomienda en su destino. La encomiendas salieron definitivamente del sistema.'}
			]
		}
    });
};