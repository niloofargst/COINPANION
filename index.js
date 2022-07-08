$(document).ready(function () {

    $(function () {

        $(".slidingDiv").hide();

        $('.show_hide').click(function (e) {
            var SH = this.SH ^= 1; // "Simple toggler"
            $(this).text(SH ? '-' : '+')
                .css({ backgroundPosition: '0 ' + (SH ? -18 : 0) + 'px' })
                .next(".slidingDiv").slideToggle();
        });

    });


});