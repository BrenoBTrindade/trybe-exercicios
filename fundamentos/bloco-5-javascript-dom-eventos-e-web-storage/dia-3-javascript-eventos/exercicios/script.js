function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfMonth(){
  let = listDays = document.querySelector('#days');

  for(i = 0; i < dezDaysList.length; i += 1){
    let day = dezDaysList[i];
    let dayListItem = document.createElement('li');

    if(day === 24 || day === 31 ){
      dayListItem.className = 'day holiday';
      dayListItem.innerHTML = day;
      listDays.appendChild(dayListItem)

    }
    else if ( day === 4 || day ===11|| day ===18){
      dayListItem.className = 'day friday';
      dayListItem.innerHTML = day;
      listDays.appendChild(dayListItem);
  }
    else if(day === 25){
      dayListItem.className = 'day holiday friday';
      dayListItem.innerHTML = day;
      listDays.appendChild(dayListItem);
    } else {
      dayListItem.className = 'day';
      dayListItem.innerHTML = day;
      listDays.appendChild(dayListItem);
       
    }
}
}
daysOfMonth();

function holidayButton(buttonName){
  let buttonF = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  let buttonId = 'btn-holiday' ;

  buttonHoliday.innerHTML = buttonName;
  buttonHoliday.id = buttonId;
  buttonF.appendChild(buttonHoliday);

};//Concluido com ajuda do gabarito.
holidayButton('feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'purple';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};


displayHolidays();

function fridayButton(buttonName){
    let buttonS = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    let buttonId = 'btn-friday';
  
    buttonFriday.innerHTML = buttonName;
    buttonFriday.id = buttonId;
    buttonS.appendChild(buttonFriday);
  }
  
  fridayButton('Sexta-Feira');
