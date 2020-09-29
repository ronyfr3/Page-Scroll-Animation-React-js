import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import './Scroll.css'

function Scroll() {
    // offset: 120, // offset (in px) from the original trigger point
    // delay: 0, // values from 0 to 3000, with step 50ms
    // duration: 400, // values from 0 to 3000, with step 50ms
    // easing: 'ease', // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
    // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    // Anchor placements:
    //         top-bottom
    //         top-center
    //         top-top
    //         center-bottom
    //         center-center
    //         center-top
    //         bottom-bottom
    //         bottom-center
    //         bottom-top
    // Easing functions:
    //     linear
    //     ease
    //     ease-in
    //     ease-out
    //     ease-in-out
    //     ease-in-back
    //     ease-out-back
    //     ease-in-out-back
    //     ease-in-sine
    //     ease-out-sine
    //     ease-in-out-sine
    //     ease-in-quad
    //     ease-out-quad
        //     Animations
        // Fade animations:

        // fade
        // fade-up
        // fade-down
        // fade-left
        // fade-right
        // fade-up-right
        // fade-up-left
        // fade-down-right
        // fade-down-left
        // Flip animations:

        // flip-up
        // flip-down
        // flip-left
        // flip-right
        // Slide animations:

        // slide-up
        // slide-down
        // slide-left
        // slide-right
        // Zoom animations:

        // zoom-in
        // zoom-in-up
        // zoom-in-down
        // zoom-in-left
        // zoom-in-right
        // zoom-out
        // zoom-out-up
        // zoom-out-down
        // zoom-out-left
        // zoom-out-right
    useEffect(()=>{
        AOS.init({
            disable:false,
            offset:120, //if we increase value it delays presence of animation
            delay:0,
            duration:400,
            once:false,
            mirror:false,
            easing: 'ease',
            anchorPlacement:'left-right'

        })
    },[])
    return (
        <div className="container">
        <h1 style={{textAlign: 'center'}}>Scroll Animations</h1>
        <div className="scroll">
        <div className='scroll-div'>5</div>
        <div className='scroll-div'>5</div>
        <div className='scroll-div'>5</div>
        <div data-aos='zoom-in-up' className='scroll-div'>5</div>
        <div data-aos='zoom-in' className='scroll-div'>5</div>
        <div data-aos='slide-right' className='scroll-div'>5</div>
        <div data-aos='slide-left' className='scroll-div'>5</div>
        <div data-aos='slide-down' className='scroll-div'>5</div>
        <div data-aos='slide-up' className='scroll-div'>5</div>
        <div data-aos='flip-right' className='scroll-div'>5</div>
        <div data-aos='flip-left' className='scroll-div'>5</div>
        <div data-aos='flip-down' className='scroll-div'>5</div>
        <div data-aos='flip-up' className='scroll-div'>5</div>
        <div data-aos='fade' className='scroll-div'>5</div>
        <div data-aos='fade-down' className='scroll-div'>5</div>
        <div data-aos='fade-left' className='scroll-div'>5</div>
        <div data-aos='fade-right' className='scroll-div'>5</div>
        <div data-aos='fade-up-right' className='scroll-div'>5</div>
        <div data-aos='fade-up-left' className='scroll-div'>5</div>
        <div data-aos='fade-down-right' className='scroll-div'>5</div>
        <div data-aos='fade-down-left' className='scroll-div'>5</div>
        </div>
    
        </div>
    )
}

export default Scroll
