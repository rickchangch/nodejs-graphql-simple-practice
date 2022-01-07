const { RESTDataSource } = require('apollo-datasource-rest');

class RestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/';
  }

  async getUser(id) {
    return this.get(`users/${encodeURIComponent(id)}`);
  }

  async getUsers() {
    return await this.get('users');
  }

  async createUser(user) {
    return this.post(`users`, user);
  }

  async updateUser(id, user) {
    return this.patch(`users/${encodeURIComponent(id)}`, user);
  }

  async deleteUser(id) {
    return this.delete(`users/${encodeURIComponent(id)}`);
  }
}

module.exports = { RestAPI };
