export default {
    genClientNumber: async () => axios.get("client/number"),

    index: async () => axios.get("/clients"),

    show: async (id) => axios.get(`/clients/${id}`),

    store: async (data) => axios.post("/clients", data),

    update: async (id, data) => axios.put(`/clients/${id}`, data),

    destroy: async (id) => axios.delete(`/clients/${id}`),

    /**
     * Searches for a client.
     * @param {String} query
     * @returns Promise<AxiosResponse<any>>
     */
    search: async (query) => axios.get(`/clients/search/${query}`),
};
