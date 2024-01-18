//работа с датами
let now = new Date()
var day = now.getDate(); var month = now.getMonth() + 1; var year = now.getFullYear();
if (day < 10) {day = '0' + day;}if (month < 10) {month = '0' + month;}let date = year+'-'+month+'-'+day
startDate = now; startDate.setDate(startDate.getDate() - 7);
var day1 = startDate.getDate(); var month1 = startDate.getMonth() + 1; var year1 = startDate.getFullYear();
if (day1 < 10) {day1 = '0' + day1;}if (month1 < 10) {month1 = '0' + month1;} startDate = year1+'-'+month1+'-'+day1
document.getElementById('end').setAttribute('value', date)
document.getElementById('start').setAttribute('value', startDate)

let staf1f = []

if (!$.store.get('domain')) {
    $.store.set('domain', (prompt("Введите URL вашей Jira (БЕЗ HTTPS, СЛЕШЕЙ, только доменное имя, по типу 'jira.ru'):")))
} 
    
if (!$.store.get('staff') || $.store.get('staff').length === 0) {
    $.store.set('staff', staf1f);
    UIkit.modal('#setDefaultStaff').show();
}

$('#employee2').select2({
    placeholder: "Выберите сотрудников",
    maximumSelectionLength: 100,
    language: "ru",
    data:$.store.get('staff'),
    theme: "classic",
    closeOnSelect: false,

});

$('#employee').select2({
    placeholder: "Выберите сотрудников",
    maximumSelectionLength: 100,
    language: "ru",
    data:$.store.get('staff'),
    theme: "classic",
    closeOnSelect: false

});

$('#employeeDel').select2({
    placeholder: "Выберите сотрудников",
    maximumSelectionLength: 100,
    language: "ru",
    data:$.store.get('staff'),
    theme: "classic",
});