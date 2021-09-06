Game.registerMod("increasedfps", {
    init: function () {
        document.addEventListener("keydown", function(e){
            if(e.key >= 1 && e.key <= 9)
            {
                Game.fps = (30 * e.key) * (e.key != 1 ? (2 * e.key) : 1);
                Game.Popup("FPS is now " + Game.fps);
            }

        });
    },
    save: function () {
        //use this to store persistent data associated with your mod
    },
    load: function (str) {
        //do stuff with the string data you saved previously
    },
});