export const trackStyle = (disabled?: boolean): React.CSSProperties => ({
  opacity: 1,
  height: "0.75rem",
  borderWidth: "0.125rem",
  borderColor: disabled ? "var(--contra-black-300)" : "var(--contra-black)",
  backgroundColor: disabled ? "var(--contra-red-100)" : "var(--contra-red-800)",
});

export const railStyle = (
  raised?: boolean,
  disabled?: boolean,
): React.CSSProperties => ({
  opacity: 1,
  height: "0.75rem",
  borderRadius: "0.625rem",
  borderWidth: "0.125rem",
  backgroundColor: "var(--contra-white)",
  borderColor: disabled ? "var(--contra-black-300)" : "var(--contra-black)",
  boxShadow: raised
    ? `0 0.125rem 0 0 ${disabled ? "var(--contra-black-300)" : "var(--contra-black)"}`
    : "",
});

export const handleStyle = (disabled?: boolean): React.CSSProperties => ({
  opacity: 1,
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "100%",
  borderWidth: "0.125rem",
  marginTop: "-0.375rem",
  borderColor: disabled ? "var(--contra-black-300)" : "var(--contra-black)",
  backgroundColor: "var(--contra-white)",
  boxShadow: `0 0.125rem 0 0 ${disabled ? "var(--contra-black-300)" : "var(--contra-black)"}`,
});
