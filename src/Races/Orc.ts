import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static countLifePoint = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.incrementCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementCount() {
    this.countLifePoint += 1;
  }

  static createdRacesInstances(): number {
    return this.countLifePoint;
  }
}

export default Orc;