import Model, { belongsTo } from "@ember-data/model";

export default class PaymentMethodModel extends Model {
  @belongsTo("user") user;
}
