import { AbstractEntity } from "./"

interface EntityProps {
  [index: string]: any
}

export abstract class Entity<T extends EntityProps> extends AbstractEntity<T> {}
export default Entity
