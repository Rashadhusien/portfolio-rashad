import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f5",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          📩 New Contact Message
        </h2>

        <div style={{ marginBottom: "16px" }}>
          <strong style={{ color: "#6b7280" }}>Name:</strong>
          <p style={{ margin: "4px 0", color: "#111827" }}>{name}</p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <strong style={{ color: "#6b7280" }}>Email:</strong>
          <p style={{ margin: "4px 0", color: "#111827" }}>{email}</p>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <strong style={{ color: "#6b7280" }}>Message:</strong>
          <p
            style={{
              marginTop: "8px",
              lineHeight: "1.6",
              color: "#374151",
              backgroundColor: "#f9fafb",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            {message}
          </p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e5e7eb",
            margin: "24px 0",
          }}
        />

        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            textAlign: "center",
          }}
        >
          This email was sent from your website contact form.
        </p>
      </div>
    </div>
  );
}
