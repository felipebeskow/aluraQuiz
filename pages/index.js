import React from 'react';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizConteiner';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(eventForm) => {
              eventForm.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Digite seu nome lindo aqui"
                onChange={(eventButton) => {
                  setName(eventButton.target.value);
                }}
              />
              <button
                type="submit"
                disabled={name === ''}
              >
                Jogar como
                {` ${name}`}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Veja também outros quizes incríveis que o pessoal da Imersão React Next da fez:</p>
            <p>Em breve mais informações...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/felipebeskow/aluraquiz" />
    </QuizBackground>
  );
}
