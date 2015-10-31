$(function(){
	var sun = $('#sun'),
		framerate = 24;
	
	function svgResize(){
		var w = $(document).width();
		var h = $(document).height();
		$('svg').css({
			width:w,
			height:h
		});
		/**/
		sun.data('position', {
			x: w/2,
			y: h/2
		}).attr({
			cx: w/2,
			cy: h/2
		});
	}
	$(window).resize(svgResize);
	svgResize();
	
	//Math.radial.changeOrigin(parseInt(sun.attr('cx')), parseInt(sun.attr('cy')));
	setInterval(function(){
		$('circle[data-rayon]').each(function(){

			//définis les variables
			var planete = $(this),
				angle = planete.data('angle') || 0,
				rayon = planete.data('rayon') || 0,
				vitesse = planete.data('vitesse') || 0,
				satelliteTo = planete.data('satelliteto') || '#sun';

			//définis l'origine de la rotation
			var origin = $(satelliteTo).data('position');
			Math.radial.changeOrigin(origin.x, origin.y);

			//met à jour les variable
			var angle = angle + vitesse/framerate,
				position =  Math.radial.toXY(rayon, angle);
			planete.data('position', position);
			planete.data('angle', angle);
			
			//Insere les modification dans la page
			planete.attr({
				cx: position.x,
				cy: position.y
			})
		});
	},1000/framerate);

});

