// card-scroll anime
window.addEventListener('scroll', function() {
    var scroll_posy = this.window.scrollY;
    console.log(scroll_posy); 
    var scroll_arr = [
        {'name': 'card1', 'start': 3940, 'end': 4400}, 
        {'name': 'card2', 'start': 4440, 'end': 4900},
        {'name': 'card3', 'start': 4940, 'end': 5400},];

    for ( var i = 0; i < scroll_arr.length; i++ ) {
        var y = (-1/460) * scroll_posy + (scroll_arr[i].end/460);
        var scale = (-0.1/460) * scroll_posy + ((scroll_arr[i].start*0.1+460)/460);
        
        this.document.querySelectorAll('.card-box')[i].style.opacity = y;
        this.document.querySelectorAll('.card-box')[i].style.transform = `scale(${scale})`;
    }
});