import styled from "styled-components";
import { theme, breakpoints } from "../../tokens/tokens";

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, ${theme.colors.secondary}, #ffffff);
  gap: 80px;
  padding-bottom: 50px;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 150px;
    padding-bottom: 100px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 90%;
  max-width: ${theme.sizes.headerWidth};
  padding: 0 20px;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 110px;
    padding: 0;
  }
`;

export const StyledH1 = styled.h1`
  color: ${theme.colors.primary};
  text-align: center;
  font-size: 2.5rem;
  margin-top: 100px;
  padding: 0 15px;

  span {
    padding: 8px;
    background: linear-gradient(180deg, ${theme.colors.secondary}, #ffffff);
    border-radius: 10px;
    background-size: 200% 200%;
    animation: gradientShift 1s alternate;
    font-size: 2.2rem;
    display: inline-block;
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

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 70px;
    margin-top: 200px;

    span {
      padding: 10px;
      font-size: 3.2rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-top: 80px;
  }
`;

export const StyledHeroText = styled.p`
  width: 100%;
  max-width: 600px;
  color: ${theme.colors.primary};
  font-size: 1rem;
  line-height: 1.6;
  padding: 0 15px;

  span {
    background-color: ${theme.colors.secondary};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
    padding: 0;
  }
`;

export const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 70px;
  }

  & div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledHeroImage = styled.div`
  img {
    height: auto;
    width: 150px;
    max-width: ${theme.sizes.imageSize};
    border-radius: 20px;
    padding: 8px;
    border: 3px solid ${theme.colors.secondary};
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: ${breakpoints.tablet}) {
      width: ${theme.sizes.imageSize};
      padding: 10px;
      border: 5px solid ${theme.colors.secondary};
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 150px;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 15px;
    margin-top: 20px;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 90%;
  max-width: ${theme.sizes.containerWidth};
  padding: 0 20px;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 40px;
    padding: 0;
  }

  @media (max-width: 1422px) {
    justify-content: center;
  }
`;
