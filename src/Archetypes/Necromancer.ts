import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static archetypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }
}

export default Necromancer;