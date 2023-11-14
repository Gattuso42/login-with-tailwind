import React from "react";

interface SubmitButtonProps {
  email: string;
  password: string;
  handleSubmit(e: React.FormEvent): void;
}

const SubmitButton = ({ email, password, handleSubmit }: SubmitButtonProps) => {
  return (
    <div className="button-style md:md-button-style" onClick={handleSubmit}>
      Submit
    </div>
  );
};

export default SubmitButton;
