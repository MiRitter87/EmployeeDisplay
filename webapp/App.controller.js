sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("EmployeeDisplay.App", {
		onPress : function () {
			
			var oModel = new sap.ui.model.json.JSONModel();
			var aData = jQuery.ajax({type : "GET", contentType : "application/json", 
				url : "http://127.0.0.1:8080/backend/services/rest/employees/1", dataType : "json", 
				success : function(data,textStatus, jqXHR) {
					oModel.setData({modelData : data}); // not aData
					MessageToast.show("Mitarbeiterdaten wurden geladen.");
				}                                                                                                              
			});                                                                 
			
			this.getView().setModel(oModel);
		}
	});

});