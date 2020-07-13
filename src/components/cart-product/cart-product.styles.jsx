import styled from 'styled-components';

export const Product = styled.div`
  width: 105%;
  height:100px;
  border-bottom: solid rgba(85, 104, 118, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;
  margin: 5px;
`;

export const Content = styled.span`
  width: 200px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  align-items: flex-start;
  margin: 5px;
`;

export const Remove = styled.div`
  width:10px;
  color:red;
`;
