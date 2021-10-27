import axios from 'axios';


export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        });

        alert(response.data);
    } catch (error) {
        console.log(error.response.data.message);
    }
    
}