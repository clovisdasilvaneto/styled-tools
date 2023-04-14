import styled from "@emotion/styled";

export const AppWrapper = styled.main`
  background: ${({ theme }) => theme.colors.background};
`;

export const AppTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: calc(${({ theme }) => theme.base.fontSize} * 3);
  font-family: "Fira Sans Extra Condensed", sans-serif;
`;

export const AppButton = styled.a`
  display: inline-block;
  margin: 2rem 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-size: calc(${({ theme }) => theme.base.fontSize} * 1.2);
  font-family: "Fira Sans Extra Condensed", sans-serif;

  padding: 1rem 4rem;
  border-radius: 10px;
`;
