import styled from "styled-components";
import { theme, breakpoints } from "../../tokens/tokens";
import { StyledSocialButton } from "../SocialButton/styles";

export const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  justify-content: space-around;

  & h2 {
    padding: 0 10px;
  }

  & p {
    padding: 0 10px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    & h2 {
      padding: 0 20px;
    }

    & p {
      padding: 0 20px;
    }
  }
`;

export const StyledProjectImage = styled.div`
  img {
    height: 200px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    transition:
      transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.07);
    }

    @media (min-width: ${breakpoints.tablet}) {
      height: 220px;
    }
  }
`;

export const StyledProjectTitle = styled.h2`
  color: #000;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }
`;

export const StyledProjectDescription = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  line-height: 1.5;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const StyledProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 10px;
  margin-top: auto;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0px;
    padding: 0 20px;
  }
`;

export const StyledProjectTag = styled.span`
  background-color: rgb(207, 214, 240);
  color: ${theme.colors.primary};
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.85rem;
  }
`;

export const StyledProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 10px;
  margin-top: 15px;

  ${StyledSocialButton} {
    padding: 5px 10px;
    border-width: 1px;
    font-weight: 500;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 20px;
  }
`;
