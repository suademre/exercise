import styled, { css } from "styled-components";
import { colors } from "../../theme/variables";
import { IButton } from ".";

const BaseButton = styled.button<Omit<IButton, "onClick" | "iconName">>`
  display: inline-block;
  text-align: center;
  border: none;
  color: white;
  ${({ size }) => size}
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${colors[bgColor]};
    `};
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius};
    `};
`;

export const GreenButton = styled(BaseButton)`
  background-color: ${colors.lightGreen};
  padding: 1rem 5rem;
`;
export const BlackButton = styled(BaseButton)`
  background-color: ${colors.black};
  padding: 1rem 5rem;
`;
export const DangerButton = styled(BaseButton)`
  background-color: ${colors.red};
  padding: 1rem 2rem;
`;

export const WarningButton = styled(BaseButton)`
  background-color: ${colors.yellow};
  padding: 1rem 2rem;
`;
