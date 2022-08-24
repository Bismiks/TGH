import React,{useState,useEffect} from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Nav.css'


function Header() {
    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                setShow(true)
            }else setShow(false)
        });
        return () => {
            window.removeEventListener("scroll",() => {})
        }//cleanup code
    },[])
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <Navbar bg="dark" variant="dark">
    <Container>
    {/* <Navbar.Brand href ="#Home">Random Quotes</Navbar.Brand> */}
    <Nav className="me-auto">
      <Nav.Link href="/"><h1 id='bookmark-1'>Home</h1></Nav.Link>  
      <Nav.Link href='/Bookmarks'><h1 id='bookmark'>Bookmarks</h1></Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
        

    </div>
  )
}

export default Header