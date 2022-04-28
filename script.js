'use strict';

const isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
// функция проверки ввода данных на число

const income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период','Коммуналка,Кредит,Продукты'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  period = 12;

let budgetDay,
	money,
  expenses = [];

const start = function() {

	do {
		money = prompt('Ваш месячный доход?', '50000');
	}
   while(!isNumber(money));
};

start();
// функция ввода данных дохода за месяц

const showTypeOf = function(data) {
  console.log(`%c${data}`,'color: yellow; background-color: red;', typeof(data));
};
// функция вывода в консоль типа данных

const getExpensesMonth = function() {
let sum = 0,
  value;

  for (let i = 0; i < 2; i++) {

    // if(i === 0) {
    //   expenses1 = prompt('Введите обязательную статью расходов',"кредит");
    // } else if (i === 1) {
    //   expenses2 = prompt('Введите обязательную статью расходов',"квартплата");
    // }

		// вариант с условиями
		expenses[i]	= prompt('Введите обязательную статью расходов',"кредит");

    do {
      value = +prompt('Во сколько это обойдётся?','2000');
    }
      while(!isNumber(value));
      sum += value;
  }
  
  return sum;
};

const expensesAmount = getExpensesMonth();
// Функция получения всех расходов за месяц

const getAccumulatedMonth = function(income, totalAmount) {
    return income - totalAmount;
};

const accumulatedMonth =  getAccumulatedMonth(money, expensesAmount);
// Функция получения накопления за месяц

const getTargetMonth = function(mission, accumulated) {
 
  if (accumulated <= 0) {
    return  `Цель не будет достигнута`;
  }  

  return  `Цель будет достигнута за ${Math.ceil(mission / accumulated)} месяцев (-а)`;  
};
// функция рассчёта цели в месяцах

budgetDay = accumulatedMonth/30;
// рассчёт дневного бюджета

const getStatusIncome = function() {
     
  if(budgetDay >= 1200) {
    	return ('У вас высокий уровень дохода');
  } else if(budgetDay >= 600) {
      return ('У вас средний уровень дохода');
  } else if(budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
  } else    {
      return ('Вы в долгах');
  }  
};
// функция определения уровня доходов

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(`%cРасходы за месяц: ${expensesAmount}`,
 'color: white; font-style: italic; background-color: black;');
console.log(addExpenses, addExpenses.toLowerCase().split(','));
console.log(`%c${getTargetMonth(mission, accumulatedMonth)}`, 'color: blue; font-size: 15px; text-decoration: underline;');
console.log('%cБюджет на день:',
 'color: yellow; font-style: italic; background-color: green; padding: 10px;', Math.floor(budgetDay));
console.log(`%c${getStatusIncome()}`,
 'color: red; font-size: 20px;  background-color: skyblue; font-style: italic; border-radius: 40px; padding: 7px');
// Выводы в консоль





