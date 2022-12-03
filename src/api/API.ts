export class API {

  link = "https://ac46-176-59-73-148.eu.ngrok.io"

  async postRequest(path: string, data: object = {}) {
    return fetch(this.link + path, {
      method: "POST",
      body: JSON.stringify(data)
    })
  }

  async fileRequest(path: string, formData: FormData) {
    return fetch(this.link + path, {
      method: "POST",
      body: formData
    })
  }

  setCookie(name: string, value: string, options: { [key: string]: any } = {}) {
    options = {
      path: '/',
      ...options
    };

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey
      let optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue
      }
    }

    document.cookie = updatedCookie
  }

  deleteCookie(name: string) {
    this.setCookie(name, "", {
      'max-age': -1
    })
  }

  getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
    return matches ? decodeURIComponent(matches[1]) : "";
  }
}