import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../../src/card/CardTitle';

describe.only('<CardTitle />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CardTitle>Hello</CardTitle>)
    });

    it('should render a h1 by default', () => {
        expect(component).to.have.tagName('h1');
    });

    it('should render the children', () => {
        expect(component.children()).to.have.length(1);
    });

    it('should add the title class', () => {
        expect(component).to.have.className('mdc-card__title');
    });

    it('should by default render as a large title', () => {
        expect(component).to.have.className('mdc-card__title--large');
    });

    it('should add additional classes when passed', () => {
        component = shallow(<CardTitle className="my-custom-class">Hello</CardTitle>)

        expect(component).to.have.className('my-custom-class');
    });

    it('should render the passed title', () => {
        expect(component).to.have.text('Hello');
    });

    describe('subtitle=true', () => {
        beforeEach(() => {
            component = shallow(<CardTitle subTitle>This is the subtitle</CardTitle>);
        });

        it('should render as a h2', () => {
            expect(component).to.have.tagName('h2');
        });

        it('should render the subtitle text', () => {
            expect(component).to.have.text('This is the subtitle');
        });
    });
});
