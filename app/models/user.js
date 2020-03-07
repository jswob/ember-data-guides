import Model, { hasMany } from "@ember-data/model";

export default class UserModel extends Model {
  @hasMany("payment-method", { polymorphic: true }) paymentMethods;
}
