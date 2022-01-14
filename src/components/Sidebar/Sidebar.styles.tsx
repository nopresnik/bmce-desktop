import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing(2)};
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;
