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
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data
      })
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export const authAPI = {
  isCurrentUserAuthorized() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then(response => {
        return response.data
      })
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => {
        return response.data
      })
  }
}
