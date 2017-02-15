import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../src/card/Card';
import CardPrimary from '../../src/card/CardPrimary';

describe.only('<Card />', () => {
    let component;

    beforeEach(() => {
        //process.env.NODE_ENV = 'development';
        component = shallow(<Card />);

        sinon.spy(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render as a div', () => {
        expect(component).to.have.tagName('div');
    });

    it('should add the `mdc-card` class to the root div', () => {
        expect(component).to.have.className('mdc-card');
    });

    it('should render the children passed to the card', () => {
        component = shallow(
            <Card>
                <header>Message</header>
                <section>Hello</section>
            </Card>
        );

        expect(component).to.have.exactly(1).descendants('header');
        expect(component).to.have.exactly(1).descendants('section');
    });

    it('should add the `mdc-card--theme-dark` class when the darkTheme prop is passed', () => {
        component = shallow(<Card darkTheme/>)

        expect(component).to.have.className('mdc-card--theme-dark');
    });

    it('should create a pretty class attribute without additional spaces', () => {
        component = shallow(<Card />)

        expect(component).to.have.attr('class').to.equal('mdc-card');
    });

    it('should pass additional classes to the Card div', () => {
        component = shallow(<Card className="custom-class" />)

        expect(component).to.have.className('custom-class');
    });
});
