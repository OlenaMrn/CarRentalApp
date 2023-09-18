import styled from 'styled-components';
import Box from '@mui/material/Box';

const Container = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Label = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Helvetica', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: center;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;

const BoxS = styled(Box)`
  position: relative;
`;

const Button = styled.button`
  background-color: white;
  color: #154eed;
  border: 1px solid #154eed;
  padding: 16px 30px;
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 15px;
  transform: translateY(-10px);
`;

export { Container, Label, BoxS, Button };
