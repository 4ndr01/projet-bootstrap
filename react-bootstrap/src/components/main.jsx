import React from "react";
import Nav from "../components/nav";


function Main() {
  return (
      <>
            <Nav/>
      <div className="container">

          <div className="row">
              <div className="col-md-12">
                  <h1 className="text-center">Nom Appli</h1>
              </div>

              <p className={"text-center"}>Description de l’application: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis vestibulum nunc, ut fringilla enim iaculis non. Donec cursus nisi libero, varius ullamcorper erat dignissim nec. Cras tristique tempus urna vitae iaculis. Nunc venenatis turpis nec purus venenatis accumsan. Etiam accumsan sapien eget urna molestie, nec feugiat neque iaculis. Cras neque nisi.
                </p>


                  <div className="col-md-4 mx-auto">
                  <div className="card mt-5 position-relative">
                      <img src="/assets/challenge/Rectangle%205.svg" className="card-img-top mx-auto" alt="..."/>

                  </div>

                      <a href="/challenge2">Lien vers les challenges</a>




              </div>
          </div>
      </div>
        </>
  );
}

export default Main;
