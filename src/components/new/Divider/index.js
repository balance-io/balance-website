import styled from "styled-components";

export const Divider = styled.div`
  background-color: #070707;
  border-radius: 4px;
  height: 4px;
  width: 100%;
`;

export const BlueDivider = styled(Divider)`
  background-image: linear-gradient(
    to left,
    #070707 0%,
    #2a45f6 60%,
    #66bbff 100%
  );
`;

export const PurpleDivider = styled(Divider)`
  background-image: linear-gradient(
    to left,
    #070707 0%,
    #522af5 60%,
    #6687ff 100%
  );
`;

export const PinkDivider = styled(Divider)`
  background-image: linear-gradient(
    to left,
    #070707 0%,
    #962af5 60%,
    #7866ff 100%
  );
`;
