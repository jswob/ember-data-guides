import JSONAPIAdapter from "@ember-data/adapter/json-api";
import { underscore } from "@ember/string";

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = "https://api.github.com";
  namspace = "users";

  pathForType(type) {
    return underscore(type);
  }

  headers = {
    API_KEY: "SOME REAL SECRET!!!"
  };
}
