// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    //Сомневалась насчет включения в отфильтрованный массив в третьем запросе (requiredRange3) данного объекта.
    //Но решила включить, т.к. у них есть пересечения
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null]


function filterCourses([min, max]) {
    let coursesForUser = [];
    courses.map((el) => {
        //Стартовая стоимость курса выше начальной точки диапазона или равна нулю (для случаев пересечения поискового диапазона и диапазона стоимости курсов)
        if (el.prices[0] >= min || el.prices[0] === null) {
            //Конечную точку диапазона надо проверить на равенство нулю (тогда появятся все курсы по стоимости от начальной до максимально имеющейся),
            //или максимальную стоимость курсов, чтобы она была меньше стартовой и конечной точек диапазона
            if (max == null || (el.prices[1] <= max && el.prices[0] <= max)) {
                coursesForUser.push(el);
            }
        }
    })
    return coursesForUser;
}


console.log(`${requiredRange1}: `, filterCourses(requiredRange1));
console.log(`${requiredRange2}: `, filterCourses(requiredRange2));
console.log(`${requiredRange3}: `, filterCourses(requiredRange3));
