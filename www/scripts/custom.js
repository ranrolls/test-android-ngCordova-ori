!function(){"use strict";angular.module("mobile-angular-ui.gestures.drag",["mobile-angular-ui.gestures.touch","mobile-angular-ui.gestures.transform"]).provider("$drag",function(){this.$get=["$touch","$transform",function(t,e){var n=document.createElement("style");n.appendChild(document.createTextNode("")),document.head.appendChild(n);var r=n.sheet;return r.insertRule("html .ui-drag-move{z-index: 99999 !important;}",0),r.insertRule("html .ui-drag-move{-webkit-transition: none !important;-moz-transition: none !important;-o-transition: none !important;-ms-transition: none !important;transition: none !important;}",0),r.insertRule("html .ui-drag-move, html .ui-drag-move *{-webkit-touch-callout: none !important;-webkit-user-select: none !important;-khtml-user-select: none !important;-moz-user-select: none !important;-ms-user-select: none !important;user-select: none !important;}",0),n=r=null,{NULL_TRANSFORM:function(t,e){return e},TRANSLATE_BOTH:function(t,e,n){return e.translateX=n.distanceX,e.translateY=n.distanceY,e},TRANSLATE_HORIZONTAL:function(t,e,n){return e.translateX=n.distanceX,e.translateY=0,e},TRANSLATE_UP:function(t,e,n){return e.translateY=n.distanceY<=0?n.distanceY:0,e.translateX=0,e},TRANSLATE_DOWN:function(t,e,n){return e.translateY=n.distanceY>=0?n.distanceY:0,e.translateX=0,e},TRANSLATE_LEFT:function(t,e,n){return e.translateX=n.distanceX<=0?n.distanceX:0,e.translateY=0,e},TRANSLATE_RIGHT:function(t,e,n){return e.translateX=n.distanceX>=0?n.distanceX:0,e.translateY=0,e},TRANSLATE_VERTICAL:function(t,e,n){return e.translateX=0,e.translateY=n.distanceY,e},TRANSLATE_INSIDE:function(t){return t=t.length?t[0]:t,function(e,n,r){e=e.length?e[0]:e;var a,o,i=e.getBoundingClientRect(),u=t instanceof Element?t.getBoundingClientRect():t;return a=i.width>=u.width?0:i.right+r.stepX>u.right?u.right-i.right:i.left+r.stepX<u.left?u.left-i.left:r.stepX,o=i.height>=u.height?0:i.bottom+r.stepY>u.bottom?u.bottom-i.bottom:i.top+r.stepY<u.top?u.top-i.top:r.stepY,n.translateX+=a,n.translateY+=o,n}},bind:function(n,r,a){n=angular.element(n),r=r||{},a=a||{};var o,i,u=r.start,s=r.end,c=r.move,l=r.cancel,f=r.transform||this.TRANSLATE_BOTH,v=n[0],m=e.get(n),d=v.getBoundingClientRect(),g=!1,h=function(){return g},p=function(){g=!1,o=i=null,n.removeClass("ui-drag-move")},X=function(){e.set(v,m)},Y=function(){e.set(v,o||m)},T=function(){g=!0,i=v.getBoundingClientRect(),o=e.get(v),n.addClass("ui-drag-move")},b=function(t){return t=angular.extend({},t),t.originalTransform=m,t.originalRect=d,t.startRect=i,t.rect=v.getBoundingClientRect(),t.startTransform=o,t.transform=e.get(v),t.reset=X,t.undo=Y,t},w=function(t,r){if(r.preventDefault(),h()){t=b(t);var a=f(n,angular.extend({},t.transform),t,r);e.set(v,a),c&&c(t,r)}else T(),u&&u(b(t),r)},R=function(t,e){h()&&(e.__UiSwipeHandled__=!0,t=b(t),p(),s&&s(t,e))},E=function(t,e){h()&&(t=b(t),Y(),p(),l&&l(t,e))};return t.bind(n,{move:w,end:R,cancel:E},a)}}}]})}(),function(){"use strict";var t=angular.module("mobile-angular-ui.gestures.swipe",["mobile-angular-ui.gestures.touch"]);t.factory("$swipe",["$touch",function(t){var e=500,n=10,r=10,a=10,o=Math.abs,i={movementThreshold:n,valid:function(t){var n=o(t.angle);n=n>=90?n-90:n;var i=t.total-t.distance<=r,u=a>=n||n>=90-a,s=t.averageVelocity>=e;return i&&u&&s}};return{bind:function(e,n,r){return r=angular.extend({},i,r||{}),t.bind(e,n,r)}}}]),angular.forEach(["ui","ng"],function(e){angular.forEach(["Left","Right"],function(n){var r=e+"Swipe"+n;t.directive(r,["$swipe","$parse",function(t,e){return{link:function(a,o,i){var u=e(i[r]);t.bind(o,{end:function(t,e){t.direction===n.toUpperCase()&&(e.__UiSwipeHandled__||(e.__UiSwipeHandled__=!0,a.$apply(function(){u(a,{$touch:t})})))}})}}}])})})}(),function(){"use strict";var t=angular.module("mobile-angular-ui.gestures.touch",[]);t.provider("$touch",function(){var t=function(){return!0},e=1,n={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}},r=["mouse","touch"],a=function(t){return t[0].ownerDocument.documentElement.getBoundingClientRect()};this.setPointerEvents=function(t){n=t,r=Object.keys(n)},this.setValid=function(e){t=e},this.setMovementThreshold=function(t){e=t},this.setSensitiveArea=function(t){a=t};var o=Math.abs,i=Math.atan2,u=Math.sqrt,s=function(t){var e=t.touches&&t.touches.length?t.touches:[t],n=t.changedTouches&&t.changedTouches[0]||t.originalEvent&&t.originalEvent.changedTouches&&t.originalEvent.changedTouches[0]||e[0].originalEvent||e[0];return{x:n.clientX,y:n.clientY}},c=function(t,e){var r=[];return angular.forEach(t,function(t){var a=n[t][e];a&&r.push(a)}),r.join(" ")},l=function(){return new Date},f=function(t,e){return e=e||l(),o(e-t)},v=function(t,e){return u(t*t+e*e)},m=function(t,e,n,r){n=n||{},r=r||{};var a=l(),u=n.timestamp||a,s=r.timestamp||u,c=e.x,m=e.y,d=n.x||c,g=n.y||m,h=r.x||d,p=r.y||g,X=r.totalX||0,Y=r.totalY||0,T=X+o(c-h),b=Y+o(m-p),w=v(T,b),R=f(a,u),E=f(a,s),y=c-h,A=m-p,x=v(y,A),Z=c-d,_=m-g,k=v(Z,_),C=E>0?o(x/(E/1e3)):0,M=R>0?o(w/(R/1e3)):0,L=o(Z)>o(_)?0>Z?"LEFT":"RIGHT":0>_?"TOP":"BOTTOM",S=0!==Z||0!==_?i(_,Z)*(180/Math.PI):null;return S=-180===S?180:S,{type:t,timestamp:a,duration:R,startX:d,startY:g,prevX:h,prevY:p,x:e.x,y:e.y,step:x,stepX:y,stepY:A,velocity:C,averageVelocity:M,distance:k,distanceX:Z,distanceY:_,total:w,totalX:T,totalY:b,direction:L,angle:S}};this.$get=[function(){return{bind:function(n,o,i){n=angular.element(n),i=i||{};var u,l,f=i.pointerTypes||r,v=void 0===i.valid?t:i.valid,d=void 0===i.movementThreshold?e:i.valid,g=void 0===i.sensitiveArea?a:i.sensitiveArea,h=c(f,"start"),p=c(f,"end"),X=c(f,"move"),Y=c(f,"cancel"),T=o.start,b=o.end,w=o.move,R=o.cancel,E=angular.element(n[0].ownerDocument),y=function(){u=l=null,E.off(X,_),E.off(p,k),Y&&E.off(Y,Z)},A=function(){return!!u},x=function(t){t.touches&&t.touches.length>1||(l=u=m("touchstart",s(t)),E.on(X,_),E.on(p,k),Y&&E.on(Y,Z),T&&T(u,t))},Z=function(t){var e=m("touchcancel",s(t),u,l);y(),R&&R(e,t)},_=function(t){if(!(t.touches&&t.touches.length>1)&&A()){var e=s(t),r="function"==typeof g?g(n):g;r=r.length?r[0]:r;var a=r instanceof Element?r.getBoundingClientRect():r;if(!(e.x<a.left||e.x>a.right||e.y<a.top||e.y>a.bottom)){var o=m("touchmove",e,u,l),i=o.totalX,c=o.totalY;l=o,d>i&&d>c||v(o,t)&&((void 0===t.cancelable||t.cancelable)&&t.preventDefault(),w&&w(o,t))}}},k=function(t){if(!(t.touches&&t.touches.length>1)&&A()){var e=angular.extend({},l,{type:"touchend"});v(e,t)&&((void 0===t.cancelable||t.cancelable)&&t.preventDefault(),b&&setTimeout(function(){b(e,t)},0)),y()}};return n.on(h,x),function(){n&&(n.off(h,x),Y&&E.off(Y,Z),E.off(X,_),E.off(p,k),n=E=h=Y=X=p=x=Z=_=k=f=v=d=g=null)}}}}]})}(),function(){"use strict";var t=angular.module("mobile-angular-ui.gestures.transform",[]);t.factory("$transform",function(){for(var t,e,n,r=["","webkit","Moz","O","ms"],a=document.createElement("div"),o=0;o<r.length;o++){var i=r[o];if(i+"Perspective"in a.style){t=""===i?"":"-"+i.toLowerCase()+"-",n=i+(""===i?"transform":"Transform"),e=t+"transform";break}}a=null;var u=function(t){t=t.length?t[0]:t;var n=window.getComputedStyle(t,null).getPropertyValue(e);return n},s=function(t,e){t=t.length?t[0]:t,t.style[n]=e},c=1e-7,l=function(t){return 180*t/Math.PI},f=Math.sqrt,v=Math.asin,m=Math.atan2,d=Math.cos,g=Math.abs,h=Math.floor,p=function(t){for(var e=[[],[],[],[]],n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)e[n][r]=t[n][r];return e},X=function(t,e,n,r){return t*r-e*n},Y=function(t,e,n,r,a,o,i,u,s){return t*X(a,o,u,s)-r*X(e,n,u,s)+i*X(e,n,a,o)},T=function(t){var e=t[0][0],n=t[0][1],r=t[0][2],a=t[0][3],o=t[1][0],i=t[1][1],u=t[1][2],s=t[1][3],c=t[2][0],l=t[2][1],f=t[2][2],v=t[2][3],m=t[3][0],d=t[3][1],g=t[3][2],h=t[3][3];return e*Y(i,l,d,u,f,g,s,v,h)-n*Y(o,c,m,u,f,g,s,v,h)+r*Y(o,c,m,i,l,d,s,v,h)-a*Y(o,c,m,i,l,d,u,f,g)},b=function(t){var e=[[],[],[],[]],n=t[0][0],r=t[0][1],a=t[0][2],o=t[0][3],i=t[1][0],u=t[1][1],s=t[1][2],c=t[1][3],l=t[2][0],f=t[2][1],v=t[2][2],m=t[2][3],d=t[3][0],g=t[3][1],h=t[3][2],p=t[3][3];return e[0][0]=Y(u,f,g,s,v,h,c,m,p),e[1][0]=-Y(i,l,d,s,v,h,c,m,p),e[2][0]=Y(i,l,d,u,f,g,c,m,p),e[3][0]=-Y(i,l,d,u,f,g,s,v,h),e[0][1]=-Y(r,f,g,a,v,h,o,m,p),e[1][1]=Y(n,l,d,a,v,h,o,m,p),e[2][1]=-Y(n,l,d,r,f,g,o,m,p),e[3][1]=Y(n,l,d,r,f,g,a,v,h),e[0][2]=Y(r,u,g,a,s,h,o,c,p),e[1][2]=-Y(n,i,d,a,s,h,o,c,p),e[2][2]=Y(n,i,d,r,u,g,o,c,p),e[3][2]=-Y(n,i,d,r,u,g,a,s,h),e[0][3]=-Y(r,u,f,a,s,v,o,c,m),e[1][3]=Y(n,i,l,a,s,v,o,c,m),e[2][3]=-Y(n,i,l,r,u,f,o,c,m),e[3][3]=Y(n,i,l,r,u,f,a,s,v),e},w=function(t){var e=b(t),n=T(t);if(g(n)<c)return!1;for(var r=0;4>r;r++)for(var a=0;4>a;a++)e[r][a]=e[r][a]/n;return e},R=function(t){for(var e=[[],[],[],[]],n=0;4>n;n++)for(var r=0;4>r;r++)e[n][r]=t[r][n];return e},E=function(t,e){var n=[];return n[0]=t[0]*e[0][0]+t[1]*e[1][0]+t[2]*e[2][0]+t[3]*e[3][0],n[1]=t[0]*e[0][1]+t[1]*e[1][1]+t[2]*e[2][1]+t[3]*e[3][1],n[2]=t[0]*e[0][2]+t[1]*e[1][2]+t[2]*e[2][2]+t[3]*e[3][2],n[3]=t[0]*e[0][3]+t[1]*e[1][3]+t[2]*e[2][3]+t[3]*e[3][3],n},y=function(t){return f(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])},A=function(t,e){var n=[],r=y(t);if(0!==r){var a=e/r;n[0]*=a,n[1]*=a,n[2]*=a}return n},x=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},Z=function(t,e,n,r){var a=[];return a[0]=n*t[0]+r*e[0],a[1]=n*t[1]+r*e[1],a[2]=n*t[2]+r*e[2],a},_=function(t,e){var n=[];return n[0]=t[1]*e[2]-t[2]*e[1],n[1]=t[2]*e[0]-t[0]*e[2],n[2]=t[0]*e[1]-t[1]*e[0],n},k=function(t){var e,n,r={},a=p(t);if(0===a[3][3])return!1;for(e=0;4>e;e++)for(n=0;4>n;n++)a[e][n]/=a[3][3];var o=p(a);for(e=0;3>e;e++)o[e][3]=0;if(o[3][3]=1,0===T(o))return!1;if(0!==a[0][3]||0!==a[1][3]||0!==a[2][3]){var i=[];i[0]=a[0][3],i[1]=a[1][3],i[2]=a[2][3],i[3]=a[3][3];var u=w(o),s=R(u),c=E(i,s);r.perspectiveX=c[0],r.perspectiveY=c[1],r.perspectiveZ=c[2],r.perspectiveW=c[3],a[0][3]=a[1][3]=a[2][3]=0,a[3][3]=1}else r.perspectiveX=r.perspectiveY=r.perspectiveZ=0,r.perspectiveW=1;r.translateX=a[3][0],a[3][0]=0,r.translateY=a[3][1],a[3][1]=0,r.translateZ=a[3][2],a[3][2]=0;var f,g=[[],[],[]];for(e=0;3>e;e++)g[e][0]=a[e][0],g[e][1]=a[e][1],g[e][2]=a[e][2];if(r.scaleX=y(g[0]),A(g[0],1),r.skewXY=x(g[0],g[1]),Z(g[1],g[0],g[1],1,-r.skewXY),r.scaleY=y(g[1]),A(g[1],1),r.skewXY/=r.scaleY,r.skewXZ=x(g[0],g[2]),Z(g[2],g[0],g[2],1,-r.skewXZ),r.skewYZ=x(g[1],g[2]),Z(g[2],g[1],g[2],1,-r.skewYZ),r.scaleZ=y(g[2]),A(g[2],1),r.skewXZ/=r.scaleZ,r.skewYZ/=r.scaleZ,f=_(g[1],g[2]),x(g[0],f)<0)for(e=0;3>e;e++)r.scaleX*=-1,g[e][0]*=-1,g[e][1]*=-1,g[e][2]*=-1;return r.rotateY=l(v(-g[0][2]))||0,0!==d(r.rotateY)?(r.rotateX=l(m(g[1][2],g[2][2]))||0,r.rotateZ=l(m(g[0][1],g[0][0]))||0):(r.rotateX=l(m(-g[2][0],g[1][1]))||0,r.rotateZ=0),r},C=function(t,e){var n=t||e||0;return""+n.toFixed(20)},M=function(t,e){return C(t,e)+"px"},L=function(t,e){return C(t,e)+"deg"};return{fromCssMatrix:function(t){var e=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];if(t&&"none"!==t){var n=t.split("(")[1].split(")")[0].split(",").map(Number);if(t.match(/^matrix\(/))e[0][0]=n[0],e[1][0]=n[1],e[0][1]=n[2],e[1][1]=n[3],e[3][0]=n[4],e[3][1]=n[5];else for(var r=0;16>r;r++){var a=h(r/4),o=r%4;e[a][o]=n[r]}}return k(e)},toCss:function(t){var e=[C(t.perspectiveX),C(t.perspectiveY),C(t.perspectiveZ),C(t.perspectiveW,1)],n=[M(t.translateX),M(t.translateY),M(t.translateZ)],r=[C(t.scaleX),C(t.scaleY),C(t.scaleZ)],a=[L(t.rotateX),L(t.rotateY),L(t.rotateZ)],o=[C(t.skewXY),C(t.skewXZ),C(t.skewYZ)];return["matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+e.join(",")+")","translate3d("+n.join(",")+")","rotateX("+a[0]+") rotateY("+a[1]+") rotateZ("+a[2]+")","matrix3d(1,0,0,0,0,1,0,0,0,"+o[2]+",1,0,0,0,0,1)","matrix3d(1,0,0,0,0,1,0,0,"+o[1]+",0,1,0,0,0,0,1)","matrix3d(1,0,0,0,"+o[0]+",1,0,0,0,0,1,0,0,0,0,1)","scale3d("+r.join(",")+")"].join(" ")},get:function(t){return this.fromCssMatrix(u(t))},set:function(t,e){var n="string"==typeof e?e:this.toCss(e);s(t,n)}}})}(),function(){"use strict";angular.module("mobile-angular-ui.gestures",["mobile-angular-ui.gestures.drag","mobile-angular-ui.gestures.swipe","mobile-angular-ui.gestures.transform"])}();

'use strict';
    
    var app = angular.module('MobileAngularUiExamples', [ 'ngRoute', 
        'mobile-angular-ui', 'mobile-angular-ui.gestures' ]);
    
    app.run(function($transform) {
      window.$transform = $transform;
    });

   


/*

(function () {
    var app = angular.module('MobileAngularUiExamples', [
        'ngRoute',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures'
    ]);

    app.run('transform',[ '$transform', function ($transform) {
        window.$transform = $transform;
    }]);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'modules/core/views/home.html', reloadOnSearch: false});
        $routeProvider.when('/scroll', {templateUrl: 'modules/core/views/scroll.html', reloadOnSearch: false});
        $routeProvider.when('/toggle', {templateUrl: 'modules/core/views/toggle.html', reloadOnSearch: false});
        $routeProvider.when('/tabs', {templateUrl: 'modules/core/views/tabs.html', reloadOnSearch: false});
        $routeProvider.when('/accordion', {templateUrl: 'modules/core/views/accordion.html', reloadOnSearch: false});
        $routeProvider.when('/overlay', {templateUrl: 'modules/core/views/overlay.html', reloadOnSearch: false});
        $routeProvider.when('/forms', {templateUrl: 'modules/core/views/forms.html', reloadOnSearch: false});
        $routeProvider.when('/dropdown', {templateUrl: 'modules/core/views/dropdown.html', reloadOnSearch: false});
        $routeProvider.when('/touch', {templateUrl: 'modules/core/views/touch.html', reloadOnSearch: false});
        $routeProvider.when('/swipe', {templateUrl: 'modules/core/views/swipe.html', reloadOnSearch: false});
        $routeProvider.when('/drag', {templateUrl: 'modules/core/views/drag.html', reloadOnSearch: false});
        $routeProvider.when('/drag2', {templateUrl: 'modules/core/views/drag2.html', reloadOnSearch: false});
        $routeProvider.when('/carousel', {templateUrl: 'modules/core/views/carousel.html', reloadOnSearch: false});
    }]);

    app.directive('toucharea', ['$touch', function ($touch) {
            return {
                restrict: 'C',
                link: function ($scope, elem) {
                    $scope.touch = null;
                    $touch.bind(elem, {
                        start: function (touch) {
                            $scope.touch = touch;
                            $scope.$apply();
                        },
                        cancel: function (touch) {
                            $scope.touch = touch;
                            $scope.$apply();
                        },
                        move: function (touch) {
                            $scope.touch = touch;
                            $scope.$apply();
                        },
                        end: function (touch) {
                            $scope.touch = touch;
                            $scope.$apply();
                        }
                    });
                }
            };
        }]);
    app.directive('dragToDismiss',[ '$drag', '$parse', '$timeout', function ($drag, $parse, $timeout) {
        return {
            restrict: 'A',
            compile: function (elem, attrs) {
                var dismissFn = $parse(attrs.dragToDismiss);
                return function (scope, elem) {
                    var dismiss = false;

                    $drag.bind(elem, {
                        transform: $drag.TRANSLATE_RIGHT,
                        move: function (drag) {
                            if (drag.distanceX >= drag.rect.width / 4) {
                                dismiss = true;
                                elem.addClass('dismiss');
                            } else {
                                dismiss = false;
                                elem.removeClass('dismiss');
                            }
                        },
                        cancel: function () {
                            elem.removeClass('dismiss');
                        },
                        end: function (drag) {
                            if (dismiss) {
                                elem.addClass('dismitted');
                                $timeout(function () {
                                    scope.$apply(function () {
                                        dismissFn(scope);
                                    });
                                }, 300);
                            } else {
                                drag.reset();
                            }
                        }
                    });
                };
            }
        };
    }]);
    app.directive('carousel', function () {
        return {
            restrict: 'C',
            scope: {},
            controller: function () {
                this.itemCount = 0;
                this.activeItem = null;

                this.addItem = function () {
                    var newId = this.itemCount++;
                    this.activeItem = this.itemCount === 1 ? newId : this.activeItem;
                    return newId;
                };

                this.next = function () {
                    this.activeItem = this.activeItem || 0;
                    this.activeItem = this.activeItem === this.itemCount - 1 ? 0 : this.activeItem + 1;
                };

                this.prev = function () {
                    this.activeItem = this.activeItem || 0;
                    this.activeItem = this.activeItem === 0 ? this.itemCount - 1 : this.activeItem - 1;
                };
            }
        };
    });

    app.directive('carouselItem', ['$drag', function ($drag) {
        return {
            restrict: 'C',
            require: '^carousel',
            scope: {},
            transclude: true,
            template: '<div class="item"><div ng-transclude></div></div>',
            link: function (scope, elem, attrs, carousel) {
                scope.carousel = carousel;
                var id = carousel.addItem();

                var zIndex = function () {
                    var res = 0;
                    if (id === carousel.activeItem) {
                        res = 2000;
                    } else if (carousel.activeItem < id) {
                        res = 2000 - (id - carousel.activeItem);
                    } else {
                        res = 2000 - (carousel.itemCount - 1 - carousel.activeItem + id);
                    }
                    return res;
                };

                scope.$watch(function () {
                    return carousel.activeItem;
                }, function () {
                    elem[0].style.zIndex = zIndex();
                });

                $drag.bind(elem, {
                    transform: function (element, transform, touch) {
                        var t = $drag.TRANSLATE_BOTH(element, transform, touch);
                        var Dx = touch.distanceX,
                                t0 = touch.startTransform,
                                sign = Dx < 0 ? -1 : 1,
                                angle = sign * Math.min((Math.abs(Dx) / 700) * 30, 30);

                        t.rotateZ = angle + (Math.round(t0.rotateZ));

                        return t;
                    },
                    move: function (drag) {
                        if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
                            elem.addClass('dismiss');
                        } else {
                            elem.removeClass('dismiss');
                        }
                    },
                    cancel: function () {
                        elem.removeClass('dismiss');
                    },
                    end: function (drag) {
                        elem.removeClass('dismiss');
                        if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
                            scope.$apply(function () {
                                carousel.next();
                            });
                        }
                        drag.reset();
                    }
                });
            }
        };
    }]);

    app.directive('dragMe', ['$drag', function ($drag) {
            return {
                controller: function ($scope, $element) {
                    $drag.bind($element,
                            {
                                transform: $drag.TRANSLATE_INSIDE($element.parent()),
                                end: function (drag) {
                                    drag.reset();
                                }
                            },
                    {// release touch when movement is outside bounduaries
                        sensitiveArea: $element.parent()
                    }
                    );
                }
            };
        }]);
    app.controller('MainController',['$rootScope', '$scope', function ($rootScope, $scope) {

        $scope.swiped = function (direction) {
            alert('Swiped ' + direction);
        };
        $scope.userAgent = navigator.userAgent;
        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.loading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.loading = false;
        });
        $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';
        var scrollItems = [];

        for (var i = 1; i <= 100; i++) {
            scrollItems.push('Item ' + i);
        }

        $scope.scrollItems = scrollItems;

        $scope.bottomReached = function () {
            alert('Congrats you scrolled to the end of the list!');
        };
        $scope.chatUsers = [
            {name: 'Carlos  Flowers', online: true},
            {name: 'Byron Taylor', online: true},
            {name: 'Jana  Terry', online: true},
            {name: 'Darryl  Stone', online: true},
            {name: 'Fannie  Carlson', online: true},
            {name: 'Holly Nguyen', online: true},
            {name: 'Bill  Chavez', online: true},
            {name: 'Veronica  Maxwell', online: true},
            {name: 'Jessica Webster', online: true},
            {name: 'Jackie  Barton', online: true},
            {name: 'Crystal Drake', online: false},
            {name: 'Milton  Dean', online: false},
            {name: 'Joann Johnston', online: false},
            {name: 'Cora  Vaughn', online: false},
            {name: 'Nina  Briggs', online: false},
            {name: 'Casey Turner', online: false},
            {name: 'Jimmie  Wilson', online: false},
            {name: 'Nathaniel Steele', online: false},
            {name: 'Aubrey  Cole', online: false},
            {name: 'Donnie  Summers', online: false},
            {name: 'Kate  Myers', online: false},
            {name: 'Priscilla Hawkins', online: false},
            {name: 'Joe Barker', online: false},
            {name: 'Lee Norman', online: false},
            {name: 'Ebony Rice', online: false}
        ];
        $scope.rememberMe = true;
        $scope.email = 'me@example.com';

        $scope.login = function () {
            alert('You submitted the login form');
        };
        $scope.notices = [];

        for (var j = 0; j < 10; j++) {
            $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1)});
        }

        $scope.deleteNotice = function (notice) {
            var index = $scope.notices.indexOf(notice);
            if (index > -1) {
                $scope.notices.splice(index, 1);
            }
        };
    }]);

}());

*/


var app = angular.module('MobileAngularUiExamples');

 app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {templateUrl: 'modules/core/views/home.html'});
    $routeProvider.when('/scroll', {templateUrl: 'modules/core/views/scroll.html', reloadOnSearch: false});
    $routeProvider.when('/toggle', {templateUrl: 'modules/core/views/toggle.html', reloadOnSearch: false});
    $routeProvider.when('/tabs', {templateUrl: 'modules/core/views/tabs.html', reloadOnSearch: false});
    $routeProvider.when('/accordion', {templateUrl: 'modules/core/views/accordion.html', reloadOnSearch: false});
    $routeProvider.when('/overlay', {templateUrl: 'modules/core/views/overlay.html', reloadOnSearch: false});
    $routeProvider.when('/forms', {templateUrl: 'modules/core/views/forms.html', reloadOnSearch: false});
    $routeProvider.when('/dropdown', {templateUrl: 'modules/core/views/dropdown.html', reloadOnSearch: false});
    $routeProvider.when('/touch', {templateUrl: 'modules/core/views/touch.html', reloadOnSearch: false});
    $routeProvider.when('/swipe', {templateUrl: 'modules/core/views/swipe.html', reloadOnSearch: false});
    $routeProvider.when('/drag', {templateUrl: 'modules/core/views/drag.html', reloadOnSearch: false});
    $routeProvider.when('/drag2', {templateUrl: 'modules/core/views/drag2.html', reloadOnSearch: false});
    $routeProvider.when('/carousel', {templateUrl: 'modules/core/views/carousel.html', reloadOnSearch: false});

}]);



 
var app = angular.module('MobileAngularUiExamples');

