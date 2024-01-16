import React, { useEffect, useState } from "react";

const ProgressBar = ({
  initialValue,
  totalValue,
  initialText,
  totalText,
  initialSymbol,
  finalSymbol,
  hideInitial,
  hideTotal,
  containerStyle,
  barStyle,
  barBgStyle,
  textStyle,
  valueStyle,
  leftCap,
  rightCap,
  leftCapText,
  rightCapText,
}) => {
  const [values, setValues] = useState({ Total: 100, Raised: 10 });
  const SoftCap = ((leftCap ? leftCap : 20) * values?.Total) / 100;
  const hardCap = ((rightCap ? rightCap : 80) * values?.Total) / 100;

  useEffect(() => {
    if (values?.Total >= values?.Raised) {
      setValues({
        ...values,
        Raised: Number(initialValue || 10),
        Total: Number(totalValue || 100),
      });
    }
  }, [initialValue, totalValue]);

  const progressBarWidth = `${(values?.Raised / values?.Total) * 100}%`;

  return (
    <>
      {values?.Total >= values?.Raised ? (
        <div
          style={{
            minWidth: "280px",
            width: "100%",
            padding: "16px",
            backgroundColor: "#F2F5F9",
            borderRadius: "8px",
            ...containerStyle,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {initialText && (
              <div>
                <p style={{ color: "#1E1E1E", ...textStyle }}>{initialText}</p>
                {!hideInitial && (
                  <h3
                    style={{
                      fontWeight: "500",
                      color: "#000",
                      ...valueStyle,
                    }}
                  >
                    {values?.Raised} {initialSymbol && initialSymbol}
                  </h3>
                )}
              </div>
            )}
            {totalText && (
              <div>
                <p
                  style={{
                    color: "#1E1E1E",
                    textAlign: "right",
                    ...textStyle,
                  }}
                >
                  {totalText}
                </p>

                {!hideTotal && (
                  <h3
                    style={{
                      fontWeight: "500",
                      color: "#000",
                      ...valueStyle,
                    }}
                  >
                    {values?.Total} {finalSymbol && finalSymbol}
                  </h3>
                )}
              </div>
            )}
          </div>
          <div
            style={{
              position: "relative",
              minHeight:
                (rightCapText?.length || leftCapText?.length) > 0 === true
                  ? "80px"
                  : "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                background:
                  rightCapText?.length > 0
                    ? `linear-gradient(to right, #fff 0%, #fff ${
                        rightCap ? rightCap : 80
                      }%, rgba(69, 76, 84, 0.30) ${
                        rightCap ? rightCap : 80
                      }%, rgba(69, 76, 84, 0.30) 100%)`
                    : "#fff",
                borderRadius: "32px",
                zIndex: 100,
                ...barBgStyle,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "7.9px",
                  marginBottom: "5px",
                  backgroundColor: "#013EB7",
                  width: progressBarWidth,
                  color: "white",
                  borderRadius: "32px",
                  ...barStyle,
                }}
              ></div>
            </div>

            {leftCapText && (
              <div
                style={{
                  position: "absolute",
                  top: "9.9%",
                  left: leftCap ? `${leftCap}%` : "20%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "2px",
                    height: "18px",
                    backgroundColor: "rgba(69, 76, 84, 0.30)",
                    marginBottom: "2px",
                  }}
                ></div>
                <div style={{ position: "absolute", top: "14px" }}>
                  <p
                    style={{
                      color: "#1E1E1E",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {leftCapText}
                    <span style={{ display: "block" }}>{SoftCap}</span>
                  </p>
                </div>
              </div>
            )}
            {rightCapText && (
              <div
                style={{
                  position: "absolute",
                  top: "9.9%",
                  left: rightCap ? `${rightCap}%` : "80%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "2px",
                    height: "18px",
                    backgroundColor: "rgba(69, 76, 84, 0.30)",
                    marginBottom: "2px",
                  }}
                ></div>
                <div style={{ position: "absolute", top: "14px" }}>
                  <p
                    style={{
                      color: "#1E1E1E",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {rightCapText}
                    <span style={{ display: "block" }}>{hardCap}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            minWidth: "280px",
            backgroundColor: "#fff",
            padding: "12px 12px",
            margin: "6px",
            borderRadius: "8px",
          }}
        >
          <p style={{ color: "black" }}>
            Total Value should not be greater than inital value.
          </p>
        </div>
      )}
    </>
  );
};

export { ProgressBar };
