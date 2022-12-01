export class API {

  link = ""

  async getRequest(path: string) {
    return fetch(this.link + path, {
      method: "GET",
    })
  }

  async postRequest(path: string, data: object = {}) {
    return fetch(this.link + path, {
      method: "POST",
      body: JSON.stringify({ ...data, 'access_token': localStorage.getItem('access_token') ? localStorage.getItem('access_token') : "" })
    })
  }

  setCookie(name: string, value: string, options: { [key: string]: any } = {}) {
    options = {
      path: '/',
      ...options
    };

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  deleteCookie(name: string) {
    this.setCookie(name, "", {
      'max-age': -1
    })
  }

  getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  toBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }
}