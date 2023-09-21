import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';


const Header = (props) => {
  

  const linknm =  props.dbinfo.gnbname.map((v, i)=>{
    return v.link
  })



  

 

  return (
    <>
      <Navbar expand="md" id="hd" className="d-flex flex-wrap fixed-top py-0">        
        <div className="container-lg">
          <h1 className="toplogo mb-0">
            <Navbar.Brand href="/" className="d-block">
              <img src={`${process.env.PUBLIC_URL}/img/LG-logo.svg`} alt="logo" className="top-logo img-fluid d-block" />
            </Navbar.Brand>
          </h1>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav>
              <Scrollspy
                items={linknm}
                currentClassName="active"
                offset={-100}
                componentTag="ul"
                className="gnb d-flex"
              >
                {props.dbinfo.gnbname.map((item, index) => (
                  <li key={index}>
                    <Nav.Link href={`#${item.link}`}>{item.tname}</Nav.Link>
                  </li>
                ))}
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
          
            <ul className='d-flex my-link'>
            {props.dbinfo.supportname.map((v,i)=>(
              <li key={`support${i}`} className='ms-4 mt-1'>
                <a href={v.link} target={v.target}><i class={v.name}></i></a>
            </li>
            ))}
            </ul>
            
        </div>
      </Navbar>
    </>
         
     
  );
};

export default Header