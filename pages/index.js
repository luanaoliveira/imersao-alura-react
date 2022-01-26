import appConfig from '../config.json'

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family:sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
        
    `}
    </style>

  );
}

function Titulo(props) {
  const Tag = props.tag
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals['900']};
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

//Componente React
function HomePage() {
  //JSX
  return (
    <div>
      <GlobalStyle />
      <Titulo tag="h2">Welcome to Next.js!</Titulo>
      <h2>Discord - Alura Matrix</h2>
      <style jsx>
        {`
          h2 {
              color: red;
          }
        `}
      </style>
    </div>
  )
}

export default HomePage
