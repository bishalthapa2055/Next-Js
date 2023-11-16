
import Document  , {Head, Html, Main, NextScript} from "next/document";
class MyDocument extends Document {
  render(){
    return(
      <>
      <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Playpen+Sans:wght@100;200;300;400&family=Rubik:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main>
            
          </Main>
          <NextScript />
        </body>
      </Html>
      </>
    )
  }
}

export default MyDocument