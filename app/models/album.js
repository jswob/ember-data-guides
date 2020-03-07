import Model, { attr } from "@ember-data/model";

export default class AlbumModel extends Model {
  @attr("string") title;
  @attr("string") artist;
  @attr("number") songCount;
}
