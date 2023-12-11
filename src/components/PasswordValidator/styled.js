import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: block;
    margin-left: 44px;

    > * {
      margin-bottom: 10px;
    }
  }
`;

export const DivMessage = styled.div`
display: flex;
`;

export const InputContainer = styled.div`
  margin-right: 54px;
  margin-top: 50px;

  @media (max-width: 500px) {
    margin-top:0;
  }
`;

export const ValidationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin-left: 8px;
`;

export const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
  
