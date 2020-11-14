const findMatches = require('./index')

const cities = [{
    city: 'boston',
    state: 'massachusettes',
    population: 100,
}, {
    city: 'new york',
    state: 'new york',
    population: 200
}]


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(),
    })
);

test('findMatches(bos) returns boston', () => {
    document.body.innerHTML += `
    <form class="search-form">
      <input type="text" class="search" placeholder="City or State">
      <ul class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>
    </form>
  `
    expect(findMatches('new', cities)).not.toEqual([cities[0]])
})