import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import { ProfileContext } from "../../context/ProfileContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import SectionTitle from "../global-components/SectionTitle";
import { sectionData } from "./../../data/section.json";

const BlogCarousel = (props) => {
  let data = sectionData.service;
  const history = useHistory();
  const [profilo, setProfilo] = useContext(ProfileContext);
  const [blog, setBlog] = useContext(BlogContext);

  const [filteredBlog, setFileteredBlog] = useState([]);
  const auth = useAuthentication();
  let consulente = props.consulente;

  const handleArticolo = () => {
    history.push("/crea-articolo");
    console.log(blog);
  };

  useEffect(() => {
    const filter = blog.filter((cons) => cons.idConsulente == consulente.uid);
    setFileteredBlog(filter);
  }, [blog, props]);

  return (
    <div>
      {/* <!-- start service area --> */}
      <section
        className={`service pt-90 pb-90 ${
          window.location.pathname !== "/about" ? "bg-blue" : " "
        }`}
      >
        <div className="container">
          {typeof profilo !== "undefined" && profilo.uid == consulente.uid ? (
            <div className="row">
              <div className="col-12 center">
                <Button onClick={handleArticolo}>Aggiungi Articolo</Button>
              </div>
            </div>
          ) : null}

          {filteredBlog.length > 0 ? (
            <div className="row">
              <div className="col-lg-12 ">
                <SectionTitle title={"I miei ultimi articoli"} />
                {/*   solo per consulente profilo */}
              </div>

              <div className="col-lg-12">
                <div className="row">
                  {filteredBlog.map((item, i) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={i}>
                        <Link
                          to={{
                            pathname: "/blog-details/" + item.nome,
                            state: { dati: item },
                          }}
                        >
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
                                style={{ height: 250, objectFit: "cover" }}
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
                              <a>Leggi articolo </a>
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      {/* <!-- end service area --> */}
    </div>
  );
};

export default BlogCarousel;
