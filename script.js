'use strict';

const money = 50000,
    income = 'фриланс',
    addExpenses = 'Коммуналка,Кредит,Продукты',
    deposit = true,
    mission = 1000000,
    period = 12,
    budgetDay = money/30;

// объвлены переменные

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log( addExpenses.length);
console.log(`"Период равен: ${period} месяцев"`);
console.log('\'Цель заработать:\t' + mission + ' рублей\'');
console.log(addExpenses.toLowerCase().split(','));
console.log('Бюджет на день:', budgetDay.toFixed(2));

// Выводы в консоль




