import React, { useState, useEffect } from "react";
import Sitelogo from "./assets/dummy logo01 2.png";
import openIcon from "./assets/hamburger-open.svg";
import closeIcon from "./assets/close-icon.svg";
import one from "./assets/01.png";
import two from "./assets/02.png";
import three from "./assets/03.png";
import four from "./assets/04.png";
import five from "./assets/05.png";
import six from "./assets/06.png";
import seven from "./assets/07.png";
import eight from "./assets/08.png";
import nine from "./assets/09.png";
import forum from "./assets/forum.svg";
import search from "./assets/search.svg";
import topic from "./assets/topic.svg";
import calendar from "./assets/calendar.svg";
import database from "./assets/database.svg";
import pending from "./assets/pending.svg";
import currency from "./assets/currency.svg";
import online from "./assets/online.svg";
import cognition from "./assets/cognition.svg";
import autorenew from "./assets/autorenew.svg";
import ss from "./assets/ss.png";
import domain from "./assets/domain.svg";
import rule from "./assets/rule.svg";
import folderopen from "./assets/folder_open.svg";
import task from "./assets/task.svg";
import space from "./assets/space.svg";
import description from "./assets/description.svg";
import bar from "./assets/bar.svg";
import forum_new from "./assets/forum_new.svg";
import currency_new from "./assets/currency_new.svg";
import footerlogo from "./assets/dummy logo01 3.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";

