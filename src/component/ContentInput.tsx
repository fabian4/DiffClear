export const ContentInput = ({ onInput }: { onInput: (value: string) => void }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInput(event.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <textarea
        placeholder="Enter your content here..."
        onChange={handleInputChange}
        style={{
          width: "100%",
          height: "100px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
