window.onload = function() {
    baguetteBox.run('.baguetteBoxOne');
    baguetteBox.run('.baguetteBoxTwo');
    baguetteBox.run('.baguetteBoxThree', {
        animation: 'fadeIn',
        noScrollbars: true
    });
    baguetteBox.run('.baguetteBoxFour', {
        buttons: false
    });
    baguetteBox.run('.baguetteBoxFive', {
        captions: function(element) {
            return element.getElementsByTagName('img')[0].alt;
        }
    });

    if (typeof oldIE === 'undefined' && Object.keys) {
        hljs.initHighlighting();
    }

    var year = document.getElementById('year');
    //year.innerText = new Date().getFullYear();
};