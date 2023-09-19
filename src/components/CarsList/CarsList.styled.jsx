import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  justify-content: center;
`;

const EmptyHeart = styled(AiOutlineHeart)`
  position: absolute;
  right: 14px;
  cursor: pointer;
  top: 14px;
  fill: #ffffff;
  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: #0b44cd;
  }
`;
const FullHeart = styled(AiFillHeart)`
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;
  fill: #3470ff;
`;
const CarListItem = styled.li`
  display: flex;
  max-width: 274px;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  border-radius: 12px;
  flex-direction: column;
  img {
    height: 268px;
    border-radius: 12px;
    object-fit:cover;
    aspect-ratio: 1/ 0.978;
  }

  button {
    background-color: #3470ff;
    color: #fff;
    border: none;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;
const CardHead = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  margin-bottom: 8px;
  div {
    display: flex;
    .make {
      margin-right: 3px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 120px;
    }
    .year {
      margin-left: 3px;
    }
    .model {
      color: #3470ff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 60px;
    }
  }
`;
const DescBox = styled.div`
  width: 100%;
  padding-top: 14px;
`;
const SList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 14px;
  row-gap: 4px;
  color: #12141780;
  margin-bottom: 28px;
  li {
    position: relative;
    font-size: 12px;
    &::after {
      content: '';
      height: 16px;
      width: 0.1px;
      position: absolute;
      background-color: #12141780;
      top: 50%;
      transform: translate(7px, -50%);
    }
    &:last-of-type {
      &::after {
        display: none;
      }
    }
  }
`;
export {
  CarListItem,
  CardHead,
  DescBox,
  SList,
  CardList,
  EmptyHeart,
  FullHeart,
};