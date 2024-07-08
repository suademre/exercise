import React from "react";
import Icon, { icons } from "../Icon";
import { colors } from "../../theme/variables";
import {
  BlackButton,
  DangerButton,
  GreenButton,
  WarningButton,
} from "./styles";

export interface IButton {
  children: React.ReactNode;
  theme?: "primary" | "secondary" | "danger" | "warning";
  size?: string;
  iconName?: keyof typeof icons;
  bgColor?: keyof typeof colors;
  type?: "button" | "submit";
  onClick?: () => void;
  radius?: string;
}

const themes = {
  primary: GreenButton,
  secondary: BlackButton,
  danger: DangerButton,
  warning: WarningButton,
};

const Button = ({
  children,
  theme = "primary",
  size,
  iconName,
  bgColor,
  onClick,
}: IButton) => {
  const ButtonComponent = themes[theme];
  if (!ButtonComponent) return null;
  return (
    <ButtonComponent
      theme="primary"
      onClick={onClick}
      size="12px"
      bgColor={bgColor}
      radius="30px"
      type="button"
    >
      {children}
      {iconName && <Icon name={iconName} />}
    </ButtonComponent>
  );
};

export default Button;
