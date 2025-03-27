import styled from "styled-components";

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #a9b5df, #ffffff);
`;

const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 110px;
  width: 900px;
`;

const StyledH1Container = styled.h1`
  color: #2d336b;
  text-align: center;
  font-size: 70px;
  margin-top: 200px;

  & span {
    padding: 10px;
    background: linear-gradient(180deg, #a9b5df, #ffffff);
    border-radius: 10px;
    background-size: 200% 200%;
    animation: gradientShift 1s alternate;
  }

  @keyframes gradientShift {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
`;

const StyledTextContainer = styled.h1`
  width: 600px;
  color: #2d336b;
  font-size: 20px;

  & span {
    background-color: #a9b5df;
  }
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  gap: 70px;
`;

const StyledImageContainer = styled.div`
  & img {
    height: 250px;
    width: 250px;
    border-radius: 20px;
    transform: rotate(5deg);
    padding: 10px;
    border: 5px solid #a9b5df;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover {
      transform: rotate(10deg) scale(1.03);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

const StyledDescriptionContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface IStyledDescriptionButton {
  color?: string;
}

const StyledDescriptionButton = styled.button<IStyledDescriptionButton>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 100px;
  background-color: transparent;
  border: 2px solid ${({ color }) => color || "black"};
  color: black;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 1000;
  font-size: 14px;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    background-color: ${({ color }) =>
      color ? `${color}20` : "rgba(0, 0, 0, 0.2)"};
  }
`;

const StyledContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export {
  StyledHomeContainer,
  StyledH1Container,
  StyledHeaderContainer,
  StyledTextContainer,
  StyledDescriptionContainer,
  StyledImageContainer,
  StyledDescriptionContainer2,
  StyledDescriptionButton,
  StyledContainerButtons,
};
