
import React from 'react';
import './Page1.css'
import Header from "../components/Header/Header";
import aboutHuawei from  '../static/img/aboutHuawei.jpg'
import PageTab from "./PageTub/PageTab";




const Page1 = () => {
  // console.log(props)
  return (
    <div className='page1-container-page'>
      <Header/>
      <section className='section'>
        <div className='banner-wrapper'>
          <img className='header-banner' src={aboutHuawei} alt='AboutHuawei'></img>
          <div className='text-header'>

            <h1>О Huawei</h1>
            <div className='text-description'>
              <p>Создаем ценность для наших клиентов. Способствуем развитию отрасли. Стимулируем экономический рост.</p>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <h2>КТО МЫ?</h2>
        <div className='main-text'>
          <div>
            <p>
              Компания Huawei, основанная в 1987 году, является ведущим глобальным поставщиком ИКТ-инфраструктуры и интеллектуальных устройств.
              У нас более 194 000 сотрудников, мы работаем в более чем 170 странах и регионах, обслуживая более трех миллиардов человек по всему миру.
              Мы стремимся предоставить цифровые технологии каждому человеку, дому и организации для создания полностью подключенного интеллектуального мира.
              Чтобы реализовать эту цель, мы делаем следующее:
            </p>
            <ul>
              <li>Помогаем достичь повсеместной «подключенности» и продвигаем равенство в доступе к сетям во всем мире;
              </li>
              <li>Обеспечиваем максимальную вычислительную мощность, благодаря которой облачные и интеллектуальные технологии могут проникнуть во все отрасли и сферы деятельности человека;</li>
              <li>Создаем цифровые платформы, чтобы помочь всем отраслям и организациям стать более гибкими, эффективными и динамичными;</li>
              <li>Меняем пользовательский опыт с помощью ИИ, делая его его более персонализированным для людей во всех сценариях, будь то дома, на работе или в дороге.</li>
            </ul>
          </div>
          <PageTab/>
        </div>
      </div>
    </div>
  )
}

export default Page1