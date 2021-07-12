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
                <a className="text-white" href="https://github.com/Pelleas27">Ján Kučera</a>
              </li>
              <li className="px-3">
                <a className="text-white" href="https://github.com/Nirsiel">Jan Novák</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="text-center p-3">
          <a className="text-white" href="https://github.com/Nirsiel/uun_project_team_repo_BCAA21SFT05">GitHub</a> |
          <a className="text-white" href="https://www.gnu.org/licenses/lgpl-3.0.en.html">LGPL v3</a>
        </div>
        </footer>
  );
};

export default Footer;