app.directive('toucharea', ['$touch', function ($touch) {
        return {
            restrict: 'C',
            link: function ($scope, elem) {
                $scope.touch = null;
                $touch.bind(elem, {
                    start: function (touch) {
                        $scope.touch = touch;
                        $scope.$apply();
                    },
                    cancel: function (touch) {
                        $scope.touch = touch;
                        $scope.$apply();
                    },
                    move: function (touch) {
                        $scope.touch = touch;
                        $scope.$apply();
                    },
                    end: function (touch) {
                        $scope.touch = touch;
                        $scope.$apply();
                    }
                });
            }
        };
    }]);
app.directive('dragToDismiss',[ '$drag', '$parse', '$timeout', function ($drag, $parse, $timeout) {
    return {
        restrict: 'A',
        compile: function (elem, attrs) {
            var dismissFn = $parse(attrs.dragToDismiss);
            return function (scope, elem) {
                var dismiss = false;

                $drag.bind(elem, {
                    transform: $drag.TRANSLATE_RIGHT,
                    move: function (drag) {
                        if (drag.distanceX >= drag.rect.width / 4) {
                            dismiss = true;
                            elem.addClass('dismiss');
                        } else {
                            dismiss = false;
                            elem.removeClass('dismiss');
                        }
                    },
                    cancel: function () {
                        elem.removeClass('dismiss');
                    },
                    end: function (drag) {
                        if (dismiss) {
                            elem.addClass('dismitted');
                            $timeout(function () {
                                scope.$apply(function () {
                                    dismissFn(scope);
                                });
                            }, 300);
                        } else {
                            drag.reset();
                        }
                    }
                });
            };
        }
    };
}]);
app.directive('carousel', function () {
    return {
        restrict: 'C',
        scope: {},
        controller: function () {
            this.itemCount = 0;
            this.activeItem = null;

            this.addItem = function () {
                var newId = this.itemCount++;
                this.activeItem = this.itemCount === 1 ? newId : this.activeItem;
                return newId;
            };

            this.next = function () {
                this.activeItem = this.activeItem || 0;
                this.activeItem = this.activeItem === this.itemCount - 1 ? 0 : this.activeItem + 1;
            };

            this.prev = function () {
                this.activeItem = this.activeItem || 0;
                this.activeItem = this.activeItem === 0 ? this.itemCount - 1 : this.activeItem - 1;
            };
        }
    };
});

