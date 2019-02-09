export function PostData(type, userData){
    let BaseUrl = 'http://localhost:3000/LoginPage/';
    return new Promise((resolve, reject) => {
       fetch(BaseUrl+type,{
           method:'POST',
           body: JSON.stringify(userData)
       })
    .then((response) => response.text())
    .then((responseJson) => {
        resolve(responseJson);
    })
    .catch((error) => {
        reject(error);
    });
    });
}