import React from 'react';
import { Container, Orheader, Oraside, Ormain, Orfooter } from '..';

export default function ContainerDemo1() {
  return (
    <div >
      <div>
        <Container>
          <Orheader height={60}>header</Orheader>
          <Ormain height={200}>main</Ormain>
        </Container>
      </div>
      <hr />
      <div>
        <Container>
          <Orheader height={60}>Header</Orheader>
          <Ormain height={200} >Main</Ormain>
          <Orfooter>Footer</Orfooter>
        </Container>
      </div>
      <hr />
      <div>
        <Container>
          <Orheader height={60}>Header</Orheader>
          <Container type="style">
            <Oraside height={200} width={200}>Aside</Oraside>
            <Ormain height={200} >Main</Ormain>
          </Container>
          <Orfooter>Footer</Orfooter>
        </Container>
      </div>
      <hr />
      <div>
        <Container type="style">
          <Oraside height={200} width={200}>Aside</Oraside>
          <Ormain height={200} >Main</Ormain>
        </Container>
      </div>
      <hr />
      <div>
        <Container >
          <Orheader height={60}>header</Orheader>
          <Container type="style">
            <Oraside height={200} width={200}>Aside</Oraside>
            <Ormain height={200} >Main</Ormain>
          </Container>
        </Container>
      </div>
      <hr />
      <div>
        <Container >
          <Orheader height={60}>header</Orheader>
          <Container type="style">
            <Oraside height={260} width={200}>Aside</Oraside>
            <Container>
              <Ormain height={200} >Main</Ormain>
              <Orfooter>Footer</Orfooter>
            </Container>
          </Container>
        </Container>
      </div>
      <hr />
      <div>
        <Container type="style">
          <Oraside height={320} width={200}>Aside</Oraside>
          <Container >
            <Orheader height={60}>header</Orheader>
            <Ormain height={200} >Main</Ormain>
            <Orfooter height={60}>Footer</Orfooter>
          </Container>
        </Container>
      </div>

    </div>
  );
}
