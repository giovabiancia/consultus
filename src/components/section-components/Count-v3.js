import React from "react";
import { sectionData } from "./../../data/section.json";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import warren from "../../img/warren.png";
import buto from "../../img/buto.jpg";
import enrico from "../../img/enrico.jpeg";
import marco from "../../img/marco.jpeg";
import { useHistory } from "react-router-dom";

const CountV3 = () => {
  let data = sectionData.count;
  const history = useHistory();

  const handleLink = () => {
    history.push("/registrazione-consulente");
  };
  return (
    <div>
      {/* <!-- start count area --> */}
      <section className="count pt-90 bg-blue">
        <div className="container">
          <div className="row">
            <div class="col-lg-8 offset-lg-2">
              <div
                class="section-title text-center wow fadeInUp"
                data-wow-duration="1.5s"
                style={{ paddingBottom: 0 }}
                data-wow-delay=".3s"
              >
                <h6>Chi ci ha già scelto</h6>
                <h2>Sei un consulente ?</h2>
                {/* <b>Sei un consulente ? </b> */}
                <button className=" btn-style mt-4" onClick={handleLink}>
                  <span>Registrati subito</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6  mt-4">
              <div className="center">
                <img
                  src={marco}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    height: 200,
                    width: 200,
                    objectFit: "cover",
                  }}
                ></img>
                <h5>Marco Fatucchi</h5>
                <small>Consulente Finanziario</small>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6  mt-4">
              <div className="center">
                <img
                  src={enrico}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    height: 200,
                    width: 200,
                    objectFit: "cover",
                  }}
                ></img>
                <h5>Enrico Palopoli</h5>
                <small>Consulente Assicurativo e Finanziario</small>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6  mt-4">
              <div className="center">
                <img
                  src={buto}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    backgroundPosition: "center",
                    height: 200,
                    width: 200,
                    objectFit: "cover",
                  }}
                ></img>
                <h5>Alessio Butini</h5>
                <small>Consulente Finanziario</small>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-4">
              <div className="center">
                <img
                  src={warren}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    height: 200,
                    width: 200,
                    objectFit: "cover",
                  }}
                ></img>
                <h5>Giovanni Bianciardi</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end count area --> */}
    </div>
  );
};

export default CountV3;
