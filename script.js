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
  period = 12;
let budgetDay;

const showTypeOf = function(data) {
  console.log(data, typeof data);
};
// функция вывода в консоль типа данных

const getExpensesMonth = function (sum1, sum2) {
  return sum1 + sum2;
};
// Функция получения всех расходов за месяц

const getAccumulatedMonth = function(income, totalAmount) {
  return income - totalAmount;
};

const accumulatedMonth =  getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
// Функция получения накопления за месяц

const getTargetMonth = function(mission, accumulated) {
	if (!accumulated) {
		return 0;
	}
  return Math.ceil(mission / accumulated);
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
    return ('Что-то пошло не так');
  }  
};
// функция определения уровня доходов
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(`Расходы за месяц: ${getExpensesMonth(amount1, amount2)}`);
console.log(addExpenses);
console.log(addExpenses.toLowerCase().split(','));
console.log(`Цель будет достигнута за ${getTargetMonth(mission, accumulatedMonth)} месяцев(-a)`);
console.warn('Бюджет на день:', Math.floor(budgetDay));
console.error(getStatusIncome());
// Выводы в консоль






