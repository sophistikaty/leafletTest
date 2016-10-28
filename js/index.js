
$(document).ready(function(){

	'use strict';

  	console.log('ready');

  	var s = 'pk.eyJ1Ijoic29waGlzdGlrYXR5IiwiYSI6ImNpdXRweTRlNTAxa3oyenBzNWdqdmV1NXEifQ.zjnt23S1U5xRu7Fg6JLq8g';
  	var t = 'pk.eyJ1Ijoic29waGlzdGlrYXR5IiwiYSI6ImNpdXRweG11bzAxcW0zMW4wdmFpMnd3NmcifQ.ZF8dDEn9onzvvffhhdkxhQ';

  	
  	console.log(L);

  	var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  	 L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=' + t, {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'your.mapbox.project.id',
	    accessToken: t
	}).addTo(mymap);

  	 //I hate inline css
  	$('#mapid').attr('style', '');
	

});