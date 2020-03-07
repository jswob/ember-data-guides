import Model, { attr } from "@ember-data/model";

export default class PlaceModel extends Model {
  // simple attr
  @attr("string") city;
  // default values
  @attr("date", {
    defaultValue() {
      return new Date();
    }
  })
  createdAt;
  @attr("boolean", { defaultValue: false }) verified;
  @attr tags; // read-only
}
