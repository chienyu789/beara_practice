import styled, { css, keyframes } from 'styled-components';

export const slide = keyframes`
    10%
    {opacity: 1;}
    20%
    {opacity: 1;}
    30%
    {opacity: 0;}
`;

export const slides = css`
  ${slide} 15s infinite;
`;

export const BackgroundImage = styled.div`
    width:100%;
    height:100%;
    display:block;
    position: absolute;
    background-size: cover;
    background-position: center;
    opacity:0;
    animation: ${slides};
    &:nth-child(2)
    {animation-delay: 5s}
    &:nth-child(3)
    {animation-delay: 10s}
    }
`;
