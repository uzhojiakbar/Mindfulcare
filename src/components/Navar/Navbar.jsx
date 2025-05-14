'use client'
import styled from 'styled-components'

const NavbarWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: #fdf9f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  

  border: 1px solid red;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 22px;
  gap: 15px;

  user-select: none;
  img {
    width: 50px;
    height: 50px;
  }
`

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: #111;
    text-decoration: none;
    font-weight: 400;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &.active {
      font-weight: 600;
    }
  }
`

const Button = styled.button`
  background-color: #ee7543;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo>
                <img src="/favicon.svg" alt="logo" />
                Mindfulcare
            </Logo>

            <NavLinks>
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Page</a>
            </NavLinks>

            <Button>Contact Us</Button>
        </NavbarWrapper>
    )
}

export default Navbar
