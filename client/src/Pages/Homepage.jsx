import React, { useState, useEffect } from "react";
import "./Homepage.css";
import one from "../assets/01.png";
import two from "../assets/02.png";
import three from "../assets/03.png";
import four from "../assets/04.png";
import five from "../assets/05.png";
import six from "../assets/06.png";
import seven from "../assets/07.png";
import eight from "../assets/08.png";
import nine from "../assets/09.png";

import forum from "../assets/forum.svg";
import search from "../assets/search.svg";
import task from "../assets/task.svg";
import topic from "../assets/topic.svg";
import space from "../assets/space.svg";
import rule from "../assets/rule.svg";
import pending from "../assets/pending.svg";
import online from "../assets/online.svg";
import folderOpen from "../assets/folder_open.svg";
import forum_new from "../assets/forum_new.svg";
import autorenew from "../assets/autorenew.svg";
import bar from "../assets/bar.svg";
import calendar from "../assets/calendar.svg";
import cognition from "../assets/cognition.svg";
import currency_new from "../assets/currency_new.svg";
import currency from "../assets/currency.svg";
import database from "../assets/database.svg";
import description from "../assets/description.svg";
import domain from "../assets/domain.svg";

import ss from "../assets/ss.png";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
const Homepage = () => {
  const faq = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit, amet ",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit,  adipisicing elit. Eveniet",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor recusandae",
      info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eum voluptatum ducimus facilis aperiam similique blanditiis     recusandae, tenetur sint fuga, repudiandae earum vel quasi illo",
    },
  ];
  const [show, setShow] = useState(null);

  const showInfo = (id) => {
    setShow(id === show ? null : id);
  };
  return (
    <>
      <Navigation />
      <main>
        <article className="article1">
          <div className="article1-left">
            <div className="article1-left-head">
              <b>LOREM IPSUM IS SIMPLY DUMMY TEXT:</b> Lorem Ipsum Is Simple
              Dummy Text
            </div>
            <div className="article1-left-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              deleniti, vitae repellendus dignissimos quo quos optio ullam
              eligendi reiciendis id!
            </div>
            <div className="article1-left-btn">
              <button className="article1-btn-1">Lorem Ipsum</button>
              <button className="article1-btn-2">Lorem Ipsum</button>
            </div>
          </div>
          <div className="article1-right">
            <img src={one} alt="one" className="article1-image" />
          </div>
        </article>
        <article className="article2">
          <div className="article2-inside-container">
            <div className="article2-left">
              <img src={two} alt="" />
            </div>
            <div className="article2-right">
              <div className="article2-right-head">
                What is <b>LOREM IPSUM</b> ?
              </div>
              <div className="article2-right-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                consectetur odio repellendus, libero eaque magni veniam nulla
                officiis dignissimos cupiditate culpa adipisci eius numquam ea
                ut iste, Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et iste voluptates autem at quam temporibus sint commodi!
                Fugit sequi dolorem eum earum, id repudiandae perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet vel placeat dolor fugiat ea, consequatur iusto voluptatum eligendi quas. Laboriosam sint, excepturi hic blanditiis voluptates possimus sapiente veritatis nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quam distinctio quis rem facere ea, consequatur deserunt animi iusto commodi enim ullam optio possimus eligendi molestias perspiciatis nulla ipsa odit, repellendus minima! Dolore voluptatibus non quae alias reiciendis voluptas perferendis consectetur ipsa omnis sapiente, et blanditiis ad aspernatur soluta sunt veniam dolores voluptatum asperiores? Perferendis tempora repellat, reiciendis corrupti dolore eveniet architecto accusamus vel quod a aut ut sint nulla, non quibusdam reprehenderit dolor voluptatem animi porro ipsa. Quasi placeat ea, fuga temporibus, hic ullam, dicta ad natus dignissimos in maiores nobis praesentium sint porro nesciunt. Ipsa aliquid ex unde quos numquam, consequuntur perferendis sapiente iure quisquam. Corrupti earum odio nemo recusandae perferendis error, omnis culpa dolores adipisci voluptatibus, ullam voluptate. Esse nihil assumenda molestiae ad tempore in, enim deleniti natus blanditiis hic! Nostrum earum accusamus sed facilis ullam incidunt error explicabo nesciunt mollitia voluptatem autem cupiditate ad tempora sapiente quam nam reprehenderit aperiam fugit sit iusto veniam quasi, reiciendis unde quia? Sit illo ipsam earum eveniet aspernatur velit at ea suscipit error dolores quaerat, eos molestiae laborum! Quaerat harum necessitatibus illo dicta aut, cumque fugiat. Quisquam error corrupti aut, animi doloremque tempore minima voluptas, nulla cupiditate, suscipit placeat debitis?
                Eligendi, reiciendis non. At, consequatur? laborum laudantium
                delectus. Nihil natus optio, quia officia reprehenderit mollitia
                ratione odit vero voluptate dolorum beatae delectus obcaecati
                corrupti architecto, fugit dolore possimus omnis. Alias,
                aspernatur inventore. Ipsam harum excepturi commodi aliquid
                ipsum.
              </div>
            </div>
          </div>
        </article>
        <article className="article3">
          <div className="article3-head">
            Why <b>LOREM IPSUM</b>
          </div>
          <div className="article3-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            excepturi accusamus temporibus totam autem quas nemo, tenetur
            impedit, quidem ipsum eveniet facilis illum? Vero omnis error ut
            esse recusandae quisquam?
          </div>
          <div className="article3-box-container">
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={forum} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={search} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={topic} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={calendar} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={database} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={pending} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={currency} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={online} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={cognition} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
            <div className="article3-box">
              <div className="article3-box-left">
                <img src={autorenew} alt="" />
              </div>
              <div className="article3-box-right">
                <div className="article3-box-right-head">Lorem Ipsum</div>
                <div className="article3-box-right-para">
                  Lorem Ipsum Is Simply Dummy
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="article4">
          <div className="article4-head">
            What does <b>LOREM IPSUM</b> do
          </div>
          <div className="article4-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            quia iste omnis quas provident sapiente obcaecati sint ab
            perspiciatis rerum ea expedita voluptatum sunt aspernatur a commodi
            excepturi, ducimus totam?
          </div>
          <div className="article4-image">
            <img src={ss} alt="section4" />
          </div>
        </article>
        <article className="article5">
          <div className="article5-head">
            Who is <b>LOREM IPSUM</b> for ?
          </div>
          <div className="article5-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            accusamus aspernatur dolor aperiam, vitae nihil saepe officia
            incidunt explicabo delectus animi nulla. Officiis facilis, autem
            optio necessitatibus eos exercitationem ullam.
          </div>
          <div className="article5-box-container">
            <div className="article5-box">
              <div className="article5-box-image">
                <img src={three} alt="" />
              </div>
              <div className="article5-box-head">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="article5-box-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                doloribus temporibus obcaecati architecto officiis recusandae at
                ducimus autem, necessitatibus tempora, sed dolores laboriosam!
                Ipsum vero est similique dolore deserunt assumenda doloribus
                ipsam amet, sit repudiandae, aperiam fugit, autem et maxime!
              </div>
            </div>
            <div className="article5-box">
              <div className="article5-box-image">
                <img src={four} alt="" />
              </div>
              <div className="article5-box-head">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="article5-box-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                doloribus temporibus obcaecati architecto officiis recusandae at
                ducimus autem, necessitatibus tempora, sed dolores laboriosam!
                Ipsum vero est similique dolore deserunt assumenda doloribus
                ipsam amet, sit repudiandae, aperiam fugit, autem et maxime!
              </div>
            </div>
            <div className="article5-box">
              <div className="article5-box-image">
                <img src={five} alt="" />
              </div>
              <div className="article5-box-head">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="article5-box-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                doloribus temporibus obcaecati architecto officiis recusandae at
                ducimus autem, necessitatibus tempora, sed dolores laboriosam!
                Ipsum vero est similique dolore deserunt assumenda doloribus
                ipsam amet, sit repudiandae, aperiam fugit, autem et maxime!
              </div>
            </div>
          </div>
          <div className="article5-end-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
            culpa officia consequuntur eveniet est, qui odio placeat, voluptate
            nobis accusantium corrupti vitae. Dolore, sunt blanditiis. Cumque
            maxime libero rem dolores? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eaque, consequatur!
          </div>
        </article>
        <article className="article6">
          <div className="article6-head">LOREM IPSUM</div>
          <div className="article6-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            perferendis saepe neque laborum mollitia voluptatibus earum commodi
            placeat asperiores molestias a, temporibus accusamus ea aliquid quo
            harum dolores quas quaerat adipisci magnam unde! Saepe ut
            repellendus labore deserunt, accusantium quos. Voluptates labore ex
            nobis quibusdam quam voluptatum deserunt repellendus dignissimos.
          </div>
          <div className="article6-box-container">
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={space} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={currency_new} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={bar} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={description} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={space} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={forum_new} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={folderOpen} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={rule} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="article6-box">
              <div className="article6-box-top">
                <div className="article6-image">
                  <img src={domain} alt="" />
                </div>
                <div className="article6-box-top-head">Lorem Ipsum : </div>
              </div>
              <div className="article6-box-bottom">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
          </div>
        </article>
        <article className="article7">
          <div className="article7-left">
            <div className="article7-left-head">
              Lorem Ipsum Is Simply Dummy text Of The Printing And Typesetting
              Industry.
            </div>
            <div className="article7-left-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quasi ipsa quae a doloremque omnis aliquid corrupti, quo facere
              ut. At sunt nostrum, facere laboriosam ea nemo culpa soluta
              voluptate sequi deserunt, aliquam magnam reiciendis!
            </div>
            <button className="article7-left-button">Lorem Ipsum</button>
          </div>
          <div className="article7-right">
            <img src={six} alt="" />
          </div>
        </article>
        <article className="article8">
          <div className="article8-head">LOREM IPSUM</div>
          <div className="article8-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            perspiciatis tempore adipisci doloribus natus ad, qui eius officia
            architecto doloremque placeat eligendi ab iusto voluptatibus?
            Pariatur similique eius laborum in!
          </div>
          <div className="article8-box-container">
            <div className="article8-box">
              <div className="article8-box-image">
                <img src={seven} alt="" />
              </div>
              <div className="article8-box-bottom">
                <h2 className="article8-box-head">
                  Lorem Ipsum Is Simply Dummy text Of The Printing And
                  Typesetting Industry.
                </h2>
                <p className="article8-box-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fugiat minima hic nesciunt incidunt vel quisquam non
                  ipsa ducimus minus eaque accusantium tempore enim in,
                  necessitatibus voluptas cum illo eum deserunt impedit
                  doloremque adipisci, mollitia dolorum? Reiciendis enim tempora
                  quae. Nesciunt explicabo itaque iusto amet minus mollitia
                  quibusdam nihil quo.
                </p>
              </div>
            </div>
            <div className="article8-box">
              <div className="article8-box-image">
                <img src={eight} alt="" />
              </div>
              <div className="article8-box-bottom">
                <h2 className="article8-box-head">
                  Lorem Ipsum Is Simply Dummy text Of The Printing And
                  Typesetting Industry.
                </h2>
                <p className="article8-box-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fugiat minima hic nesciunt incidunt vel quisquam non
                  ipsa ducimus minus eaque accusantium tempore enim in,
                  necessitatibus voluptas cum illo eum deserunt impedit
                  doloremque adipisci, mollitia dolorum? Reiciendis enim tempora
                  quae. Nesciunt explicabo itaque iusto amet minus mollitia
                  quibusdam nihil quo.
                </p>
              </div>
            </div>
            <div className="article8-box">
              <div className="article8-box-image">
                <img src={nine} alt="" />
              </div>
              <div className="article8-box-bottom">
                <h2 className="article8-box-head">
                  Lorem Ipsum Is Simply Dummy text Of The Printing And
                  Typesetting Industry.
                </h2>
                <p className="article8-box-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fugiat minima hic nesciunt incidunt vel quisquam non
                  ipsa ducimus minus eaque accusantium tempore enim in,
                  necessitatibus voluptas cum illo eum deserunt impedit
                  doloremque adipisci, mollitia dolorum? Reiciendis enim tempora
                  quae. Nesciunt explicabo itaque iusto amet minus mollitia
                  quibusdam nihil quo.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="article9">
          <h1 className="article9-head">LOREM IPSUM</h1>
          <p className="article9-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima
            quidem assumenda, ad dolorem ex, culpa modi amet rem aspernatur
            voluptate? Assumenda earum molestias aspernatur veniam fuga incidunt
            amet recusandae!
          </p>
          <div className="article9-faq">
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
        <article className="article10">
          <h1 className="article10-head">LOREM IPSUM</h1>
          <p className="article10-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima
            quidem assumenda, ad dolorem ex, culpa modi amet rem aspernatur
            voluptate? Assumenda earum molestias aspernatur veniam fuga incidunt
            amet recusandae!
          </p>
          <div className="article10-form-part">
            <form>
              <input type="text" placeholder="Lorem Ipsum" />
              <input type="text" placeholder="Lorem Ipsum" />
              <input type="text" placeholder="Lorem Ipsum" />
              <input type="text" placeholder="Lorem Ipsum" />
              <input type="text" placeholder="Lorem Ipsum" />
              <input type="text" placeholder="Lorem Ipsum" />
            </form>
            <button className="article10-button">Lorem Ipsum</button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
