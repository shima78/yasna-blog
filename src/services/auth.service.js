import axios from 'axios';

const API_URL = 'https://api.realworld.io/api/users';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + '/login', JSON.stringify({
                user: {
                    email: user.email,
                    password: user.password
                }
            }))
            .then(response => {
                if (response.data.user.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    console.log(response.data)
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        const data = JSON.stringify({
            "user": {
                "username": user.username,
                "email": user.email,
                "password": user.password
            }
        });
        console.log(data)

        const config = {
            method: 'post',
            url: API_URL,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios(config)

    }
}

export default new AuthService();