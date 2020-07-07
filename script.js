$(document).ready(function () {
    var color;
    var currentHour = moment().hours();
    var hour = 9

    for (let index = 0; index < 9; index++) {
        if (hour < currentHour) {
            color = "red"
        } else if (hour === currentHour) {
            color = "green"
        } else {
            color = "grey"
        }

        var form = $("<form>")
        form.attr("style", "background-color: " + color)

        var row = $("<div>")
        row.attr("class", "row")

        var hourColumn = $("<div>")
        hourColumn.attr("class", "col-sm-2")

        var inputColumn = $("<div>")
        inputColumn.attr("class", "col-sm-8")
 
        var input = $('<input>')
        input.attr({
            type: 'text',
            class: 'form-control',
            placeholder: 'add job task'
        })

        var buttonColumn = $("<div>")
        buttonColumn.attr("class", "col-sm-2")
        var button = $("<button>")
        button.attr({
            type:'button',
            class:'saveBtn'
        })

        buttonColumn.append(button)
        inputColumn.append(input)
        if (hour >= 12) {
            if (hour == 13) {
                hour = 1
            }
            hourColumn.text(hour + ":00PM")
        } else {
            hourColumn.text(hour + ":00AM")
        }
        hour++

        var container = $(".container")
        form.append(row)
        row.append(hourColumn, inputColumn, buttonColumn)
        container.append(form)
    }

    var inputValue = localStorage.getItem("name of key")
    var inputEl = $("#in-9")
    inputEl.attr('value', inputValue)

    $('.saveBtn').on('click', function () {
        var inputText = $('#in-9').val()
        localStorage.setItem('name of key', inputText)
    })
})

var headDate = moment().format('MMMM Do YYYY');
$('#currentDay').text(headDate)