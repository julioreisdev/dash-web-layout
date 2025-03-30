import styled from "styled-components";

const CenterBox = styled.div<{ overflow: number }>`
  width: 100%;
  height: calc(100vh - ${(props) => props?.overflow}px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CenterBox;
