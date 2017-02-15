import React from 'react';
import { shallow } from 'enzyme';
import CardMedia from '../../src/card/CardMedia';

describe.only('<CardMedia />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CardMedia />);
    });

    it('should render as a div', () => {
        expect(component).to.have.tagName('div');
    });

    it('should add the `mdc-card__media` class to the root div', () => {
        expect(component).to.have.className('mdc-card__media');
    });

    it('should add additional classes when passed', () => {
        component = shallow(<CardMedia className="custom-class" />)

        expect(component).to.have.className('custom-class');
    });

    it('should render the children passed to the card', () => {
        component = shallow(
            <CardMedia>
                <header>Message</header>
                <section>Hello</section>
            </CardMedia>
        );

        expect(component).to.have.exactly(1).descendants('header');
        expect(component).to.have.exactly(1).descendants('section');
    });

    it('should add the `mdc-card__media-item` to each of the children', () => {
        component = shallow(
            <CardMedia>
                <header>Message</header>
                <section>Hello</section>
            </CardMedia>
        );

        expect(component.find('header')).to.have.className('mdc-card__media-item');
        expect(component.find('section')).to.have.className('mdc-card__media-item');
    });
});
