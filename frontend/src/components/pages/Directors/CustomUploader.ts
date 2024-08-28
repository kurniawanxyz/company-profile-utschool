// UploadAdapter.js
export default class UploadAdapter {
    loader: any;
    constructor(loader: any) {
      this.loader = loader;
    }
  
    upload() {
      return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append('file', this.loader.file);
  
        // Replace this URL with your upload endpoint
        fetch('https://example.com/upload', {
          method: 'POST',
          body: data,
        })
          .then(response => response.json())
          .then(result => {
            resolve({
              default: result.url,
            });
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  
    abort() {
      // Handle abort logic
    }
  }
  