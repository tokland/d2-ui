import React from 'react';
import { render } from 'react-dom';

import Card from '../../src/card/Card';
import CardMedia from '../../src/card/CardMedia';
import CardPrimary from '../../src/card/CardPrimary';
import CardTitle from '../../src/card/CardTitle';
import CardText from '../../src/card/CardText';

const Spacer = () => (<div style={{height: '1rem'}} />)

render(
    <main>
        <Card>
            <CardPrimary>
                <CardTitle>Hello</CardTitle>
            </CardPrimary>
            <CardText>World is awesome</CardText>
        </Card>
        <Spacer />
        <Card darkTheme>
            <CardPrimary>
                <CardTitle>Luke</CardTitle>
            </CardPrimary>
            <CardText>I am your father</CardText>
        </Card>
        <Spacer />
        <Spacer />
        <Card>
            <CardPrimary>
                <CardTitle>Title goes here</CardTitle>
                <CardTitle subTitle>Subtitle here</CardTitle>
            </CardPrimary>
        </Card>
    </main>,
    document.getElementById('mcw')
);
