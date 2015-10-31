$(function(){
	var sun = $('#sun'),
		earth = $('#earth'),
		moon = $('#moon'),
		framerate = 24;
		earth.angle = 0;
		moon.angle = 0;
		earth.vitesse = Math.PI/16; 	//radian par seconde
		moon.vitesse = earth.vitesse * 12;	//radian par seconde

	setInterval(function(){
		/* incrementation des angle */
		earth.angle = earth.angle + earth.vitesse/framerate;
		moon.angle = moon.angle + moon.vitesse/framerate;

		/* Positionnement de la terre par rapport au Soleil */
		Math.radial.changeOrigin(parseInt(sun.attr('cx')), parseInt(sun.attr('cy')));
		var posEarth = Math.radial.toXY(100, earth.angle);
		earth.attr({
			cx : posEarth.x,
			cy : posEarth.y
		});

		/* positionnement de la lune par rapport à la Terre */
		Math.radial.changeOrigin(posEarth.x, posEarth.y);
		var posMoon = Math.radial.toXY(10, moon.angle );
		moon.attr({
			cx : posMoon.x,
			cy: posMoon.y
		});
		/**/

	},1000/framerate);


});

