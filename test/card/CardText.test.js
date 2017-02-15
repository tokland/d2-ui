import React from 'react';
import { shallow } from 'enzyme';
import CardText from '../../src/card/CardText';

describe.only('<CardText />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CardText>Hello</CardText>)
    });

    it('should render a section by default', () => {
        expect(component).to.have.tagName('section');
    });

    it('should render the children', () => {
        expect(component.children()).to.have.length(1);
    });

    it('should add the supporting text class', () => {
        expect(component).to.have.className('mdc-card__supporting-text');
    });

    it('should add additional classes when passed', () => {
        component = shallow(<CardText className="my-custom-class">Hello</CardText>)

        expect(component).to.have.className('my-custom-class');
    });

    it('should render the passed text', () => {
        expect(component).to.have.text('Hello');
    });
});
