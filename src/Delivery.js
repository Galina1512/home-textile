import React, { useState } from 'react';
import card from './cards.jpg';
// import ProductsDel from './Components/Product/ProductsDel';
// import AllCategoryDel from './Components/Filter/AllCategotyDel';
import up from './up-24.jpg';
import bele from './st_bele.jpg';
import bele2 from './bele2.jpg';
import bele3 from './bele3.jpg';
import bele4 from './bele4.jpg';


function Delivery(){
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) setVisible(true)
        else if (scrolled <= 300) setVisible(false)
      };   

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      window.addEventListener('scroll', toggleVisible);

    return(
<div className="App">
        <h2 className="h2-delivery">Доставка и оплата.</h2>
    <div className="main-delivery">
        <div className="left-menu">
        <img src={ bele } alt='bele' className='bele'/>
        <img src={ bele2 } alt='bele' className='bele'/>
        <img src={ bele3 } alt='bele' className='bele'/>
        <img src={ bele4 } alt='bele' className='bele'/>


            {/* <AllCategoryDel/> */}
        </div>
        <div className="payment">
        {/* <ProductsDel/> */}

        <div>
                <h3 className="h3-delivery">Доставка</h3>
            <h4 className="h4-delivery"> Мы можем доставить Ваш заказ в любую точку России!</h4>
            <div className="text-delivery">
                <p className="p-18">Доставка по Москве и Московской области:</p>
                <p className="p-16">- срок от 2 до 14 рабочих дней</p>
                <p className="p-16">- курьером или самовывоз</p>

                <p className="p-18">Доставка в регионы:</p>
                <p className="p-16">- срок от 2 до 14 рабочих дней</p>
                <p className="p-16">- EMS или Почтой России</p>
        <div className="attention">
               <p className="p-attention" ><span className="span-delivery" > Внимание! </span>Доставка осуществляется за счет покупателя по тарифам перевозчика. </p>
        </div>
                <p className="p-18">Срок отгрузки и время доставки</p>
                <p className="p-16">Отгрузка товара производится в течении 5 рабочих дней следующих за днем оплаты.</p>
                <p className="p-16">На заказы с большим количеством товаров, по согласованию срок отгрузки может быть увеличен.</p>
                <p className="p-16"> Дозаказы и возможные замены товаров увеличивают сроки отгрузки основного заказа. </p>
                <p className="p-16">Время доставки зависит от выбранного Вами способа доставки по нормативам перевозчика.</p>
        <div className="attention">
               <p className="p-attention" ><span className="span-delivery" > Внимание! </span>Неправильно указанный номер телефона, неточный или неполный адрес доставки могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется. </p>
        </div>
    </div>
<div className='pay-buy' >
<h3 className="h3-delivery">Оплата</h3>

<h4 className="h4-delivery"> Оплатить заказ можно любым удобным для Вас способом:</h4>
            <div className="text-delivery">
                <p className="p-18">1. Оплата банковской картой.</p>
                <p className="p-16">Проведите оплату заказа с использованием банковских карт следующих платежных систем: МИР, VISA, MasterCard</p>
                <img src={card} alt='cards'  className='card'/>

                <p className="p-18">2. Банковский перевод</p>
                <p className="p-16">Счет можно оплатить любым удобным для Вас способом - через оператора банка, в терминале любого банка или через интернет-банк.</p>
        <div className="attention">
               <p className="p-attention" ><span className="span-delivery" >Банковские реквизиты для оплаты: </span></p>
               <p className="p-attention" >ИП Фролова Марина Михайловна</p>
               <p className="p-attention" >ИНН 370212196911</p>
               <p className="p-attention" >р/с 40802810517000007731</p>
               <p className="p-attention" >ИВАНОВСКОЕ ОТДЕЛЕНИЕ №8639 ПАО СБЕРБАНК г. Иваново</p>
               <p className="p-attention" > БИК 042406608
               </p>
        </div>
                <p className="p-18">3. Оплата в нашем офисе</p>
                <p className="p-16">Свой заказ вы можете оплатить наличными деньгами и забрать в нашем офисе по адресу: 153025, г. Vjcrdf, ул. Дзержинского, д. 39, предварительно уведомив нашего менеджера о своем приезде.</p>
        <div className="attention">
               <p className="p-attention" ><span className="span-delivery" > Важно!</span> Неоплаченный товар не подлежит отправке и на резерв не ставится. </p>
        </div>
       </div>
    </div>
    </div>
    </div>

    </div>

    <button className='scrollBack' onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} >
        <img src={up} className='up' alt=''/>
      </button>
</div>
    )
}
export default Delivery;