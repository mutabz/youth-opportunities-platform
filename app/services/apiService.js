export class ApiService {
  constructor(endpoint, api) {
    this.endpoint = endpoint
    this.api = api
  }

  async getAll() {
    const response = await this.api.get(`/${this.endpoint}`)
    return response.data
  }

  async getOne(id) {
    const response = await this.api.get(`/${this.endpoint}/${id}`)
    return response.data
  }

  async create(data) {
    const response = await this.api.post(`/${this.endpoint}`, data)
    return response.data
  }

  async update(id, data) {
    const response = await this.api.put(`/${this.endpoint}/${id}`, data)
    return response.data
  }

  async delete(id) {
    const response = await this.api.delete(`/${this.endpoint}/${id}`)
    return response.data
  }

  async upload(formData) {
    const response = await this.api.post(`/${this.endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  }
}