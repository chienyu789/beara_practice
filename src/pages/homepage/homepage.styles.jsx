import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-size: cover;
  height:850px;
  display: flex;
  position: relative;
`;

export const DirectoryContainer = styled.div`
  width: 100%;
`;

export const BlogContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height:700px;
  display: flex;
  justify-content: center;
  iframe{
    zoom: 2.2;
    @media (max-width:767px){
        zoom: 1.3;
    }
    @media (max-width:360px){
        zoom: 1.1;
    }
}
`;
