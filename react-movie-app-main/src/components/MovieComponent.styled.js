
import styled from "styled-components";


export const MovieContainer = styled.div`

  //background-color: #f0eee4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  //box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;

  background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 15px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

  
`;
export const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
export const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #1a1110;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`; 