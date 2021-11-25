'use strict';

const money = +prompt('Ваш месячный доход?', '50000'),
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период','Коммуналка,Кредит,Продукты'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  expenses1 = prompt('Введите обязательную статью расходов','кредит'),
  amount1 =  +prompt('Во сколько это обойдётся?','1890'),
  expenses2 = prompt('Введите обязательную статью расходов','квартплата'),
  amount2 =  +prompt('Во сколько это обойдётся?','6000'),
  mission = 100000,
  period = 12,
  budgetMonth = money - (amount1 + amount2),
  budgetDay = budgetMonth/30;

let incomeLevel ;
// объвлены переменные

// if(budgetDay >= 1200) {
//    incomeLevel = 'У вас высокий уровень дохода';
// }   else if(budgetDay >= 600) {
//     incomeLevel = 'У вас средний уровень дохода';
// }   else if(budgetDay >= 0) {
//     incomeLevel = 'К сожалению у вас уровень дохода ниже среднего';
// }   else    {
//     incomeLevel = 'Что-то пошло не так';
// }

// условие для определения уровня дохода if

// (budgetDay >= 1200)? incomeLevel = 'У вас высокий уровень дохода':
// (budgetDay >= 600)? incomeLevel = 'У вас средний уровень дохода':
// (budgetDay >= 0)? incomeLevel = 'К сожалению у вас уровень дохода ниже среднего': incomeLevel = 'Что-то пошло не так';

// условие для определения уровня дохода тернарный оператор

switch (true) {
case budgetDay >= 1200:
  incomeLevel = 'У вас высокий уровень дохода';
  break;
case budgetDay >= 600:
  incomeLevel = 'У вас средний уровень дохода';
  break;
case budgetDay >= 0:
  incomeLevel = 'К сожалению у вас уровень дохода ниже среднего';
  break;
default:
  incomeLevel = 'Что-то пошло не так';
}
// условие для определения уровня дохода switch

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log( addExpenses.length);
console.log(`"Период равен: ${period} месяцев"`);
console.log('\'Цель заработать:\t' + mission + ' рублей\'');
console.log(addExpenses, addExpenses.toLowerCase().split(','));
console.log('Бюджет на месяц:', budgetDay.toFixed(2));
console.log(`Цель будет достигнута за ${ Math.ceil(mission/budgetMonth)} месяцев(-a)`);
console.log('Бюджет на день:', Math.floor(budgetDay));
console.log(incomeLevel);
// Выводы в консоль
