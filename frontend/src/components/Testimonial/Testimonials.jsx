import React from 'react'
import Slider from 'react-slick'
import av01 from '../../assets/images/ava-1.jpg'
import av02 from '../../assets/images/ava-2.jpg'
import av03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },

            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return <Slider {...settings}>
       <div className="testimonial py-4 px-3">
          <p>"Travel World made our trip unforgettable! The guides were knowledgeable, 
            and the weather updates were spot on. Highly recommend!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av01} className='w-25 h-25 rounded-2' alt='' />

            <div>
                <h6 className="mb-0 mt-3">Sarah J.</h6>
                <p>Customer</p>
            </div> 
          </div>
       </div>

       <div className="testimonial py-4 px-3">
          <p>"Thanks to their customized plans, our vacation was perfectly tailored to our needs.
             We couldn't have asked for a better experience!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av02} className='w-25 h-25 rounded-2' alt='' />

            <div>
                <h6 className="mb-0 mt-3">Mark T.</h6>
                <p>Customer</p>
            </div> 
          </div>
       </div>

       <div className="testimonial py-4 px-3">
          <p>"The team at Travel World went above and beyond. The tips they provided made
             our journey stress-free and full of memorable moments!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av02} className='w-25 h-25 rounded-2' alt='' />

            <div>
                <h6 className="mb-0 mt-3">Emma L.</h6>
                <p>Customer</p>
            </div> 
          </div>
       </div>

       <div className="testimonial py-4 px-3">
          <p>"I’ve traveled with many agencies, but none have matched the level of service 
            and attention to detail like Travel World. Truly amazing!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av03} className='w-25 h-25 rounded-2' alt='' />

            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div> 
          </div>
       </div>

       <div className="testimonial py-4 px-3">
          <p>"Travel World made our dream vacation come true! From the personalized 
            itinerary to the expert guidance, everything was perfect!"</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av03} className='w-25 h-25 rounded-2' alt='' />

            <div>
                <h6 className="mb-0 mt-3">Lisa M.</h6>
                <p>Customer</p>
            </div> 
          </div>
       </div>

  </Slider>
}

export default Testimonials