!function(a){var t=Math.random;a.Math.random=function(a,r){return a&&r?0==a?t()*r:a+t()*(r-a):a&&!r?Array.isArray(a)?a[Math.round((a.length-1)*t())]:t()*a:t()},a.Math.distance=function(a,t,r,n){var h,i=0;return h=r-a,h*=h,i=n-t,i*=i,Math.sqrt(h+i)},a.Math.direction=function(a,t){return(t-a)/Math.abs(t-a)},a.Math.angle=function(a,t,r,n){return Math.atan((n-t)/(r-a))},a.Math.radToDegree=function(a){return 180*a/Math.PI},a.Math.degreeToRad=function(a){return Math.PI*a/180},a.Math.radial={xc:0,yc:0,changeOrigin:function(a,t){Math.radial.xc=a,Math.radial.yc=t},toXY:function(a,t){var r,n,h,i;return r=a*Math.cos(t),n=a*Math.sin(t),r=r,n=-n,h=r+Math.radial.xc,i=n+Math.radial.yc,{x:h,y:i}},toPolar:function(a,t){var r,n;return a-=Math.radial.xc,t-=Math.radial.yc,t=-t,r=Math.sqrt(a*a+t*t),n=2*Math.atan(t/(a+r)),{r:r,a:n}}}}(window);