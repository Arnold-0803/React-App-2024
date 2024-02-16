import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { FaUtensils } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <FaUtensils style={{
          fontSize: '40px',
          color: '#ff004f',
        }}/>
        <Logo to={"/"}>
          <h2>K<span>iritu's</span> K<span>itchen</span></h2>
        </Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  letter-spacing: -1px;
`;

const Nav = styled.div`
  margin: -40px -180px 60px;
  padding: 4rem 0rem .5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #808080;

  svg{
    font-size: 2rem;
  }
`;

export default App;
