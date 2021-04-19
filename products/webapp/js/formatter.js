sap.ui.define([], function() {
	"use strict";

	return {
		formatter: this,
		
		fnTColor: function(sValue) {
			try{
				var fValue = parseFloat(sValue);
				if(fValue <= 0.00)
					return 'Error';
				else
					return "Success";
			}catch(err){
				return 'None';
			}
		},
		


		
	};
});