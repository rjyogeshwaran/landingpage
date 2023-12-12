import React from 'react'

function IconsGrid({ icons }) {

    return <>
    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class={`bi-${icons.icon} m-auto text-primary`}></i></div>
                            <h3>{icons.name}e</h3>
                            <p class="lead mb-0">{icons.para}</p>
                        </div>
                    </div>
    </>
}

export default IconsGrid