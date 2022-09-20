/* eslint-disable import/prefer-default-export */
import styled, { css } from "styled-components";

const mainNav = css`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`;

const nav = css`
`;

export const MainNav = styled.nav`
    ${mainNav}
    ${nav}
`;

const navLogo = css`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;

const logo = css`
`;

export const NavLogo = styled.div`
    ${navLogo}
    ${logo}
`;

export const LogoImage = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`;

const navBurger = css`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const burger = css`
`;

export const NavBurger = styled.div`
    ${navBurger}
    ${burger}
`;

export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #D3D3D3;
`;