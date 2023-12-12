import React from 'react'

function Testimonial({testimony}) {
    return <>
    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img class= "img-fluid rounded-circle mb-3" src ={`${testimony.images}`} />
                            <h5>{testimony.name}</h5>
                            <p class="font-weight-light mb-0">"{testimony.para}"</p>
                        </div>
                    </div>
    </>
}

export default Testimonial