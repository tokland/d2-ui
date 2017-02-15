import React from 'react';
import { shallow } from 'enzyme';
import CardPrimary from '../../src/card/CardPrimary';

describe.only('<CardPrimary />', () => {
    let component;

    beforeEach(() => {
        component = shallow(
            <CardPrimary>
                <h1>Hello</h1>
                <h2>World</h2>
            </CardPrimary>
        )
    });

    it('should render a section by default', () => {
        expect(component).to.have.tagName('section');
    });

    it('should render the children', () => {
        expect(component.children()).to.have.length(2);
    });

    it('should add the title class', () => {
        expect(component).to.have.className('mdc-card__primary');
    });

    it('should add additional classes when passed', () => {
        component = shallow(<CardPrimary className="my-custom-class">Hello</CardPrimary>)

        expect(component).to.have.className('my-custom-class');
    });
});
