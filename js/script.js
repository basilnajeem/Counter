$(document).ready(function () {
    const addButton = $("#addbutton");
    const subButton = $("#subbutton");
    const clearButton = $("#clearbutton");
    const inputField = $("#inputfield");

    inputField.val('0');
    
    let count = 0;

    $(addButton).on('click', function () {
        count = inputField.val() ? parseFloat(inputField.val()) : count;
        count = count + 1;
        inputField.val(count)
    })

    $(subButton).on('click', function () {
        count = inputField.val() ? parseFloat(inputField.val()) : count;
        count = count - 1;
        inputField.val(count)
    })

    $(clearButton).on('click', function () {
        inputField.val('0')
    })

})

