const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Wraps after maxLength characters if one work per line', () => {
    const example1 = "This Line Will Wrap"
    expect(wrap (example1, 5)).to.equal("This \nLine \nWill \nWrap")
  })

  it('the word is ')

  it

});

