import React from 'react';
import styled from 'styled-components';

const CardContent: React.FC = ({ children }) => <StyledCardContent>{children}</StyledCardContent>;

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[4]}px;
  border-radius: 18px 18px 0 0;
`;

export default CardContent;
