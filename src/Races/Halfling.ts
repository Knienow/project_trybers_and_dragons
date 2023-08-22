import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static countLifePoint = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.incrementCount();
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

export default Halfling;