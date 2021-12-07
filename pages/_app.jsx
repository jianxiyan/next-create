import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

import 'antd/dist/antd.css';

class MyApp extends App {
    //每次页面切换都会调用吧
    static async getInitialProps({ Component, ctx }) {
        let pageProps;
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        
        return {
            pageProps
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        )
    }
}

export default MyApp;