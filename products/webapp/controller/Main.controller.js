sap.ui.define([
    './BaseController',
    "sap/ui/core/mvc/Controller",
    'com/ns/products/js/formatter',
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,
        Controller,
        formatter) {
        "use strict";

        return BaseController.extend("com.ns.products.controller.Main", {
            formatter: formatter,
            onInit: function () {
                var that = this;
                // @ts-ignore
                $.ajax({
                    url: "/products.comnsproducts/Northwind_Dest/V3/Northwind/Northwind.svc/Suppliers?$format=json",
                    method: "GET",
                    async: false,
                    success: function (result, xhr, data) {
                        alert("success");
                    },
                    error: function(err){
                        alert('error');
                    }
                });                
               this.setData();
            },

            setData: function () {
                this.MRef = this.getModel("MRef");
                var xData = [
                    {
                        WBSElement: "P-100131", BucketDesc: "BucketDesc 1", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "77.5",
                        WBSElementArr: [
                            { WBSElement: "P-100132", BucketDesc: "BucketDesc 2", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "22.5" },
                            { WBSElement: "P-100133", BucketDesc: "BucketDesc 3", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "31.24" }
                        ]
                    },
                    {
                        WBSElement: "P-100232", BucketDesc: "BucketDesc 4", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "11.2",
                        WBSElementArr: [

                        ]
                    },
                    {
                        WBSElement: "P-500562", BucketDesc: "BucketDesc 5", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "12.35",
                        WBSElementArr: [
                            { WBSElement: "P-500563", BucketDesc: "BucketDesc 6", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "32.5" },
                            { WBSElement: "P-500564", BucketDesc: "BucketDesc 7", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "41.54" }
                        ]
                    },
                    {
                        WBSElement: "P-700772", BucketDesc: "BucketDesc 8", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "234.45",
                        WBSElementArr: [
                            { WBSElement: "P-700773", BucketDesc: "BucketDesc 9", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "22.98" },
                            { WBSElement: "P-700774", BucketDesc: "BucketDesc 10", GLAccount: "54991000", GLAccountDesc: "AAR MT Pool Car Rprs", CostCntr: "15311", CostCntrDesc: "GEN CHARGES & CREDITS-CAR", Amount: "0.56" }
                        ]
                    }
                ];
                this.MRef.setData(xData);
                this.setAmount();
                this.MRef.refresh();
            },

            ttToggleOpenState: function (e) {

            },

            setAmount: function () {
                var gTotal = 0.00;
                for (var outer = 0; outer < this.MRef.getData().length; outer++) {
                    var omData = this.MRef.getData()[outer];
                    var oiData = omData.WBSElementArr;
                    var inTotal = 0.00;
                    for (var inner = 0; inner < oiData.length; inner++) {
                        var oixData = oiData[inner];
                        inTotal += parseFloat(oixData.Amount);
                    }
                    omData.Amount = inTotal.toFixed(2);
                    gTotal += inTotal;
                }
                this.MRef.setProperty('/gTotal', gTotal);
                this.MRef.refresh();
            },

            onCollapseAll: function (e) {
                var oTable = this.getView().byId("TreeTableBasic");
                oTable.collapseAll();
            },

            onExpandAll: function (e) {
                var oTable = this.getView().byId("TreeTableBasic");
                oTable.expandToLevel(this.MRef.getData().length);
            },
        });
    });
