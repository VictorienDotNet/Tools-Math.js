(function(parent){	
	//function random
	var copyRandom = Math.random;
	parent.Math.random = function(a, b){
		if(a && b){
			if(a==0){
				return copyRandom() * b;
			}else{
				return a + copyRandom() * ( b - a );
			}
		}else if(a && !b){
			if(Array.isArray(a)){
				return a[Math.round((a.length-1) * copyRandom())];
			}else{
				return copyRandom() * a;
			}
		}else{
			return copyRandom();	
		}	
	}
	
	//function distance
	parent.Math.distance = function(x1, y1, x2, y2){
		var xs, ys = 0;
	
		xs = x2 - x1;
		xs = xs * xs;
 
		ys = y2 - y1;
  		ys = ys * ys;
 
		return Math.sqrt( xs + ys );
	}

	//function sens
	parent.Math.direction = function(x1, x2){
		return ( x2 - x1 ) / Math.abs( x2 - x1 );
	}

	//Cacule l'ange entre deux point
	parent.Math.angle = function(x1, y1, x2, y2){
		return Math.atan( ( y2 - y1 ) / ( x2 - x1 ) );
	}
	
	// Passer d'un angle en radian à un angle en degree
	parent.Math.radToDegree = function(a){
		return 180 * a / Math.PI;
	}
	
	// Passer d'un angle en degree à radian
	parent.Math.degreeToRad = function(a){
		return Math.PI * a / 180;
	}
	
	//Passer de coordonnés cartésienne à des coordonnés polaire
	parent.Math.radial = {
		xc:0,
		yc:0,
		changeOrigin : function(x, y){
			Math.radial.xc = x;
			Math.radial.yc = y;
		},
		toXY : function(r, a){
			var xa, ya, xb, yb;
			
			xa= r * Math.cos( a);
			ya= r * Math.sin(a);
	
			//Invertion du repere
			xa = xa;
			ya = -ya; 
	
			//Changement de repere
			xb = xa + Math.radial.xc ;
			yb = ya + Math.radial.yc ;
			
			return { x:xb, y:yb }
		
		},
		toPolar : function(x, y){
			var R, A;
			
			//Changement de repere
			x = x - Math.radial.xc ;
			y = y - Math.radial.yc ;
			
			//Invertion du repere
			y = -y;
			
			R = Math.sqrt( x * x + y * y);
			A = 2 * Math.atan(y / ( x + R ));
			
			return { r:R, a:A }
		}
		
	}
	
})(window);



