$(document).ready(Core);

function Core()
{
    SetFormCity()
}

function SetFormCity()
{
    $('.form__city .select span').on('click', function() {
        let city = $(this).text();
        $('.form__city .city').text(city);
        $('.form__city').attr('value', city);
    })
}