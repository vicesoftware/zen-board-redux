import React from 'react';
import {expect} from 'chai';
import {shallow} from "enzyme";
import FormElement from "./FormElement";

describe("Given FormElement ", () => {
  it("is declared with children when rendered then it has children", () => {
    const expectedChildren = <span>Foo</span>;
    const wrapper = shallow(<FormElement>{expectedChildren}</FormElement>);

    expect(wrapper.contains(expectedChildren)).to.be.true;
  });

  it("is declared with name and label when rendered then it has label with htmlFor set to name", () => {
    const expectedName = "expectedName";
    const expectedLabel = "expectedLabel";
    const wrapper = shallow(<FormElement name={expectedName} label={expectedLabel} />);

    expect(wrapper.contains(<label className="col-form-label" htmlFor={expectedName}>{expectedLabel}</label>)).to.be.true;
  });
});
