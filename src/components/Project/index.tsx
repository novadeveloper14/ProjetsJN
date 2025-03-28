import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  StyledProject,
  StyledProjectImage,
  StyledProjectTitle,
  StyledProjectDescription,
  StyledProjectTag,
  StyledProjectTags,
  StyledProjectLinks,
} from "./styles";
import { SocialButton } from "../SocialButton";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const Project = ({
  image,
  title,
  description,
  tags,
  repoUrl,
  demoUrl,
}: ProjectProps) => (
  <StyledProject>
    <StyledProjectImage>
      {demoUrl ? (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      ) : (
        <img src={image} alt={title} />
      )}
    </StyledProjectImage>
    <StyledProjectTitle>{title}</StyledProjectTitle>
    <StyledProjectDescription>{description}</StyledProjectDescription>
    <StyledProjectTags>
      {tags.map((tag, index) => (
        <StyledProjectTag key={index}>{tag}</StyledProjectTag>
      ))}
    </StyledProjectTags>

    <StyledProjectLinks>
      {repoUrl && (
        <SocialButton href={repoUrl} icon={<FaGithub size={20} />} color="#000">
          Code
        </SocialButton>
      )}
      {demoUrl && (
        <SocialButton
          href={demoUrl}
          icon={<FaExternalLinkAlt size={17} color="#465db0" />}
          color="#465db0"
        >
          Demo
        </SocialButton>
      )}
    </StyledProjectLinks>
  </StyledProject>
);
