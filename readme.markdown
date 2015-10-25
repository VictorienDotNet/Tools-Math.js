#Dopé votre function Math en javascript et prototypé plus rapidement

La fonction ‘Math’ en JavaScript se retrouve plus limitée que les possibilités de son coussin le *Processing*. C’est pourquoi ce script ajoute directement à la fonction ‘Math’ des fonctions de calcul courant et bien utile pour le prototypage ou le dessin génératif.

##Ajouter le script
	<script src="http://link.victorien.net/math.js" ></script>	

##Le random
La fonction initiale ‘Math.random()’ retourne exclusivement un chiffre compris entre 0 et 1. Voici quelques ajouts supplémentaires :

	Math.random(number)
	//Retourne un chiffre aléatoire compris entre 0 et le chiffre donné.

	Math.random(number,number)
	//Retourne un chiffre aléatoire compris entre ces deux nombres.

	Math.random(array)
	//Retourne une valeur piochée aléatoirement dans le tableau.

##La distance et direction
Calculer l’angle, la distance entre deux points ou encore le coefficient directeur :

	Math.distance(x1, y1, x2, y2)
	//Cacule la distance entre les deux points.

	Math.direction(x1, x2)
	//Calcule le coefficient directeur entre ces deux points.

	Math.angle(x1, y1, x2, y2)
	//Cacule l’angle en Radian entre ces deux points.

	Math.radToDegree()
	//Convertis une valeur initialement en radian en degré

	Math.degreeToRad()
	//Convertis une valeur initialement en degré en radian.

##Cordonné polaire
Caculer la position d’un point en fonction de ses coordonnées polaires peut se révéler pratique. Voici donc une série de fonctions qui facilite cette méthode :

Initialement le point d’origine se trouve en (0,0) soit dans le coin supérieur gauche de l’écran. Si vous souhaitez modifier la position du point d’origine pour les coordonnées polaire, vous pouvez le faire grâce à cette fonction :

	Math.radial.changeOrigin(x, y)


Il est aussi possible de convertis des coordonnées polaires (angle, rayon) en coordonnées cartésiennes (x, y) ou l'inverse
	
	Math.radial.toXY(rayon, angle)
	//coordonnées polaire vers coordonnées cartésiennes
	//retourne un objet du type {r:number, a:number}

	Math.radial.toPolar(x,y)
	//coordonnées cartésiennes vers coordonnées polaire
	//retourne un objet du type {x:number, y:number}
	