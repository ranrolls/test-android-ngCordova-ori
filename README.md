	----------------------------------------------------------------------------------	
v0.0.5
	divided mobile-angularUi in modules
	still persisting error of left side menu not working
	
	----------------------------------------------------------------------------------
v0.0.4
	left side menu require some manual fix
	
	----------------------------------------------------------------------------------
v0.0.3
	Implementation of mobile-angularUi  
	----------------------------------------------------------------------------------
v0.0.2	 + android
Possible errors & their solutions
	https://greatwebist.wordpress.com/2015/02/04/grunt-js-injector-error-for-generator-angularjs-cordova/
	
	Add 
		lineEnding: grunt.util.linefeed,
	in Gruntfile.js line no. 195
	in 	injection -> options like
	
	.....
	injector: {
		options: {
			lineEnding: grunt.util.linefeed,
			addRootSlash: false,
			....
	.....
	
	----------------------------------------------------------------------------------
v0.0.1	grunt + cordova + ng

https://www.npmjs.com/package/generator-angularjs-cordova
# AngularJS Cordova generator
[![Build Status](https://travis-ci.org/keshavos/generator-angularjs-cordova.svg)](https://travis-ci.org/keshavos/generator-angularjs-cordova)
[![NPM](https://nodei.co/npm/generator-angularjs-cordova.png?downloads=true)](https://nodei.co/npm/generator-angularjs-cordova/)
