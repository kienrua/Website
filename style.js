$(document).ready(function() {
    var imgPosition = $(".aspect-ratio-169 img").toArray();
    var imgContainer = $(".aspect-ratio-169");
    var dotItem = $(".dot").toArray();
    //console.log(dotItem[0]);
    let imgNumber = imgPosition.length;
    let index = 0;
    imgPosition.forEach(function(image, index) {
        //console.log(image, index);
        image.style.left = index * 100 + "%";
        /*$(dotItem[index]).on(click, function() {
            slider(index);
        })*/
        //console.log(dotItem[0]);
    })

    function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        slider(index);
    }

    function slider(index) {
        imgContainer.css("left", "-" + index * 100 + "%");
        //dotItem.addClass("active");
        //console.log(dotItem[1]);
    }
    setInterval(imgSlide, 5000);

})