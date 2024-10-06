import React from 'react'
import Layout from '../components/Layout'
import pdf01 from '../assets/pdf/CV-2023-11_FERNANDO VAZQUEZ_EN.pdf'

const cv = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <embed src={pdf01} width="100%" height="700px" />
      </article>
    </Layout>
  )
}

export default cv
