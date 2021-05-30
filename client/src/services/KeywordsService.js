import axios from 'axios';

const API_URL = 'http://localhost:3000';
export default class KeywordsService {
  static async getAllKeywords() {
    const result = await axios.get(`${API_URL}/keywords`);
    return result.data;
  }

  static async getKeywordById(keywordId) {
    const result = await axios.get(`${API_URL}/keywords/${keywordId}`);
    return result.data;
  }

  static async addNewKeyword(newKeyword) {
    const result = await axios.post(`${API_URL}/keywords`, newKeyword);
    return result.data;
  }

  static async editKeyword(editedKeyword) {
    const result = await axios.patch(`${API_URL}/keywords`, editedKeyword);
    return result.data;
  }

  static async deleteKeyword(keywordId) {
    const result = axios.delete(`${API_URL}/keywords/${keywordId}`);
    return result.data;
  }
}
