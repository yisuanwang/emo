document.addEventListener('DOMContentLoaded', function() {
    var images = ['emo/img/WEATHERING WITH YOU_004106.211.webp', 'emo/img/WEATHERING WITH YOU_013610.095.webp', 'emo/img/WEATHERING WITH YOU_002559.219.webp', 'emo/img/WEATHERING WITH YOU_003658.589.webp', 'emo/img/WEATHERING WITH YOU_013619.062.webp', 'emo/img/WEATHERING WITH YOU_013623.068.webp', 'emo/img/WEATHERING WITH YOU_000136.136.webp', 'emo/img/WEATHERING WITH YOU_013707.112.webp', 'emo/img/WEATHERING WITH YOU_013502.028.webp', 'emo/img/WEATHERING WITH YOU_013649.970.webp', 'emo/img/WEATHERING WITH YOU_013801.707.webp', 'emo/img/WEATHERING WITH YOU_011451.943.webp', 'emo/img/WEATHERING WITH YOU_013611.970.webp', 'emo/img/WEATHERING WITH YOU_002512.602.webp', 'emo/img/WEATHERING WITH YOU_013615.769.webp', 'emo/img/WEATHERING WITH YOU_003502.818.webp'];
    
    
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
    
    document.getElementById('randomImageBackground').style.backgroundImage = 'url(' + selectedImage + ')';
});
