/* eslint-disable import/prefer-default-export */
import styled, { css } from "styled-components";

const navMenu = css`
    display: block;
    visibility: visible;
`;

const menu = css`
`;

export const NavMenu = styled.div`
    ${navMenu}
    ${menu}
`;

export const MenuList = styled.ul`
padding: 18px 0 10px 0;
`;

export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;

export const MenuLink = styled.a`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;