import React, { useEffect, useState } from "react";

const ProgressBar = ({
  InitilValue,
  TotalValue,
  Cap,
  initialText,
  totalText,
  InitiSymbol,
  FinalSymbol,
  ContainerStyle,
  BarStyle,
  BarBgStyle,
  initialValueStyle,
  totalValueStyle,
  initialTextStyle,
  totalTextStyle,
}) => {
  const [values, setValues] = useState({ Total: 100, Raised: 10 });
  const SoftCap = (20 * values?.Total) / 100;
  const hardCap = (80 * values?.Total) / 100;

  useEffect(() => {
    if (values?.Total >= values?.Raised) {
      setValues({
        ...values,
        Raised: Number(InitilValue || 10),
        Total: Number(TotalValue || 100),
      });
    }
  }, [InitilValue, TotalValue]);

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
            ...ContainerStyle,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            {initialText && (
              <div>
                <p style={{ color: "#1E1E1E", ...initialValueStyle }}>
                  {initialText}
                </p>
                <h3
                  style={{
                    fontWeight: "500",
                    color: "#000",
                    ...initialTextStyle,
                  }}
                >
                  {values?.Raised} {InitiSymbol}
                </h3>
              </div>
            )}
            {totalText && (
              <div>
                <p
                  style={{
                    color: "#1E1E1E",
                    textAlign: "right",
                    ...totalTextStyle,
                  }}
                >
                  {totalText}
                </p>

                <h3
                  style={{
                    fontWeight: "500",
                    color: "#000",
                    ...totalValueStyle,
                  }}
                >
                  {values?.Total} {FinalSymbol}
                </h3>
              </div>
            )}
          </div>
          <div
            style={{
              position: "relative",
              minHeight: Cap === true ? "80px" : "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#fff",
                borderRadius: "32px",
                zIndex: 100,
                ...BarBgStyle,
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
                  ...BarStyle,
                }}
              ></div>
            </div>

            {Cap === true && (
              <div
                style={{
                  position: "absolute",
                  top: "9.9%",
                  left: "20%",
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
                <div style={{ position: "absolute", top: "18px" }}>
                  <p style={{ color: "#1E1E1E" }}>Soft Cap</p>
                  <h1>{SoftCap}</h1>
                </div>
              </div>
            )}
            {Cap === true && (
              <div
                style={{
                  position: "absolute",
                  top: "9.9%",
                  right: "20%",
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
                <div style={{ position: "absolute", top: "18px" }}>
                  <p style={{ color: "#1E1E1E" }}>Hard Cap</p>
                  <h1>{hardCap}</h1>
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
