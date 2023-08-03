import React from 'react';

const Event = () => {
    const eventname = [
        {cls : "cardevent-mo mb-5", link : "#", src : "cardevent-mo.png"},
        {cls : "cardevent mb-5", link : "#", src : "cardevent.png"},
        {cls : "cesarevent", link : "#", src : "cesarevent.png"}
    ]
    return(
        <section id='event' className='d-flex flex-column align-items-center container-md'>
            {
                eventname.map( (v, x) => {
                    return <div key={`event${x}`} className={v.cls}><a href={v.link}><img src={`${process.env.PUBLIC_URL}/img/${v.src}`} /></a>                       
        
            </div>
                })
            }
        </section>
    )
}

export default Event