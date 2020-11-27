sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("EmployeeDisplay.App", {
		onPress : function () {
			MessageToast.show("Mitarbeiterdaten wurden geladen.");
		}
	});

});