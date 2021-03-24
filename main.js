let MenuInitializer = 0

/*
barba.init({
    sync: true,
    transitions: [{
        name: 'default-transition',
        async leave() {

            transitionclose()

        },
        async after() {


        },
        async once() {

        }


    }]
});

*/


function transitionclose() {
    console.log('Closing')

    alert('LEAVING!')

    colors = ["#EA4335", "#0F9D58", "#FBBC04", "#4285F4"];
    ey = Math.floor(Math.random() * 4) + 1

    document.getElementById('transition').style.backgroundColor = colors[ey]
    gsap.to("#transition", 0.5, { width: '100vw' })
}

function transitionopen() {
    console.log('Opening')
    colors = ["#EA4335", "#0F9D58", "#FBBC04", "#4285F4"];
    let tl = gsap.timeline()

    let body = document.getElementsByTagName('body')[0];

    tl.to(body, 1.5, { opacity: '1' })
}


function openMenu() {



    if (MenuInitializer == 0) {
        let tl = gsap.timeline()

        colors = ["#EA4335", "#0F9D58", "#FBBC04", "#4285F4"];
        ey = Math.floor(Math.random() * 4) + 1



        document.getElementById('mainscreenwrapper').style.overflowY = "hidden";
        document.getElementById('Menu').style.display = "block"

        document.getElementById('logoMenuInside').style.display = "block"
        document.getElementById('Menu').style.backgroundColor = colors[ey]


        tl.to("#Menu", 0.5, { width: '100vw' })
        tl.to("#contents", 0.5, { opacity: '1' })
        tl.to("#logoMenuInside", 0.5, { opacity: '1' })

        MenuInitializer = 1

    } else {
        let tl = gsap.timeline()
        tl.to("#logoMenuInside", 0.5, { opacity: '0' })
        tl.to("#contents", 0.5, { opacity: '0' })
        tl.to("#Menu", 0.5, { width: '0vw' })

        document.getElementById('logoMenuInside').style.display = "none"
        document.getElementById('mainscreenwrapper').style.overflowY = "scroll";

        MenuInitializer = 0
    }


}




function pageTransitionLeave() {
    var tl = gsap.timeline();
    const li = document.querySelectorAll('ul.transition li');
    const body = document.getElementsByTagName('Body')[0];

    if (MenuInitializer == 1) {
        openMenu() //  forcelose the menu
    }

    tl.to(li, { duration: .5, scaleY: 1, transformOrigin: 'bottom left', stagger: .2 }) // stagger: run one by one (multiple items not at the same)
    window.scrollTo(0, 0);

};

function pageTransitionEnter() {
    var tl = gsap.timeline();
    const li = document.querySelectorAll('ul.transition li');
    const body = document.getElementsByTagName('Body')[0];




    tl.to(li, { duration: .5, scaleY: 0, transformOrigin: 'bottom left', stagger: .1, delay: .1 });

};



function contentAnimation() {
    var tl = gsap.timeline();
    const texts = document.getElementsByTagName('p');


    // tl.from('.left', { duration: 1.5, translateY: 50, opacity: 0 })
    // tl.to('img', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }, "-=1.1");
};

function delay(n) {
    n = n || 2000;

    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    })
};

// Barba transition
barba.init({
    sync: true,

    transitions: [{
        async leave(data) {
            var done = this.async();
            pageTransitionLeave();
            await delay(1500);
            done();
        },
        async enter(data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        },
        async after(data) {
            pageTransitionEnter();
        }
    }]
})