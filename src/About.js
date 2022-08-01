import { services } from './services';
import { useState } from 'react';
import baner from './foon1.jpg';
// import CarouselPicters from './Components/CarouselPicters';

function About(){
    const [service, setService] = useState(services);
    return(
    <div className='App'>
        <div className='banner'>
        <img src={baner} width='100%' className='image-banner' alt=''/>
        </div>
        <h1 className='header'>Домашний текстиль</h1>
        <h2 className='h2-header'>Постельное белье по индивидуальным параметрам отличного качества.</h2>
    <div>
        <h2 className='h2'>Рады приветствовать Вас на нашем сайте.</h2>
        <p className='title'>Мы - молодая, но стремительно развивающаяся компания, предоставляющая свои услуги по всей России.</p>
    </div>
        <div className='service'>
            {service.map((item =>{
                const {id, ico, service } = item;
                return(
                    <div key={id} className= 'services'>
                        <img src= { ico } alt="ico"/>
                        <p className='serv'>{ service } </p>
                    </div>
                )
            }))}
        </div>
        <h3 className='h3'>Мы предлагаем Вам широкий ассортимент, доступные цены и отличное качество</h3>
        {/* <CarouselPicters/> */}
    </div>
    )
}
export default About;