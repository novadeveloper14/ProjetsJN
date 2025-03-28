import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
} from "react-icons/fa";
import { SocialButton } from "../../components/SocialButton";
import { Project } from "../../components/Project";
import {
  StyledHomeContainer,
  StyledH1,
  StyledHeader,
  StyledHeroText,
  StyledHeroContent,
  StyledHeroImage,
  StyledButtonGroup,
  StyledMain,
} from "./styles";
import avatar from "../../assets/av.png";
import { projects } from "../../data/projects.data";

function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/hojadevida.pdf";
    link.download = "Johan_Nova_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledHomeContainer>
      <StyledHeader>
        <StyledH1>
          Projects <span>JN</span>
        </StyledH1>

        <StyledHeroContent>
          <div>
            <StyledHeroText>
              Hello, I'm <span>Johan Nova</span>! I have worked on several web
              projects, utilizing a variety of <span>technologies</span> to
              build dynamic and efficient applications. Here are some of the
              projects I have <span>developed</span>.
            </StyledHeroText>

            <StyledButtonGroup>
              <SocialButton
                href="https://github.com/novadeveloper14"
                icon={<FaGithub size={22} />}
              >
                Follow me on Github
              </SocialButton>

              <SocialButton
                href="https://www.linkedin.com/in/johan-daniel-garcia-nova-433b93252/"
                icon={<FaLinkedin size={22} color="#0e76a8" />}
                color="#0e76a8"
              >
                Follow me on Linkedin
              </SocialButton>

              <SocialButton
                onClick={handleDownloadCV}
                icon={<FaFileDownload size={22} color="#2d336b" />}
                color="#2d336b"
              >
                Download my CV
              </SocialButton>

              <SocialButton
                href="https://wa.link/j7s06e"
                icon={<FaWhatsapp size={22} color="#25d366" />}
                color="#25d366"
              >
                Contact me
              </SocialButton>
            </StyledButtonGroup>
          </div>

          <StyledHeroImage>
            <img src={avatar} alt="Johan Nova" />
          </StyledHeroImage>
        </StyledHeroContent>
      </StyledHeader>

      <StyledMain>
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </StyledMain>
    </StyledHomeContainer>
  );
}

export { Home };
