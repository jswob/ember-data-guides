import Model, { attr } from "@ember-data/model";

export default class PaymentMethodCcModel extends Model {
  @attr("string") last4;
}
