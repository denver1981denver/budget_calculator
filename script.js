'use strict';

let money;

const isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function start() {

  do {
		money = prompt('Ваш месячный доход?', '50000');
	}
  while(!isNumber(money));
}

start();

const appData = {
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  budget: +money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 3,
  asking: function() {
    if (confirm('Есть ли у вас дополнительный заработок')) {
      let itemIncome,
        cashIncome;

      do {
        itemIncome = prompt('Какой у вас дополнительный заработок','Таксую');
      } while (!isNaN(itemIncome));

      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      } while (!isNumber(cashIncome));
     
      appData.addIncome[itemIncome] = +cashIncome;
    }

    let addExpenses,
      value,
      data = 0; 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период','Коммуналка,Кредит,Продукты');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    
    for (let i = 0; i < 2; i++) {
      do {
      value = prompt('Введите обязательную статью расходов',"кредит");
      }  while (!isNaN(value));
        do {
          data = prompt('Во сколько это обойдётся?','2000');
        }
        while(!isNumber(data));
      appData.expenses[value] = +data;
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
      }
    },
  getBudget: function () {
    appData.budgetMonth =  appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
  },  
  getTargetMonth: function () {
    if (appData.budgetMonth <= 0) {
      return  `Цель не будет достигнута`;
    }  
    return  `Цель будет достигнута за ${Math.ceil(appData.mission / appData.budgetMonth)} месяцев (а)`;  
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else  {
      return ('Что-то пошло не так');
    }  
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      let percentDeposit,
      moneyDeposit;
      do {
        percentDeposit = prompt('Какой годовой процент?', '10');
      }  while (!isNumber(percentDeposit));

      do {
        moneyDeposit = prompt('Какая сумма заложена', 10000);
      }  while (!isNumber(moneyDeposit));
      
      appData.percentDeposit = +percentDeposit;
      appData.moneyDeposit = +moneyDeposit;
    }
  },
  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};
// все данные теперь являются свойствами объекта appData

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();
// вызов методов объекта

let addExpensesInfo =[];
appData.addExpenses.forEach(function(item, index) {
  addExpensesInfo[index] = item[0].toUpperCase() + item.slice(1);
});

console.log('Расходы за месяц ', appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(addExpensesInfo.join(', '));
console.log('___________________________________________________________________________');
console.log("Наша программа включает в себя данные: ");

for (let key in appData) {
  console.log(key, appData[key]);
}
// перебор объекта

console.warn(appData);
console.table(appData);









