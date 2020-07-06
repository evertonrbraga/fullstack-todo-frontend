import styled from "styled-components";

export const Container = styled.button`
  border: ${({ btnColor }) => `3px solid ${btnColor}`};
  color: ${({ btnColor }) => `${btnColor}`};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background: #fff;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 500;
  width: ${({ size }) => (size ? `${size}` : "auto")};

  &:hover {
    background: ${({ btnColor, disabled }) => (disabled ? "" : `${btnColor}`)};
    color: ${({ disabled }) => (disabled ? "" : "#fff")};
    cursor: pointer;
  }
`;
