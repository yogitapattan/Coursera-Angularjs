(function() {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuyItem = this;

	toBuyItem.toBuy = ShoppingListCheckOffService.getToBuyItem();

	toBuyItem.buyItem = function(index) {
		ShoppingListCheckOffService.buyItem(index);
	}

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var boughtItem = this;

	boughtItem.bought = ShoppingListCheckOffService.getBoughtItem();

}

function ShoppingListCheckOffService () {

	var service = this;
	var toBuy = [
		{
		   name: "Milk",
		   quantity: "2"
		},
		{
		   name: "Donuts",
		   quantity: "200"
		},
		{
		   name: "Cookies",
		   quantity: "300"
		},
		{
		   name: "Books",
		   quantity: "5"
		},
		{
		   name: "Pens",
		   quantity: "10"
		},
		{
		   name: "Chocolate",
		   quantity: "5"
		}
	];
	var bought = [];

	service.getToBuyItem = function() {
		return toBuy;
	}

	service.buyItem = function(index) {
		var item = {
			name: toBuy[index].name,
			quantity: toBuy[index].quantity
		};
		bought.push(item);
		toBuy.splice(index,1);
	}

	service.getBoughtItem = function() {
		return bought;
	}


}


})();