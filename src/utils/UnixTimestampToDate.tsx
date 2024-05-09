export const UnixTimestampToDate: React.FC<{ timestamp: number }> = ({
  timestamp,
}) => {
  // Convert Unix timestamp to milliseconds
  const date_stolen = new Date(timestamp * 1000).toLocaleString("en-US");
  return (
    <small>
      <strong>Date:</strong> {date_stolen}
    </small>
  );
};
