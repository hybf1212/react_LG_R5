import React from "react";

const Footer = () => {
    return (
    <section id="ft" className="d-flex align-items-center">
        <div className="container d-flex">
            <div>
                <a href=""><img src={`${process.env.PUBLIC_URL}/img/LG-logo-w.png`} className="bottomlogo" alt="하단로고" /></a>
            </div>            
        </div>
    </section>
    )
    
}

export default Footer