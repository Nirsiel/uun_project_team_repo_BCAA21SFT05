import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">

          <section className=" d-flex text-center">
            <ul
                className="list-group list-group-horizontal e mx-auto justify-content-center">
              <li className="px-3">
                Ján Kučera
              </li>
              <li className="px-3">
                Jan Novák
              </li>
              <li className="px-3">
                <i className="fas fa-skull-crossbones"></i> Pavlík Roman
              </li>
              <li className="px-3">
                Martin Haloda
              </li>
              <li className="px-3">
                Radovan Procházka
              </li>
            </ul>
          </section>
        </div>

        <div className="text-center p-3">
          BCAA 005 © 2021 |
          <a className="text-white"
             href="https://unicornuniversity.net/"> Unicorn
            Vysoká škola s.r.o.</a>
        </div>
      </footer>
  );
};

export default Footer;
