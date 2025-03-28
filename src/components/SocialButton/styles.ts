import styled from "styled-components";
import { theme, breakpoints } from "../../tokens/tokens";

export const StyledSocialButton = styled.button<{ color?: string }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  background: transparent;
  border: 2px solid ${({ color }) => color || theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ color }) =>
      color ? `${color}20` : "rgba(0, 0, 0, 0.1)"};
    transform: translateY(-2px);
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;
