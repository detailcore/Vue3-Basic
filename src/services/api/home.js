import { api } from '.'

/**
 * Home page API service with backend
 */


export const getAllPosts = async () => {
  return await api.get(`/posts`)
}