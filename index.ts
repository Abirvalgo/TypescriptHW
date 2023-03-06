interface User {
	name: string;
	phone: string;
	email: string;
	animals?: string[];
	cars?: string[];
	hasChildren: boolean;
	hasEducation: boolean;
}
type UsersArray = User[];

type checkType = (arr: UsersArray, arg?: boolean) => string | number;

const users: UsersArray = [
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

const usersFunc = () => {
	const usersName: string[] = users.map((item: User): string => item.name);
	return usersName.join(`,`);
};
console.log(usersFunc());

//2 Количество машин у пользователей

const carsNumber: checkType = (arr) => {
	const res: any[] = [];
	arr.forEach((item: User): void => {
		if (item.cars) {
			res.push(item.cars);
		}
	});
	return res.flat().length;
};
console.log(carsNumber(users));

//3 Проверка на наличие образования

const checkEducation: checkType = (arr, education) => {
	const edCheck: string = arr
		.filter((item: User): boolean => item.hasEducation === education)
		.map((item: User): string => item.name)
		.join(", ");
	if (education) {
		return `Образование есть : ${edCheck}`;
	} else {
		return `Образования нет : ${edCheck}`;
	}
};
console.log(checkEducation(users, true));
console.log(checkEducation(users, false));

type FuncGetUsersType = (
	arrayUsers: UsersArray,
	key: string,
	keyValue: boolean
) => User[];
const funcGetUsers: FuncGetUsersType = (arrayUsers, key, keyValue) => {
	return arrayUsers.filter((item: any) => item[key] === keyValue);
};
const newUsers = funcGetUsers(users, `hasEducation`, true);
console.log(newUsers);

//4 Проверка на наличие животных
const filterFunc = () => {
	const filterAnimals: User[] = users.filter(
		(user) => user.animals !== undefined
	);
	return filterAnimals;
};
console.log(filterFunc());

//5 Названия марок автомобилей

const checkCars: checkType = (arr) => {
	let res2: string[] = [];
	arr.forEach((item: User): void => {
		if (item.cars) {
			res2.push(item.cars.join());
		}
	});
	return res2.flat().join(`, `);
};
console.log(checkCars(users));

export {};