app.directive('carouselItem', ['$drag', function ($drag) {
    return {
        restrict: 'C',
        require: '^carousel',
        scope: {},
        transclude: true,
        template: '<div class="item"><div ng-transclude></div></div>',
        link: function (scope, elem, attrs, carousel) {
            scope.carousel = carousel;
            var id = carousel.addItem();

            var zIndex = function () {
                var res = 0;
                if (id === carousel.activeItem) {
                    res = 2000;
                } else if (carousel.activeItem < id) {
                    res = 2000 - (id - carousel.activeItem);
                } else {
                    res = 2000 - (carousel.itemCount - 1 - carousel.activeItem + id);
                }
                return res;
            };

            scope.$watch(function () {
                return carousel.activeItem;
            }, function () {
                elem[0].style.zIndex = zIndex();
            });

            $drag.bind(elem, {
                transform: function (element, transform, touch) {
                    var t = $drag.TRANSLATE_BOTH(element, transform, touch);
                    var Dx = touch.distanceX,
                            t0 = touch.startTransform,
                            sign = Dx < 0 ? -1 : 1,
                            angle = sign * Math.min((Math.abs(Dx) / 700) * 30, 30);

                    t.rotateZ = angle + (Math.round(t0.rotateZ));

                    return t;
                },
                move: function (drag) {
                    if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
                        elem.addClass('dismiss');
                    } else {
                        elem.removeClass('dismiss');
                    }
                },
                cancel: function () {
                    elem.removeClass('dismiss');
                },
                end: function (drag) {
                    elem.removeClass('dismiss');
                    if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
                        scope.$apply(function () {
                            carousel.next();
                        });
                    }
                    drag.reset();
                }
            });
        }
    };
}]);

