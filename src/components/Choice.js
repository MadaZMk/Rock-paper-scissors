import React from "react";
import styled, { css } from "styled-components";
import { getImage } from "../helpers/helpers";

const Container = styled.div`
  width: 200px;
  cursor: pointer;
  margin: 10px;
  border-radius: 10%;
  transition: 300ms ease-in-out;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #d8bfd8;
    `}

  &:hover {
    background-color: #dda0dd;
  }
`;

const Image = styled.img`
  width: 200px;
  object-fit: contain;
`;

export default function Choice({ name, id, chooseItem, selected }) {
  const cover = getImage(name);

  return (
    <Container selected={selected} onClick={() => chooseItem(id)}>
      <Image src={cover} />
    </Container>
  );
}
