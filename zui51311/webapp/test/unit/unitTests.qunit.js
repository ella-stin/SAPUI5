/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"iitp/zui51311/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
