function fire() {
    document.getElementById('employee').setAttribute('value', null)
    let startDate = document.getElementById('start').value
    let endDate = document.getElementById('end').value
    
    if (!$.store.get('domain')) {
        $.store.set('domain', (prompt("Введите URL вашей Jira (БЕЗ HTTPS, СЛЕШЕЙ, только доменное имя, по типу 'jira.ru'):")))
        return;
    } else {
        let baseLink = "https://"+$.store.get('domain')+"/secure/TimesheetReport.jspa?reportKey=jira-timesheet-plugin%3Areport&selectedProjectId=12304&reportingDay=0&projectRoleId=&filterid=&priority=&commentfirstword=&showDetails=true&sum=day&groupByField=&sortBy=&sortDir="

        let a = $('#employee').val()
        
        console.trace(a)
        if (!startDate || !endDate || !employee || $('#employee').val().length === 0) {
            alert("Не заполнены поля. формирование ссылки не возможно")
            return;
        }
        $('#employee').val().forEach(el => {
            window.open(baseLink+"&startDate="+startDate+"&endDate="+endDate+"&targetUser="+el)
        });
    }
}


function addStaff() {
    let name = $('#addStaffName').val()
    let nick = $('#addStaffNick').val()
    if (name && nick) {
        let staffFromStore = $.store.get('staff')
        staffFromStore.push({
            id:nick,
            text:name
        })
        $.store.remove('staff')
        $.store.set('staff', staffFromStore)
    
        $('#addStaffName').val('')
        $('#addStaffNick').val('')
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
}


function delStaff() {
    let userForDelete = $('#employeeDel').val()
    let staffFromStoreForDel = $.store.get('staff')
    
    //поиск удаляемого сотрудника в массиве из стора и удаление
    var index = staffFromStoreForDel.map(x => {
        return x.id;
    }).indexOf(userForDelete);
    staffFromStoreForDel.splice(index, 1);

    //обновление стора
    $.store.remove('staff')
    $.store.set('staff', staffFromStoreForDel)

    $('#employeeDel').val('')  

    location.reload();
}

function addDefaultStaff() {
    let name = $('#addStaffNameDef').val()
    let nick = $('#addStaffNickDef').val()
    if (name && nick) {
        let staffFromStore = $.store.get('staff')
        staffFromStore.push({
            id:nick,
            text:name
        })
        $.store.remove('staff')
        $.store.set('staff', staffFromStore)
    
        $('#addStaffNameDef').val('')
        $('#addStaffNickDef').val('')
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

    
}