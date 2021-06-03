import axios from 'axios';

const API_URL = 'http://localhost:3000';
export default class RatingService {
  static async getAllRatings() {
    const result = await axios.get(`${API_URL}/rating`);
    return result.data;
  }

  static async getRatingById(ratingId) {
    const result = await axios.get(`${API_URL}/rating/${ratingId}`);
    return result.data;
  }

  static async updateRatingById(ratingId, value) {
    const data = {
      value: value,
    };
    const result = await axios.patch(`${API_URL}/rating/${ratingId}`, data);
    return result.data;
  }

  static async createNewRating() {
    const result = await axios.post(`${API_URL}/rating/`);
    return result.data;
  }
}
