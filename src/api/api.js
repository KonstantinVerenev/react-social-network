import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '78815636-9009-4d66-84b1-d04cb54abb24'
  }
})

export const userAPI = {
  getUsers(pageNumber = 1, pageSize = 5) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  delete(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  post(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const authAPI = {
  isCurrentUserAuthorized() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getUserProfileInformation(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  }
}
