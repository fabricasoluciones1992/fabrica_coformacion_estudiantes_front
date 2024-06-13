import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token'))
  const encryptedId = ref(localStorage.getItem('id'))
  const hashedDoct = ref(localStorage.getItem('doct'))
  const encryptedType = ref(localStorage.getItem('type'))
  const encryptedstudent = ref(localStorage.getItem('per_type'))
  const router = useRouter()

  const access = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      token.value = params.get('token') || token.value;
      encryptedId.value = params.get('id') || encryptedId.value;
      hashedDoct.value = params.get('doc') || hashedDoct.value;
      encryptedType.value = params.get('admin') || encryptedType.value; 
      const decodedEncryptedId = decodeURIComponent(params.get('id'));
      const decodedEncryptedType = decodeURIComponent(params.get('admin'));
      const decodedEncryptedDoc = decodeURIComponent(params.get('doc'));
      const decodedEncryptedStudent = decodeURIComponent(params.get('stu'));


      localStorage.setItem('token', token.value)
      localStorage.setItem('doct', decodedEncryptedDoc);
      localStorage.setItem('id', decodedEncryptedId);
      localStorage.setItem('type', decodedEncryptedType);
      localStorage.setItem('per_typ', decodedEncryptedStudent);
      
      const urlWithoutParams = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutParams);
      if (!params.get('token') || !token.value) {
        window.location.href = 'http://localhost:5173/logout';
          
        }
      
      router.push('/students');
    } catch (error) {
      handleError(error);
    }
  }
  
  const logout = async (use_id) => {
    try {
      const res = await axios({
        url: '/logout',
        method: 'POST',
        data: {
          use_id: use_id,
        },
      });
      res.data
    } catch (error) {
      // console.log(error);
    } finally {
      resetStore();
      window.location.href = 'http://localhost:5173/logout';
    }
  }

  const handleError = (error) => {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      // console.log(error.request);
    } else {
      console.log('Error:', error.message);
    }
  };

  const resetStore = () => {
    // No establecer los valores en nulo para mantener los datos en localStorage
    token.value = null;
    encryptedId.value = null;
    hashedDoct.value = null;
    encryptedType.value = null;
    encryptedstudent.value = null

    localStorage.removeItem('token');
    localStorage.removeItem('doct');
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    localStorage.removeItem('per_typ');

   
  }

  return {
    token,
    encryptedId,
    encryptedstudent,
    access,
    logout,
  }
})
