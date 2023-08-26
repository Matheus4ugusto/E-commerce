import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  color: ${({ theme }) => theme.colors.textColor.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
