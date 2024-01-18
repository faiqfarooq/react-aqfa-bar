import React from "react";
/**
 * ProgressBar component to display a progress bar.
 * @param {object} props - The component props.
 * @param {number} props.value - The current value.
 * @param {number} props.totalValue - The total value.
 * @param {string} [props.initialText] - The initial text.
 * @param {string} [props.totalText] - The total text.
 * @param {string} [props.initialSymbol] - The symbol for the initial value.
 * @param {string} [props.finalSymbol] - The symbol for the final value.
 * @param {boolean} [props.hideInitial] - Whether to hide the initial value.
 * @param {boolean} [props.hideTotal] - Whether to hide the total value.
 * @param {object} [props.containerStyle] - Styles for the container.
 * @param {object} [props.barStyle] - Styles for the progress bar.
 * @param {object} [props.barBgStyle] - Styles for the progress bar background.
 * @param {object} [props.textStyle] - Styles for the text.
 * @param {object} [props.valueStyle] - Styles for the value.
 * @param {number} [props.leftCap] - The left cap percentage.
 * @param {number} [props.rightCap] - The right cap percentage.
 * @param {string} [props.leftCapText] - The text for the left cap.
 * @param {string} [props.rightCapText] - The text for the right cap.
 */
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
declare const ProgressBar: React.FC<ProgressBarProps>;
export { ProgressBar };
