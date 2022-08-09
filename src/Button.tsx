import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonColor = "red" | "blue" | "green";
type ButtonSize = "small" | "medium" | "large";

const Wrapper = styled.button<{ color: string; disabled: boolean }>`
  border: none;
  color: #fff;
  ${props =>
    css`
      background: ${props.color};
    `
  }
  ${props =>
    props.disabled && 
      css`
        opacity: 0.5;
        disabled={props.disabled} 
      `
  }
  &.small {
    font-size: 10px;
    width: 60px;
    height 30px;
  }
  &.medium {
    font-size: 16px;
    width: 100px;
    height 50px;
  }
  &.large {
    font-size: 24px;
    width: 140px;
    height 70px;
  }
`

export const Button = (props: {
  children: ReactNode;
  color: ButtonColor;
  size: ButtonSize;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <Wrapper color={props.color} className={props.size} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
}
