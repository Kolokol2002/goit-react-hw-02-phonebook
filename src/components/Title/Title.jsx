import { Container, MainTitle } from './Title.styled';

function Title({ title, children }) {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      {children}
    </Container>
  );
}

export default Title;
