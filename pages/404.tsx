import Head from 'next/head'
export default function Custom404() {
  return (
    <>
     <Head>
        <title>404</title>
        <meta name="description" content="Mahmood ul Islam Portfolio: page not found" />
        <meta name="author" content="Mahmood ul Islam"/>
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon"/>
      </Head>
    <div style={{margin:"0 auto", backgroundColor: '#0d0107', textAlign:'center', width: '100vw', height:'100vh'}}>
      <h1>404 - Page Not Found</h1>
    </div>
    </>
  )
}