import "./App.css";
const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const faq = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit, amet ",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit,  adipisicing elit. Eveniet",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor recusandae",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
  ];
  const [show, setShow] = useState(null);

  const showInfo = (id) => {
    setShow(id === show ? null : id);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>


      <main>
        <article className="section1">
          <div className="sec1-head">
            <h1 className="main-heading1">
              LOREM IPSUM IS SIMPLY DUMMY TEXT:{" "}
              <span>Lorem ipsum dolor sit amet.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur Lorem, ipsum dolor.
            </p>
            <button className="btnsec1-1">Lorem ipsum</button>
            <button className="btnsec1-2">Lorem ipsum</button>
          </div>
          <div className="sec1-img">
            <img src={one} alt="image 1" className="image1" />
          </div>
        </article>
        <article className="section2">
          <div className="sec2-image">
            <img src={two} alt="" className="image2" />
          </div>
          <div className="sec2-content">
            <h1 className="sec2-head">What is LOREM IPSUM</h1>
            <p className="sec2-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis fugiat, ullam necessitatibus esse molestiae
              voluptatum nihil dolorem, nostrum expedita cupiditate explicabo
              impedit delectus magni iure atque deleniti minima veniam tenetur
              amet tempore animi assumenda eius? Magnam, excepturi odit? Ipsa,
              ad? <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur corrupti eaque corporis, quasi hic magnam deleniti
              nostrum, animi sint fugiat omnis libero nisi minus impedit
              provident aut maiores esse incidunt! Distinctio eaque tempore
              dolorum nisi quis voluptatum, obcaecati temporibus facere, dolorem
              magnam perspiciatis nesciunt, ipsa commodi qui ipsum. Illo
              recusandae aut dolorum nostrum commodi, nemo tempora accusamus
              impedit quae, quis, corrupti necessitatibus facilis? Autem
              architecto voluptatibus fuga magnam sapiente reprehenderit
              laudantium quam amet tempore suscipit laboriosam sunt ex, totam
              qui?
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              in ipsam obcaecati voluptate nihil natus ipsa quos soluta
              similique aspernatur assumenda itaque vitae nemo, animi aliquam
              sequi reiciendis cupiditate consequuntur hic, quia possimus? Eos
              cumque aut ullam molestiae maiores ab quis magnam consequuntur
              dolorem? Debitis tenetur illum facere architecto pariatur nemo ad
              veniam sit nam. Illo deleniti repellat eaque ratione aliquam,
              dolorum sed. <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              expedita exercitationem itaque ipsum atque aliquam nulla quibusdam
              suscipit numquam minus.
            </p>
          </div>
        </article>
        <article className="section3">
          <p className="sec3-head">
            Why <b>LOREM IPSUM</b>
          </p>
          <p className="sec3-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            cumque culpa consectetur ad eos repudiandae iusto odit, vel modi
            laudantium fugiat quidem, quod error earum tenetur? Voluptatem quo
            ut sed libero possimus, incidunt voluptas eligendi et veniam
            mollitia eius hic.
          </p>
          <div className="sec3-box-contents">
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img src={forum} alt="section3-icons" className="sec3-icon" />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img src={search} alt="section3-icons" className="sec3-icon" />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img src={topic} alt="section3-icons" className="sec3-icon" />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img
                  src={calendar}
                  alt="section3-icons"
                  className="sec3-icon"
                />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img
                  src={database}
                  alt="section3-icons"
                  className="sec3-icon"
                />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img src={pending} alt="section3-icons" className="sec3-icon" />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img
                  src={currency}
                  alt="section3-icons"
                  className="sec3-icon"
                />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img src={online} alt="section3-icons" className="sec3-icon" />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img
                  src={cognition}
                  alt="section3-icons"
                  className="sec3-icon"
                />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec3-box">
              <p className="sec3-box-head">
                <img
                  src={autorenew}
                  alt="section3-icons"
                  className="sec3-icon"
                />
                <b>Lorem Ipsum</b>
              </p>{" "}
              <p className="sec3-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
          </div>
        </article>
        <article className="section4">
          <p className="sec4-mainhead">
            What does <b>LOREM IPSUM</b>
          </p>
          <p className="sec4-maincont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            rem, voluptas quis necessitatibus nostrum aliquid dicta vel quaerat
            ipsa soluta similique, quae ipsam! Sequi, quia quo praesentium
            laborum nam quos odio maxime, exercitationem culpa quibusdam, illo
            nemo? Dicta, id quaerat.
          </p>
          <img src={ss} alt="" className="ss" />
        </article>
        <article className="section5">
          <p className="sec5-mainhead">
            Who is <b>LOREM IPSUM</b> for
          </p>
          <p className="sec5-maincont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            dignissimos beatae quam delectus rerum ad inventore quae molestias
            harum ratione, unde quidem? Veritatis voluptates sed labore
            corporis, maiores quasi asperiores.
          </p>
          <div className="sec5-box-cont">
            <div className="sec5-box">
              <img src={three} alt="" className="sec5-img" />
              <div className="sec5-box-contents">
                <p className="sec5-content-subhead">
                  Lorem Ipsum Is Simply Dummy Text
                </p>
                <p className="sec5-content-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, mollitia vel molestiae aut, eum, nobis libero in
                  corrupti obcaecati perspiciatis assumenda. Ipsam tenetur
                  similique itaque tempore ut repellendus ipsum eligendi?
                </p>
              </div>
            </div>
            <div className="sec5-box">
              <img src={four} alt="" className="sec5-img" />
              <div className="sec5-box-contents">
                <p className="sec5-content-subhead">
                  Lorem Ipsum Is Simply Dummy Text
                </p>
                <p className="sec5-content-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, mollitia vel molestiae aut, eum, nobis libero in
                  corrupti obcaecati perspiciatis assumenda. Ipsam tenetur
                  similique itaque tempore ut repellendus ipsum eligendi?
                </p>
              </div>
            </div>
            <div className="sec5-box">
              <img src={five} alt="" className="sec5-img" />
              <div className="sec5-box-contents">
                <p className="sec5-content-subhead">
                  Lorem Ipsum Is Simply Dummy Text
                </p>
                <p className="sec5-content-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, mollitia vel molestiae aut, eum, nobis libero in
                  corrupti obcaecati perspiciatis assumenda. Ipsam tenetur
                  similique itaque tempore ut repellendus ipsum eligendi?
                </p>
              </div>
            </div>
          </div>
          <p className="sec5-maincont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            dignissimos beatae quam delectus rerum ad inventore quae molestias
            harum ratione, unde quidem? Veritatis voluptates sed labore
            corporis, maiores quasi asperiores.
          </p>
        </article>
        <article className="section6">
          <h1 className="sec6-head">LOREM IPSUM</h1>
          <p className="sec6-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quam dolor ea voluptate maxime harum debitis blanditiis ab expedita
            minus nisi possimus voluptatibus temporibus fuga, amet quod,
            quisquam consectetur sint provident veritatis, saepe obcaecati.
            Similique totam, qui omnis praesentium molestiae in sunt repellat
            assumenda tempore veritatis natus ad voluptates enim?
          </p>
          <div className="sec6-box-cont">
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img src={space} alt="section6-icons" className="sec6-icon" />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img
                  src={currency_new}
                  alt="section6-icons"
                  className="sec6-icon"
                />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img src={bar} alt="section6-icons" className="sec6-icon" />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img
                  src={description}
                  alt="section6-icons"
                  className="sec6-icon"
                />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img src={task} alt="section6-icons" className="sec6-icon" />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img
                  src={forum_new}
                  alt="section6-icons"
                  className="sec6-icon"
                />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img
                  src={folderopen}
                  alt="section6-icons"
                  className="sec6-icon"
                />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img src={rule} alt="section6-icons" className="sec6-icon" />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
            <div className="sec6-box">
              <p className="sec6-box-head">
                <img src={domain} alt="section6-icons" className="sec6-icon" />
                <b>Lorem Ipsum</b>
              </p>
              <p className="sec6-sub-head">Lorem Ipsum Is Simply Dummy</p>
            </div>
          </div>
        </article>
        <article className="section7">
          <div className="sec7-cont">
            <h1 className="sec7-cont-head">
              Lorem ipsum Is Simply Dummy Text Of The Printing And Typewriting
              Industry
            </h1>
            <p className="sec7-cont-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              laudantium maxime velit veniam animi atque quisquam.
              Necessitatibus suscipit quae sed et delectus numquam repellat
              fugit beatae corrupti. Sed culpa, natus dignissimos, nulla sit,
              expedita optio pariatur aliquid iusto quam laborum tempora quae
              soluta quisquam quis. Ratione minus non ut atque.
            </p>
            <button className="btn-sec7">Lorem Ipsum</button>
          </div>
          <img src={six} alt="" className="sec7-img" />
        </article>
        <article className="section8">
          <h1 className="sec8-head">LOREM IPSUM</h1>
          <p className="sec8-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            eum voluptatum ducimus facilis aperiam similique blanditiis
            recusandae, tenetur sint fuga, repudiandae earum vel quasi illo
            alias itaque ad voluptate velit? Molestiae odio est hic similique
            assumenda. Laborum eos exercitationem velit.
          </p>
          <div className="sec8-box-cont">
            <div className="sec8-box">
              <img src={seven} alt="" className="sec8img" />
              <p className="sec8-box-para-head">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p className="sec8-box-para-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                velit eligendi mollitia minus. In totam tempora soluta saepe cum
                consequatur aliquam quas, earum veniam, eos repellat explicabo
                rem? Excepturi a laborum esse ducimus doloribus nesciunt non
                assumenda suscipit tenetur. Ab voluptate corporis maxime
                aspernatur, adipisci aliquid optio minima vero iste similique
                perspiciatis pariatur! Quis quam fugiat, aliquid repellendus,
                dolorum ullam delectus reprehenderit quisquam maxime nisi
              </p>
            </div>
            <div className="sec8-box">
              <img src={eight} alt="" className="sec8img" />
              <p className="sec8-box-para-head">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p className="sec8-box-para-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                velit eligendi mollitia minus. In totam tempora soluta saepe cum
                consequatur aliquam quas, earum veniam, eos repellat explicabo
                rem? Excepturi a laborum esse ducimus doloribus nesciunt non
                assumenda suscipit tenetur. Ab voluptate corporis maxime
                aspernatur, adipisci aliquid optio minima vero iste similique
                perspiciatis pariatur! Quis quam fugiat, aliquid repellendus,
                dolorum ullam delectus reprehenderit quisquam maxime nisi
              </p>
            </div>
            <div className="sec8-box">
              <img src={nine} alt="" className="sec8img" />
              <p className="sec8-box-para-head">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p className="sec8-box-para-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                velit eligendi mollitia minus. In totam tempora soluta saepe cum
                consequatur aliquam quas, earum veniam, eos repellat explicabo
                rem? Excepturi a laborum esse ducimus doloribus nesciunt non
                assumenda suscipit tenetur. Ab voluptate corporis maxime
                aspernatur, adipisci aliquid optio minima vero iste similique
                perspiciatis pariatur! Quis quam fugiat, aliquid repellendus,
                dolorum ullam delectus reprehenderit quisquam maxime nisi
              </p>
            </div>
          </div>
        </article>
        <article className="section9">
          <h1 className="sec9-head">LOREM IPSUM</h1>
          <p className="sec9-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            eum voluptatum ducimus facilis aperiam similique blanditiis
            recusandae, tenetur sint fuga, repudiandae earum vel quasi illo
            alias itaque ad voluptate velit? Molestiae odio est hic similique
            assumenda. Laborum eos exercitationem velit.
          </p>
          <div className="sec9-faq">
            {faq &&
              faq.map((ques) => (
                <div className="faq" key={ques.id}>
                  <div className="top-itms">
                    <p className="title">{ques.title}</p>
                    <button className="show" onClick={() => showInfo(ques.id)}>
                      +
                    </button>
                  </div>
                  <p
                    className="info"
                    style={{ display: ques.id === show ? "block" : "none" }}
                  >
                    {ques.info}
                  </p>
                </div>
              ))}
          </div>
        </article>
        <article className="section10">
          <h1 className="sec10-para-head">LOREM IPSUM</h1>
          <p className="sec10-para-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            animi eaque alias odit culpa nam magnam ad amet, tempore quidem
            distinctio, laboriosam voluptatum? Quis asperiores, magnam
            voluptatum dolore fugiat nihil.
          </p>
          <form>
            <input type="text" placeholder="Lorem Ipsum" className="input10" />
            <input type="text" placeholder="Lorem Ipsum" className="input10" />
            <input type="text" placeholder="Lorem Ipsum" className="input10" />
            <input type="text" placeholder="Lorem Ipsum" className="input10" />
            <input type="text" placeholder="Lorem Ipsum" className="input10" />
            <input type="text" placeholder="Lorem Ipsum" className="input10" />
            <button>Lorem Ipsum</button>
          </form>
        </article>

        <footer>
          <div className="left-footer">
            <div className="logo-footer-part">
              <img className="footer-logo" src={footerlogo} alt="" />
              <p className="footer-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                eius!
              </p>
            </div>
            <div className="footer-form-part">
              <p className="form-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                assumenda.
              </p>
              <input
                type="text"
                className="footer-input"
                placeholder="Lorem Ipsum"
              />
              <button className="footer-btn">Lorem Ipsum</button>
            </div>
          </div>
          <div className="right-footer">
            <p>*****@gmail.com</p>
            <p>95*****690</p>
            <div className="social-footer">
              <div className="social-bg">
                <img src={insta} alt="" className="footer-social" />
              </div>
              <div className="social-bg">
                <img src={linkedin} alt="" className="footer-social" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
