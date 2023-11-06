window.addEventListener('DOMContentLoaded', function() {


    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__left_button').toggleClass('is_active'),
                $('.header_nav').toggleClass('is_active')
        });
    });

});
