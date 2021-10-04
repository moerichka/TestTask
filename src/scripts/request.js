const requestURL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";

export function sendRequest(){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', requestURL);
        
        xhr.responseType = 'json';
        
        xhr.onload = () => {
            resolve(xhr.response);
        }
        
        xhr.onerror = () => {
            reject(xhr.response);
        }
        
        xhr.send(); 
    });
};