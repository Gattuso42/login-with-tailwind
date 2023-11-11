import React from "react";

const handleClickClear = () => {};

const ClearButton = () => {
  return (
    <div className="button-style md:md-button-style" onClick={handleClickClear}>
      Clear
    </div>
  );
};

export default ClearButton;
