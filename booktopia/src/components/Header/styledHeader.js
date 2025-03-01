import styled from 'styled-components';
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  top:0;
  left:0;
  padding: 1rem;
  width:100%;
  height:70px;
  z-index:1000;
  background-color:#d1dfeb;
  color: #fff;
  margin:0px;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.8);
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open===true ? '0' : '-100%')}; /* Adjusted to slide in from right */
  width: 250px;
  height: 100%;
  background-color:#f0f3f5;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 1);
  transition: right 0.3s ease-in-out; /* Adjusted transition */
`;
export const SideMenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position:relative;
`;
export const SideMenuItem = styled.li`
  padding: 1rem;
  color: #477578;
  cursor: pointer;
  font-size:17px;
  font-family:monospace;
  &:hover {
    color:black;
  }
`;
export const SideMenuItemContainer=styled.div`
 
  &:hover{
    background-color:#d1e3e3;
  }
`;
// export const Menubar=styled.div`
//     display:flex;
//     flex-direction:column;
//     position:fixed;
//     top:0;
//     right:0;
//     z-index:1001;
//     width:300px;
//     height:100vh;
//     align-items:flex-start;
//     justify-content:flex-start;
//     padding:30px;
//     background-color:red;
    
// `;
export const NavbarLink = styled.a`
  color: #2e6b62;
  cursor: pointer;
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.3s ease;
  font-family:monospace;
  font-size:18px;
  &:hover {
    color: #519187;
  }
`;
export const MenubarItems=styled.div`
  margin-right:1rem;
  align-items:center;
  display:flex;
  justify-content:center;
  align-items:center;
  @media(max-width:768px){
    display:none;
  }
`
export const MenubarIcon=styled.div`
    padding-left:1rem;
    margin-right:2rem;
    display:none;
    @media(max-width:768px){
      display:flex;
      justify-content:center;
      align-items:center;

    }
`;
export const Heading=styled.a`
  text-decoration:none;
  color:#2e6b62;
  font-size:25px;
  font-family: cursive;
  width:30px;
  cursor:pointer;
  &:hover {
    color: #12635f;
  }
  `;

export const Image=styled.img`
  border-radius:10px;
  max-width:100%;
  height:auto;
`;