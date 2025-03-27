import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaWhatsapp,
} from "react-icons/fa";

import {
  StyledHomeContainer,
  StyledH1Container,
  StyledHeaderContainer,
  StyledTextContainer,
  StyledDescriptionContainer,
  StyledImageContainer,
  StyledDescriptionContainer2,
  StyledDescriptionButton,
  StyledContainerButtons,
} from "./styles";
import avatar from "../../assets/av.png";

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
      <StyledHeaderContainer>
        <StyledH1Container>
          Projects <span>JN</span>
        </StyledH1Container>
        <StyledDescriptionContainer>
          <StyledDescriptionContainer2>
            <StyledTextContainer>
              Hello, I'm <span>Johan Nova</span>! I have worked on several web
              projects, utilizing a variety of <span>technologies</span> to
              build dynamic and efficient applications. Here are some of the
              projects I have <span>developed</span>.
            </StyledTextContainer>
            <StyledContainerButtons>
              <StyledDescriptionButton
                as="a"
                href="https://github.com/novadeveloper14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} /> Follow me on Github
              </StyledDescriptionButton>
              <StyledDescriptionButton
                as="a"
                href="https://www.linkedin.com/in/johan-daniel-garcia-nova-433b93252/"
                target="_blank"
                rel="noopener noreferrer"
                color="#0e76a8"
              >
                <FaLinkedin size={22} color="#0e76a8" /> Follow me on Linkedin
              </StyledDescriptionButton>
              <StyledDescriptionButton
                onClick={handleDownloadCV}
                color="#2d336b"
              >
                <FaFileDownload size={22} color="#2d336b" /> Download my CV
              </StyledDescriptionButton>
              <StyledDescriptionButton
                as="a"
                href="https://wa.link/j7s06e"
                target="_blank"
                rel="noopener noreferrer"
                color="#25d366"
              >
                <FaWhatsapp size={22} color="#25d366" /> Contact me
              </StyledDescriptionButton>
            </StyledContainerButtons>
          </StyledDescriptionContainer2>
          <StyledImageContainer>
            <img src={avatar} alt="Johan Nova" />
          </StyledImageContainer>
        </StyledDescriptionContainer>
      </StyledHeaderContainer>
    </StyledHomeContainer>
  );
}

export { Home };
