import React from 'react'
import { Layout } from 'antd'
import { footerStyle } from '../../styles'

const { Footer } = Layout

export default function ReactFooter () {
  return (
    <Footer style={footerStyle}>
            Developed by <strong>Naman Bansal</strong> and<strong> Nandish Sharma</strong><br></br>Built with <strong>React</strong> and <strong>MERN</strong><br></br>API fetched from <strong>CoinGecko</strong></Footer>
  )
}
