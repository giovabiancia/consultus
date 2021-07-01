import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import { ProfileContext } from "../../context/ProfileContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import SectionTitle from "../global-components/SectionTitle";
import { sectionData } from "./../../data/section.json";

const BlogCarousel = () => {
  let data = sectionData.service;
  const history = useHistory();
  const [profilo, setProfilo] = useContext(ProfileContext);
  const [blog, setBlog] = useContext(BlogContext);
  const auth = useAuthentication();

  const handleArticolo = () => {
    history.push("/crea-articolo");
    console.log(blog);
  };
  return (
    <div>
      {/* <!-- start service area --> */}
      <section
        className={`service pt-120 pb-90 ${
          window.location.pathname !== "/about" ? "bg-blue" : " "
        }`}
      >
        <div className="container">
          {profilo.uid == auth.loggedIn.uid ? (
            <div className="row">
              <div className="col-12 center">
                <Button onClick={handleArticolo}>Aggiungi Articolo</Button>
              </div>
            </div>
          ) : null}

          <div className="row">
            <div className="col-lg-12 ">
              <SectionTitle title={"I miei ultimi articoli"} />
              {/*   solo per consulente profilo */}
            </div>

            <div className="col-lg-12">
              <div className="row">
                {blog.map((item, i) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={i}>
                      <div
                        className={`item wow  `}
                        data-wow-duration="1.5s"
                        data-wow-delay=".4s"
                      >
                        <div className="img-part">
                          <img
                            src={item.immagine}
                            className="img-fluid"
                            alt="Service Img"
                          />
                        </div>
                        <div className="content">
                          <div className="icon">
                            <img
                              src={item.immagineConsulente}
                              className="avatar"
                              style={{ marginLeft: 0 }}
                            ></img>
                          </div>
                          <p>By {item.nomeConsulente}</p>
                          <h4>{item.nome}</h4>

                          <Link
                            to={{
                              pathname: "blog-details/" + item.nome,
                              state: { dati: item },
                            }}
                          >
                            Leggi articolo{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end service area --> */}
    </div>
  );
};

export default BlogCarousel;
