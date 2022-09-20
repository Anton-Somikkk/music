/* eslint-disable import/prefer-default-export */
import styled, { css } from "styled-components";

const mainSidebar = css`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`;

const sidebar = css`
`;

export const MainSidebar = styled.div`
    ${mainSidebar}
    ${sidebar}
`;
