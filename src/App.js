import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.header`
  background-color: lightblue;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
`;
const Main = styled.main`
  display: flex;
  width: 100%;
  height: calc(100vh - 120px);
`;

const Section = styled.section`
  background-color: white;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
`;

const Aside = styled.aside`
  background-color: lightgray;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: lightblue;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <Title>Welcome to my homepage</Title>
        </Header>
        <Main>
          <Section>
            <p>This is the main content</p>
          </Section>
          <Aside>
            <p>Side content</p>
          </Aside>
        </Main>
        <Footer>This is the footer</Footer>
      </Container>
    </div>
  );
}

export default App;
