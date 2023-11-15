import React from "react";

interface clearButtonProps {
  handleClear(): void;
}

const ClearButton = ({ handleClear }: clearButtonProps) => {
  return (
    <div className="button-style md:md-button-style" onClick={handleClear}>
      Clear
    </div>
  );
};

export default ClearButton;
