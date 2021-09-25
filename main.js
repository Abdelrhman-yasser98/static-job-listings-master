let fath = document.querySelectorAll('.father');
for (let i = 0; i < fath.length; i++) {
    let ul = fath[i].children[1];
    for (let j = 0; j < ul.children.length; j++) {
        let val = ul.children[j].textContent.toLowerCase();
        fath[i].classList.add(val);
    };
}
$('form').submit(function(e) {
    e.preventDefault();
    $('.res *').remove();
    let div = document.createElement('div'),
        p = document.createElement('p'),
        span = document.createElement('span'),
        img = document.createElement('img');
    img.src = 'images/icon-remove.svg';
    $(p).text($('input').val());
    $(div).append(p);
    $(div).append(span);
    $(span).append(img);
    $('.res').append(div)
    $(div).css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '3px 2px',
        color: 'hsl(180, 29%, 50%)',
        backgroundColor: 'hsl(180, 31%, 95%)',
        borderRadius: '5px',
        fontSize: 'small',
        overflow: 'hidden'
    });
    $(p).css({
        padding: '3px 5px',
        margin: ' 0 5px '
    });
    $(span).css({
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'hsl(180, 29%, 50%)',
        padding: '3px',
    });

    $(span).hover(function() {
        $(this).css('background-color', 'black')
    }, function() {
        $(this).css('background-color', 'hsl(180, 29%, 50%)')
    });
    $(span).click(function() {
        $(this).parent().remove();
        if ($('.res').html() == "") {
            $('form a').css("visibility", 'hidden');
            $(fath).show();
            $(fath).removeClass('show');
        };
    });

    $('input').val('');
    if ($('.res').html() !== "") {
        $('form a').css("visibility", 'visible');
        $('form a').hover(function() {
                $(this).css('color', 'hsl(180, 29%, 50%)');
            },
            function() {
                $(this).css('color', 'hsl(180, 8%, 52%)');
            }
        );

        $('form a').click(function() {
            $(div).remove();
            $(this).css("visibility", 'hidden');
            $(fath).show();
            $(fath).removeClass('show');
        });
    };
    $(fath).hide();
    fath.forEach(fath => {
        if (fath.classList.contains(`${p.textContent.toLowerCase()}`)) {
            fath.classList.add('show');
        } else {
            fath.classList.remove('show');

        }
    });
    if ($('.show').length == 0) {
        $('.res *').remove();
        $('form a').css("visibility", 'hidden');
        $('.alert').text('please insert a correct value');
        $('.alert').show(1000).delay(2000).hide(1000, function() {
            $(fath).show();
        })
    }


    $('.show').slideDown(500);


})