import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Table, Carousel, CarouselItem, CarouselCaption, Card, CardBody, CardImg, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">

    <section className=" d-flex text-center">
      <ul className="list-group list-group-horizontal e mx-auto justify-content-center">
          <li className="px-3">
            Ján Kučera
          </li>
          <li className="px-3">
            Jan Novák
          </li>
          <li className="px-3">
            Pavlík Roman
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

  <div class="text-center p-3">
    © 2021 BCAA 005: 
    <a class="text-white" href="https://unicornuniversity.net/"> Unicorn Vysoká škola s.r.o.</a>
  </div>
</footer>
    )
}

export default Footer
