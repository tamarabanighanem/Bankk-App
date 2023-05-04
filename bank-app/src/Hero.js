import React from 'react'

const Hero = () => {
    return (
        <div>

            <section id="hero" class="hero">

                <div class="info d-flex align-items-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 text-center">
                                <h2 data-aos="fade-down">منصة عَ الطريق <span> <br /> اسمٌ يعني الثقة </span></h2>


                                <p data-aos="fade-up">منصة مختصة بتقديم خدمات صيانة السيارات على مدار الساعة بأسعر منافسة</p>
                                <a data-aos="fade-up" data-aos-delay="200" href="#" id="downloadApplication" class="btn-get-started">حمل
                                    التطبيق</a>
                                <a data-aos="fade-up" data-aos-delay="200" href="#services" class="btn-get-started">حجز
                                    موعد</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">

                    <div class="carousel-item active" style={{ backgroundImage: "url(assets/img/maaaaain.jpg)" }} >
                    </div>
                    <div class="carousel-item" ></div>
                    <div class="carousel-item" ></div>
                    <div class="carousel-item" ></div>
                    <div class="carousel-item" ></div>

                    <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </section >
        </div >
    )
}

export default Hero