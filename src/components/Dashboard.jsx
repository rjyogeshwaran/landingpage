import React from "react";

function Dashboard({ showcase }) {
    
    return <>
        <div class="row g-0">
        <div class={showcase.isOrder ? "col-lg-6 order-lg-2 text-white showcase-img" : "col-lg-6 text-white showcase-img"} style={{ backgroundImage: `url(${showcase.bgImage})` }}></div>
            <div class={showcase.isOrder1 ? "col-lg-6 order-lg-1 my-auto showcase-text" : "col-lg-6 my-auto showcase-text"}>
                <h2>{showcase.name}</h2>
                <p class="lead mb-0">{showcase.para}</p>
            </div>
            </div>
        </>
    
};


export default Dashboard;
