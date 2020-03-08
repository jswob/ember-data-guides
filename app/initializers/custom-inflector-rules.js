import Inflector from "ember-inflector";

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.irregular("album", "albumy");

  inflector.uncountable("place");
}

export default {
  name: "custom-inflector-rules",
  initialize
};
