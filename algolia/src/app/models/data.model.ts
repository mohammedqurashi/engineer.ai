import {Deserializable} from "./deserializable.model";

export class Data implements Deserializable {
  created_at: Date;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text: string;
  num_comments: number;
  story_id: string;
  story_title: string;
  story_url: string;
  parent_id: string;
  created_at_i: string;
  relevancy_score: number;
  _tags: [];
  objectID: number;
  _highlightResult: {
      title: {},
      url: {},
      author: {}
  }

  deserialize(input: any) {
    Object.assign(<any>this, input);

    return this;
  }
}