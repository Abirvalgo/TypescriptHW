"use strict";
exports.__esModule = true;
var users = [
	{
		name: "Harry Felton",
		phone: "(09) 897 33 33",
		email: "felton@gmail.com",
		animals: ["cat"],
		cars: ["bmw"],
		hasChildren: false,
		hasEducation: true,
	},
	{
		name: "May Sender",
		phone: "(09) 117 33 33",
		email: "sender22@gmail.com",
		hasChildren: true,
		hasEducation: true,
	},
	{
		name: "Henry Ford",
		phone: "(09) 999 93 23",
		email: "ford0@gmail.com",
		cars: ["bmw", "audi"],
		hasChildren: true,
		hasEducation: false,
	},
];
//1 Имена через запятую
var usersFunc = function () {
	var usersName = users.map(function (item) {
		return item.name;
	});
	return usersName.join(",");
};
console.log(usersFunc());
//2 Количество машин у пользователей
var carsNumber = function (arr) {
	var res = [];
	arr.forEach(function (item) {
		if (item.cars) {
			res.push(item.cars);
		}
	});
	return res.flat().length;
};
console.log(carsNumber(users));
//3 Проверка на наличие образования
var checkEducation = function (arr, education) {
	var edCheck = arr
		.filter(function (item) {
			return item.hasEducation === education;
		})
		.map(function (item) {
			return item.name;
		})
		.join(", ");
	if (education) {
		return "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0435\u0441\u0442\u044C : ".concat(
			edCheck
		);
	} else {
		return "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435\u0442 : ".concat(
			edCheck
		);
	}
};
console.log(checkEducation(users, true));
console.log(checkEducation(users, false));
var funcGetUsers = function (arrayUsers, key, keyValue) {
	return arrayUsers.filter(function (item) {
		return item[key] === keyValue;
	});
};
var newUsers = funcGetUsers(users, "hasEducation", true);
console.log(newUsers);
//4 Проверка на наличие животных
var filterFunc = function () {
	var filterAnimals = users.filter(function (user) {
		return user.animals !== undefined;
	});
	return filterAnimals;
};
console.log(filterFunc());
//5 Названия марок автомобилей
var checkCars = function (arr) {
	var res2 = [];
	arr.forEach(function (item) {
		if (item.cars) {
			res2.push(item.cars.join());
		}
	});
	return res2.flat().join(", ");
};
console.log(checkCars(users));
