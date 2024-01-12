import React, { useEffect, useState } from "react";

const ProgressBar = ({ RaisedValue, TotalValue, Cap, width }) => {
  const [values, setValues] = useState({ Total: 100, Raised: 10 });
  const SoftCap = (20 * values?.Total) / 100;
  const hardCap = (80 * values?.Total) / 100;

  useEffect(() => {
    if (values?.Total >= values?.Raised) {
      setValues({
        ...values,
        Raised: Number(RaisedValue),
        Total: Number(TotalValue),
      });
    }
  }, [RaisedValue, TotalValue]);

  const progressBarWidth = `${(values?.Raised / values?.Total) * 100}%`;
  const CustomWidth =
    width === "xs"
      ? "320px"
      : width === "sm"
      ? "600px"
      : width === "md"
      ? "800px"
      : "100%";

  return (
    <div style={{ minWidth: "300px", width: CustomWidth }}>
      <div
        style={{
          padding: "16px",
          backgroundColor: "#F2F5F9",
          borderRadius: "8px",
          marginTop: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <div>
            <p style={{ color: "#1E1E1E" }}>Raised</p>
            <h1 style={{ fontWeight: "500" }}>{values?.Raised} BRC</h1>
          </div>
          <div>
            <p style={{ color: "#1E1E1E", textAlign: "right" }}>Total</p>
            <h1 style={{ fontWeight: "500" }}>{values?.Total} BRC</h1>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: "80px" }}>
          <div
            style={{
              width: "100%",
              background: `linear-gradient(to right, #fff 0%, #fff 80%, rgba(69, 76, 84, 0.30) 80%, rgba(69, 76, 84, 0.30) 100%)`,
              borderRadius: "32px",
              zIndex: 100,
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
    </div>
  );
};

export { ProgressBar };
