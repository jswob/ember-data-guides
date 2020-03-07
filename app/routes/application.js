import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  model() {
    this.store.push({
      data: [
        {
          id: 1,
          type: "album",
          attributes: {
            title: "Fewer Moving Parts",
            artist: "David Bazan",
            songCount: 10
          },
          relationships: {}
        },
        {
          id: 2,
          type: "album",
          attributes: {
            title: "Calgary b/w I Can't Make You Love Me/Nick Of Time",
            artist: "Bon Iver",
            songCount: 2
          },
          relationships: {}
        }
      ]
    });
  }
}
