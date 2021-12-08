import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux'
import Layout from '../components/Layout';
import withReduxStore from '../lib/with_redux';

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
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp);