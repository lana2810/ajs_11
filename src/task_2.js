export class Character {
  constructor(name, type) {
    const availableType = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!availableType.includes(type)) {
      throw new Error("Невалидный тип игрока");
    }
    this.name = name;
    this.type = type;
    this.health = 50;
    this.level = 1;
    (this.attack = 40), (this.defense = 10);
  }
}
export class Team {
  constructor() {
    this.members = new Set();
  }
  toArray() {
    return [...this.members];
  }
  add(member) {
    if (this.members.has(member)) {
      throw new Error("Ошибка добавления игрока в команду");
    }
    this.members.add(member);
  }
  addall(...members) {
    members.forEach((item) => this.members.add(item));
  }
  *[Symbol.iterator]() {
    for (const item of this.members) {
      yield item;
    }
  }
}
