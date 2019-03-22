import {Deserializable} from "./deserializable.model";
import {Data} from "./data.model";


export class AlgoliaResponse implements Deserializable {
  hits: Data[];

  deserialize(input: any) {
    Object.assign(<any>this, input);

    input.statuses && (this.hits = input.Data.map((hits: Data) => new Data().deserialize(hits)));

    return this;
  }
}