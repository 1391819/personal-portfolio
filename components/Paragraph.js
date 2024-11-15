import styled from "@emotion/styled";

const Paragraph = styled.p`
  text-align: justify;
  text-transform: ${(props) => props.textTransform || "none"};
`;

export default Paragraph;