app.directive('dragMe', ['$drag', function ($drag) {
        return {
            controller: function ($scope, $element) {
                $drag.bind($element,
                        {
                            transform: $drag.TRANSLATE_INSIDE($element.parent()),
                            end: function (drag) {
                                drag.reset();
                            }
                        },
                {// release touch when movement is outside bounduaries
                    sensitiveArea: $element.parent()
                }
                );
            }
        };
    }]);




var app = angular.module('MobileAngularUiExamples');
        app.run(function($transform) {
        window.$transform = $transform;
        });
        app.controller('MainController', ['$rootElement', '$rootScope', '$scope', function($rootElement,$rootScope, $scope){

        $scope.swiped = function(direction) {
        alert('Swiped ' + direction);
        };
                $scope.userAgent = navigator.userAgent;
                $rootScope.$on('$routeChangeStart', function(){
                $rootScope.loading = true;
                });
                $rootScope.$on('$routeChangeSuccess', function(){
                $rootScope.loading = false;
                });
                $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';
                var scrollItems = [];
                for (var i = 1; i <= 100; i++) {
        scrollItems.push('Item ' + i);
        }

        $scope.scrollItems = scrollItems;
                $scope.bottomReached = function() {
                alert('Congrats you scrolled to the end of the list!');
                };
                $scope.chatUsers = [
                { name: 'Carlos  Flowers', online: true },
                { name: 'Byron Taylor', online: true },
                { name: 'Jana  Terry', online: true },
                { name: 'Darryl  Stone', online: true },
                { name: 'Fannie  Carlson', online: true },
                { name: 'Holly Nguyen', online: true },
                { name: 'Bill  Chavez', online: true },
                { name: 'Veronica  Maxwell', online: true },
                { name: 'Jessica Webster', online: true },
                { name: 'Jackie  Barton', online: true },
                { name: 'Crystal Drake', online: false },
                { name: 'Milton  Dean', online: false },
                { name: 'Joann Johnston', online: false },
                { name: 'Cora  Vaughn', online: false },
                { name: 'Nina  Briggs', online: false },
                { name: 'Casey Turner', online: false },
                { name: 'Jimmie  Wilson', online: false },
                { name: 'Nathaniel Steele', online: false },
                { name: 'Aubrey  Cole', online: false },
                { name: 'Donnie  Summers', online: false },
                { name: 'Kate  Myers', online: false },
                { name: 'Priscilla Hawkins', online: false },
                { name: 'Joe Barker', online: false },
                { name: 'Lee Norman', online: false },
                { name: 'Ebony Rice', online: false }
                ];
                $scope.rememberMe = true;
                $scope.email = 'me@example.com';
                $scope.login = function() {
                alert('You submitted the login form');
                };
                $scope.notices = [];
                for (var j = 0; j < 10; j++) {
        $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1) });
        }

        $scope.deleteNotice = function(notice) {
        var index = $scope.notices.indexOf(notice);
                if (index > - 1) {
        $scope.notices.splice(index, 1);
        }
        };
        
        $scope.sidebarLeft = false;
        $scope.$watch('sidebarLeft', function() {
            if($scope.sidebarLeft){
                $rootElement.addClass('sidebar-left-visible');
            }else{
                $rootElement.removeClass('sidebar-left-visible');
            }
        });

}]);

