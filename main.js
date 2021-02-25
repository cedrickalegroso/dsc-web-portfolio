let MenuInitializer = 0


function openMenu() {



    if (MenuInitializer == 0) {
        let tl = gsap.timeline()

        colors = ["#EA4335", "#0F9D58", "#FBBC04", "#4285F4"];
        ey = Math.floor(Math.random() * 4) + 1



        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
        document.getElementById('Menu').style.display = "block"
        document.getElementById('Menu').style.backgroundColor = colors[ey]


        tl.to("#Menu", 0.5, { width: '100vw' })
        tl.to("#contents", 0.5, { opacity: '1' })

        MenuInitializer = 1

    } else {
        let tl = gsap.timeline()
        tl.to("#contents", 0.5, { opacity: '0' })
        tl.to("#Menu", 0.5, { width: '0vw' })




        MenuInitializer = 0
    }


}