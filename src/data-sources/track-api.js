const { RESTDataSource } = require("apollo-datasource-rest");
const API_URL = require("../constants");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
}

module.exports = TrackAPI;
