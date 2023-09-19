import styled from 'styled-components';

export const Photo = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 1, 33;
  font-weight: 500;
  color: #121417;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  font-size: 16px;
  line-height: 1, 5;
  font-weight: 500;
  color: #121417;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1, 5;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1, 43;
  font-weight: 400;
  margin-bottom: 24px;
`;

export const FunctionTitle = styled.h4`
  font-size: 14px;
  line-height: 1, 43;
  font-weight: 500;
  color: #121417;
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
  
`;

export const ConditionWrapper = styled.p`
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
  color: #363535;
  font-size: 12px;
`;

export const ColorSpan = styled.span`
  color: #3470ff;
   font-weight: 600;
`;

export const FontSpan = styled.span`
  
`;

export const Button = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  font-family: inherit;
 margin-top: 24px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
