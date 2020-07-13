import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: black;
  position: absolute;
  top: 0; 
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
`;

export const Title = styled.span`
  display: none;
`;

export const Subtitle = styled.span`
  display: none;
`;

export const Move = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  height:100%;
  align-items: center;  
  position: relative;
  &:hover {
    ${Overlay}{
        display: block;
        opacity: 0.5;
    }
    ${Title}{
        display:block;
        color: white;
        text-align: center;
        position: relative;
        font-size: 36px;
    }
    ${Subtitle}{
        display:block;
        width: 80%;
        color: white;
        text-align: center;
        position: relative;
        font-size: 16px;
    }
  }
`;

export const Image = styled.img`
  width:100%;
  height: 100%;
  object-fit:cover;
  position: absolute;
  top:0;
  left: 0;
`;
