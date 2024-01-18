declare module "react-aqfa-bar" {
  import React from "react";

  export interface ProgressBarProps {
    value: number;
    totalValue: number;
    initialText?: string;
    totalText?: string;
    initialSymbol?: string;
    finalSymbol?: string;
    hideInitial?: boolean;
    hideTotal?: boolean;
    containerStyle?: React.CSSProperties;
    barStyle?: React.CSSProperties;
    barBgStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    valueStyle?: React.CSSProperties;
    leftCap?: number;
    rightCap?: number;
    leftCapText?: string;
    rightCapText?: string;
  }

  const ProgressBar: React.FC<ProgressBarProps>;

  export default ProgressBar;
}
