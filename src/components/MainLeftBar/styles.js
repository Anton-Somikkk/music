import styled from "styled-components";

export const MainNav = styled.nav`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`;

export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;

export const LogoImage = styled.img`
    width: 113.33px;
    height: 17px;
    
`;

export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;

export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
`;
