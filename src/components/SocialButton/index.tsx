import { StyledSocialButton } from "./styles";

type SocialButtonProps = {
  children: React.ReactNode;
  href?: string;
  icon: React.ReactNode;
  color?: string;
  onClick?: () => void;
};

export const SocialButton = ({
  children,
  href,
  icon,
  color,
  onClick,
}: SocialButtonProps) => (
  <StyledSocialButton
    as={href ? "a" : "button"}
    href={href}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    onClick={onClick}
    color={color}
  >
    {icon}
    {children}
  </StyledSocialButton>
);
