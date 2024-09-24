
////////////////////
// Hero Section

document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.hero__right-element').forEach((move) => {
        
        const movingValue = move.getAttribute("data-value")
        const x = (e.clientX / movingValue) / 40;
        const y = (e.clientY / movingValue) / 100;

        //move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        move.style.transform = " rotateY(" + x + "deg)";
        
    });
})


// End of Hero Section
///////////////////////


///////////////////////
// Navigation

const nav = document.querySelector('.nav');
const navOffsetTop = nav.offsetTop;
const section = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav__link');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    stickyNav();
})

const stickyNav = () => {
    if (window.scrollY >= navOffsetTop ) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }

    section.forEach((section, i) => {
        if (window.scrollY >= section.offsetTop - 100) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove('change-nav');
            })
            navbarLinks[i].classList.add('change-nav')
        }
    })

    if (window.scrollY >= footer.offsetTop - 100) {
        navbarLinks.forEach((navbarLink) => {
            navbarLink.classList.remove('change-nav');
            navbarLinks[3].classList.add('change-nav');
        })
    }
}

// End of Navigation
//////////////////////


/////////////////////
// About Me Section

const leftControl = document.querySelector('.about-me__controls-left');
const rightControl = document.querySelector('.about-me__controls-right');
const aboutMeText = document.querySelector('.about-me__text-wrapper') 

let axisX = 0

const hideControl = () => {
    if (axisX === 150) {
        leftControl.classList.add('hide-control')
    } else {
        leftControl.classList.remove('hide-control')
    }

    if (axisX === -150) {
        rightControl.classList.add('hide-control')
    } else {
        rightControl.classList.remove('hide-control')
    }

}

leftControl.addEventListener('click', () => {
    aboutMeText.style.transform = `translateX(${axisX += 150}rem)`;
    hideControl()
})

rightControl.addEventListener('click', () => {
    aboutMeText.style.transform = `translateX(${axisX -= 150}rem)`;
    hideControl()
})


const resumeBtn = document.querySelector('.about-me__cv');
const resume = document.querySelector('.about-me__cv-wrapper');
const resumeCloseBtn = document.querySelector('.about-me__cv-wrapper-close-btn');
const aboutMe = document.querySelector('.about-me');
const overlay = document.querySelector('.overlay');



const removeHidden = () => {
    resume.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const addHidden = () => {
    resume.classList.add('hidden');
    overlay.classList.add('hidden');
}

resumeBtn.addEventListener('click', () => {
    removeHidden();

})

resumeCloseBtn.addEventListener('click', () => {
    addHidden()
})

overlay.addEventListener('click', () => {
    addHidden();
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !resume.classList.contains('hidden')) {
        addHidden();
    }
})

//End of About Me Section
///////////////////////////


//////////////////////////
// Skill-Set Section

const progress = [100, 100, 35, 100, 53, 40, 100, 100, 100, 100, 100, 100];

document.querySelectorAll('.skill-set__wrapper-progress-percent').forEach((el, i) => {
    el.style.height = `${progress[i]}%`;
})

// End of Skill-Set Section
//////////////////////////////


///////////////
// Animate

const secAbout = document.querySelector('.about-me__wrapper');
const secInterest = document.querySelector('.interests');

const abouthead = document.querySelector('.skill-set__heading');
const secSkillSet = document.querySelector('.skill-set');
const secSkillSet_2 = document.querySelector('.skill-set');
const secSkillSetItem = document.querySelectorAll('.skill-set__wrapper-item')

const secFooter = document.querySelector('.footer');
const secHead = document.querySelector('.footer__heading');
const secForm = document.querySelector('.footer__form');
const secIcons = document.querySelector('.social-media')
const secCopy = document.querySelector('.copyright')

window.onscroll = () => {
    let scrollDistance = window.scrollY;
    let secDistance = secAbout.offsetTop - 750;
    let secDistanceInterest = secInterest.offsetTop - 600;
    let secDistanceSkillSet = secSkillSet.offsetTop - 400;
    let secDistanceSkillSet_2 = secSkillSet_2.offsetTop - 700;
    let secDistanceFotter = secFooter.offsetTop - 800;
    
    const scroll = (distance, element, animate) => {
        if (scrollDistance >= distance) {
            element.classList.add(animate)
        } 
        else {
            element.classList.remove(animate)
        }
    }


    scroll(secDistance, secAbout, 'show-animate')
    scroll(secDistanceInterest, secInterest, 'show-animate')
    scroll(secDistanceSkillSet_2, abouthead, 'show-animate')


    if (scrollDistance >= secDistanceSkillSet) {
        secSkillSetItem.forEach(skill => {
            skill.classList.add('show-skill-set-animate')
        })
    } else {
        secSkillSetItem.forEach(skill => {
            skill.classList.remove('show-skill-set-animate')
        })
    }

    scroll(secDistanceFotter, secHead, 'show-footer')
    scroll(secDistanceFotter, secForm, 'show-footer')
    scroll(secDistanceFotter, secIcons, 'show-footer')
    scroll(secDistanceFotter, secCopy, 'show-footer')   
}

// End of Animate
////////////////////

// Send Email
////////////////

function SendMail() {
    const params = {
        from_name: document.getElementById('full-name').value,
        email_id: document.getElementById('email-id').value,
        message : document.getElementById('message').value
    }

    emailjs.send('service_gxl7wjk', 'template_nsz8kvj', params).then(function (res) {
        alert('Success! ' + res.status);
    })
}

// End of Send Email
/////////////////////

// Form Button Scroll
//////////////

document.querySelectorAll('.footer__form-submit-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})

// End of Form Button Scroll
//////////////////

const formBtn = document.querySelector('.footer__form-submit-btn');

formBtn.addEventListener('click', () => {
    document.querySelector('.footer__form-input-name').value = "";
    document.querySelector('.footer__form-input-email').value = "";
    document.querySelector('.footer__form-textarea').value = "";
})

