gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

const lightTime = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-one',
        start: 'top top',
        end: 'bottom -50%',
        pin: true,
        scrub: true,
    //    markers: true
    }
})

lightTime
    .from('.line-one span', {
        y: '100vh',
        stagger: 10,
        duration: 25
    })

    .to('.container', {
        backgroundColor: 'yellow',
        duration: 25
    }, "+=1")

    .from('.sun', {
        right: '-20vw',
        duration: 25
    })

    .to('.line-one span',{
        x: '200vw',
        duration: 10, 
        delay: 25
    })

    .to('.sun', {
        right: '200vw',
        duration: 10
    }, "<")

    .to('.container', {
        backgroundColor: 'white',
        duration: 100
    }, "+=10")

const orTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-two',
        start: 'top top',
        pin: true,
        scrub: true,
       // markers: true
    }
})

orTl
    .from('.line-two span:first-child', {
        x: '-100vw',
        scale: 20,
        duration: 2
    })
    .from('.line-two span:last-child', {
        x: '200vw',
        scale: 20,  
        duration: 2
    }, '<')
    .to('.line-two span:first-child',{
        y: -20,
        duration: 1
    }, "+=1")
    .to('.line-two span:first-child',{
        y: 0,
        duration: 1
    }, '>')
    .to('.line-two span:last-child',{
        y: -20,
        duration: 1
    }, "<")
    .to('.line-two span:last-child',{
        y: 0,
        duration: 1
    })

const darkTime = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-three',
        start: 'top top',
        pin: true,
        scrub: true,
        markers: true
    }
})

darkTime
    .from('.line-three span', {
        y: '100vh',
        stagger: 10,
        duration: 20
    })

    .to('.line-three', {
        backgroundPositionX: '0',
        duration: 10
    })

    .to('.line-three span', {
        color: 'white',
        duration: 20
    }, '<')

    .from('.moon', {
        right: '-20vw',
        duration: 6
    }, "+=3")
