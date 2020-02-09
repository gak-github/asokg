import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Running = () => {
    return (
        <Layout>
            <SEO title="Running"/>
            <h3>My Running Experience</h3>
            <article className="font-weight-normal">
                I am an avid runner. I started running since 2017 June. Now I have finished about 6 half marathons and 2 full marathons. I didn't know what 5k or 10k distance was until 2017.
                Running is one thing we can constantly challenge ourself.
            </article>
        </Layout>
    );
};

export default Running;