let fill = 0;

function load_bar(){
    window.setInterval(function(){
        fill += 10;
        if(fill == 100){
            load_bar();
        }
        else{
            document.getElementById("bar_one").style.width = fill + "%";
        }
    },1000);
}
load_bar();
