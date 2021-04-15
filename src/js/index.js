$(document).ready(Core);

function Core()
{
    SetFormCity();
    InitOwl();
    SetFormCalculator();
    InitValidator();
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

    $('section.reviews .reviews__slider').owlCarousel({
        items: 4,
        nav: true,
        navContainer: $('section.reviews .owl__nav .nav'),
        dots: true,
        dotsContainer: $('section.reviews .owl__nav .dots'),
        loop: true,
    })
}

function SetFormCalculator()
{
    $('form.calculator .count button').on('click', function(e) {
        e.preventDefault();

        let input = $(this).siblings('input');
        let value = parseInt($(input).val());

        if ($(this).hasClass('minus') && value != 0)
        {
            $(input).val(value - 1);
        }

        if ($(this).hasClass('plus'))
        {
            $(input).val(value + 1);
        }
    });

    let initTabHeight = $('form.calculator .description .tab.active').height();
    $('form.calculator .description .tab__wrapper').css('height', `${initTabHeight}px`);

    $('form.calculator select').on('change', function() {
        let value = $(this).val();
        let tabId = $(`form.calculator option[value="${value}"]`).attr('tab-id');
        let nextTab = `form.calculator .description .tab[tab="${tabId}"]`
        let height = $(nextTab).height();

        $('form.calculator .description').fadeOut(500, function() {
            $('form.calculator .description .tab.active').removeClass('active');
            $(nextTab).addClass('active');

            $('form.calculator .description .tab__wrapper').css('height', `${height}px`);
            $(this).fadeIn(500);            
        })
    });
}

function InitValidator()
{
    $.validator.addMethod('checkPhone', function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    })

    let validateSettingCalculator = {
        rules: {
            phone: {
                checkPhone: true
            }
        },
        messages: {
            phone: {
                checkPhone: "Введите полный номер телефона"
            }
        },
    }

    $('form.calculator').validate(validateSettingCalculator);
    $('form.calculator').on('submit', function(e) {
        e.preventDefault();
        SubmitFormModal(this);
    });

    $('form input[name=phone]').mask("+7(999)999-9999", {autoclear: false});
}

function SubmitFormModal(form)
{
    if ($(form).valid())
    {
        console.log('valid')
    }
    else
    {
        console.log('non valid')
    }
}