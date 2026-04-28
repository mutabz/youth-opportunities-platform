import { p as pinia_prodExports, b as useNuxtApp } from './server.mjs';

class ApiService {
  constructor(endpoint, api) {
    this.endpoint = endpoint;
    this.api = api;
  }
  async getAll() {
    const response = await this.api.get(`/${this.endpoint}`);
    return response.data;
  }
  async getOne(id) {
    const response = await this.api.get(`/${this.endpoint}/${id}`);
    return response.data;
  }
  async create(data) {
    const response = await this.api.post(`/${this.endpoint}`, data);
    return response.data;
  }
  async update(id, data) {
    const response = await this.api.put(`/${this.endpoint}/${id}`, data);
    return response.data;
  }
  async delete(id) {
    const response = await this.api.delete(`/${this.endpoint}/${id}`);
    return response.data;
  }
  async upload(formData) {
    const response = await this.api.post(`/${this.endpoint}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  }
}
const models = [
  "users",
  "users_data",
  "admins_data",
  "analytics_summary",
  "track",
  "mentors",
  "mentors_review",
  "mentors_session",
  "partners_data",
  "events",
  "contacts",
  "opportunities",
  "applications",
  "applications_adm",
  "saved_opportunities",
  "notifications",
  "resources",
  "recommendations",
  "feedbacks",
  "analytics",
  "admin_users",
  "testimonials",
  "partners",
  "team_members",
  "news_articles",
  "stats_counters",
  "hero_banners",
  "register",
  "login",
  "messages",
  "attendance",
  "services",
  "csv_import",
  "csv_download",
  "opp_category",
  "opp_type",
  "subscribe",
  "mail_newsletter",
  "mail_events",
  "mail_opportunity",
  "reply_messages",
  "page_titles",
  "organizations",
  "youth_volunteers",
  "nyc",
  "jobseekers",
  "jobs",
  "job_applications",
  "ai",
  "serp",
  "communities",
  "communities_membership",
  "admin_communities",
  "admin_organizations",
  "admin_opportunities",
  "communities_join",
  "article_comments",
  "comments_replies",
  "articles_likes",
  "users_fcm_token"
];
const useDataStore = pinia_prodExports.defineStore("dataStore", {
  state: () => ({
    items: {},
    loading: {},
    message: {},
    error: {}
  }),
  actions: {
    /* ================= INTERNAL HELPER ================= */
    getService(model) {
      const { $api } = useNuxtApp();
      return new ApiService(model, $api);
    },
    ensureModelState(model) {
      if (!this.items[model]) this.items[model] = [];
      if (!this.loading[model]) this.loading[model] = false;
      if (!this.message[model]) this.message[model] = null;
      if (!this.error[model]) this.error[model] = null;
    },
    /* ================= FETCH ================= */
    async fetchData(model, forceReload = false, id = null) {
      var _a, _b;
      if (!models.includes(model)) {
        throw new Error(`Model ${model} not registered`);
      }
      this.ensureModelState(model);
      const service = this.getService(model);
      try {
        this.loading[model] = true;
        this.error[model] = null;
        let data = id ? await service.getOne(id) : await service.getAll();
        this.items[model] = (data == null ? void 0 : data.items) || data || [];
        if (false) ;
        return this.items[model];
      } catch (err) {
        this.error[model] = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message || "Fetch failed";
        return null;
      } finally {
        this.loading[model] = false;
      }
    },
    /* ================= CREATE ================= */
    async createItem(model, payload) {
      var _a, _b;
      this.ensureModelState(model);
      const service = this.getService(model);
      try {
        const res = await service.create(payload);
        this.message[model] = (res == null ? void 0 : res.message) || "Created successfully";
        this.error[model] = null;
        if (res == null ? void 0 : res.item) {
          this.items[model].push(res.item);
        }
        return res;
      } catch (err) {
        this.error[model] = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Error creating item";
        throw err;
      }
    },
    /* ================= UPDATE ================= */
    async updateItem(model, id, payload) {
      var _a, _b;
      this.ensureModelState(model);
      const service = this.getService(model);
      try {
        const res = await service.update(id, payload);
        this.message[model] = (res == null ? void 0 : res.message) || "Updated successfully";
        const index = this.items[model].findIndex((i) => i.id === id);
        if (index !== -1) {
          this.items[model][index] = (res == null ? void 0 : res.item) || res;
        }
        return res;
      } catch (err) {
        this.error[model] = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Error updating item";
        throw err;
      }
    },
    /* ================= DELETE ================= */
    async deleteItem(model, id) {
      var _a, _b;
      this.ensureModelState(model);
      const service = this.getService(model);
      try {
        const res = await service.delete(id);
        this.items[model] = this.items[model].filter((i) => i.id !== id);
        this.message[model] = (res == null ? void 0 : res.message) || "Deleted successfully";
        return res;
      } catch (err) {
        this.error[model] = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Error deleting item";
        throw err;
      }
    }
  }
});

export { useDataStore as u };
//# sourceMappingURL=dataStore-B0c5KwuX.mjs.map
