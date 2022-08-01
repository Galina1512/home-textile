import { YMaps, Map } from "react-yandex-maps";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mwkaqnjb");
    if (state.succeeded) {
        return <p>Спасибо за обратную связь!</p>;
    }
    return (
        
        <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">
           Ваш Email адрес
       
        <input
          id="email"
          type="email" 
          name="email"
          requered
          placeholder="asd@gmail.com"
        />
         </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Напишите здесь Ваши вопросы"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="btn1">
          Отправить
        </button>
      </form>
    );
  }

function Contact() {

    return(
        <div className="container-duo">
        <div className="left-duo">
           <h3 className="h3-contact">Мы на карте</h3>
              <div className="maps">
              <YMaps>
                <Map defaultState={{ center: [59.93, 30.39], zoom: 10 }} />
            </YMaps>
               </div>
        <div className="tel-whatsupp">
              <h3 className="h3-contact">Контакты</h3>
            <div className="block-d ">
                <div className="sub-block-1">
                      <p className="emoji">🏘 </p>
                </div>
                <div className="adress1">
                      <p className="info first"> 913313  Санкт‑Петербург</p>
                      <p className="info">ул. Коллонтай, Весёлый поселок</p>
                </div>
                </div>
                <div className="block-d">
                   <div className="sub-block-1">
                      <p className="emoji"> 📱 </p>
                   </div>
                   <div class="adress">
                      <p className="info first">Телефон или WhathsApp</p>
                      <p className="info "><a className="email" href="https://wa.me/79602350637" target="_blank">+7 981 894 6047</a></p>
                   </div>
                </div>
                <div className="block-d">
                   <div className="sub-block-1">
                      <p className="emoji"> 📧 </p>
                   </div>
                   <div className="adress">
                      <p className="info first">e-mail  адрес:</p>
                      <p className="info"> <a class="email" href="mailto:showmeshow@yahoo.com">textile_spb@ya.ru</a></p>
                   </div>
                </div>
            </div>
          </div>


          <div className="right-duo">
          <div className="lines">
                  <h3 className="h3-contact">Напишите о своих проблемах</h3>
                  <p className="helping">Мы вам обязательно поможем</p>
            </div>
              <ContactForm/>;
            </div>
        
      </div>
    )
}
export default Contact;