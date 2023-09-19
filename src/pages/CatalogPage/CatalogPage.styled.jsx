import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: #3470ff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  text-decoration: underline;
  margin: 0 auto;

  cursor: pointer;

  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #0B44CD;
  }
`;

export default Button;
