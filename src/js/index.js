$(document).ready(Core);

function Core()
{
    SetFormCity();
    InitOwl();
}

function SetFormCity()
{
    $('.form__city .select span').on('click', function() {
        let city = $(this).text();
        $('.form__city .city').text(city);
        $('.form__city').attr('value', city);
    })
}

function InitOwl()
{
    $('section.main .slider').owlCarousel({
        items: 1,
        nav: true,
        navContainer: $('section.main .owl__nav .nav'),
        dots: true,
        dotsContainer: $('section.main .owl__nav .dots')
    });
}