import { Character, Team } from "../../task_2";
const player1 = new Character("stiv", "Swordsman");
const player2 = new Character("alex", "Bowman");
const player3 = new Character("lana", "Zombie");
const team = new Team();
team.addall(player1, player2, player3);
test.each([
  [0, player1],
  [1, player2],
  [2, player3],
])("test item index %d", (index, valueExpected) => {
  expect([...team][index]).toEqual(valueExpected);
});
