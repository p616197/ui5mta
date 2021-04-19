/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ns/products/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
