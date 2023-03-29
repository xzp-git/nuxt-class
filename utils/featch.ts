import { $fetch } from "ohmyfetch";

export const baseUrl = "http://127.0.0.1:3003";

export const useApi = $fetch.create({
  baseURL: baseUrl,
  // 请求拦截器
  async onRequest() {},
  // 响应拦截器
  async onResponse() {},
});
