import Team from '../src/js/app';
import Character from '../src/js/character'

test('Team.add test, valid input', () => {
  const team = new Team();
  const character = new Character('Jesse', 'Magician');
  team.add(character);
  const expected = new Set([character]);
  expect(team.members).toEqual(expected);
});

test('Team.add test, doubling input', () => {
  const team = new Team();
  const character = new Character('Jesse', 'Magician');
  team.add(character);
  const addDouble = () => {
    team.add(character);
  }
  expect(addDouble).toThrow();
});

test('Team.addAll test', () => {
  const testCharacters = [
    new Character('Jesse', 'Magician'),
    new Character('Cole', 'Bowman'),
    new Character('Ash', 'Swordsman')
  ];
  const team = new Team();
  team.addAll(...testCharacters, testCharacters[0]);
  const expected = new Set(testCharacters);
  expect(team.members).toEqual(expected);
});

test('Team.toArray test', () => {
  const testCharacters = [
    new Character('Jesse', 'Magician'),
    new Character('Cole', 'Bowman'),
    new Character('Ash', 'Swordsman')
  ];
  const team = new Team();
  team.addAll(...testCharacters);
  const result = team.toArray();
  expect(result).toEqual(testCharacters);
});