import axios from 'axios'
import CryptoJS from 'crypto-js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuthStore } from './authStore.js'
import { handleResponse, handleError,showSwalAlert } from "../validations.js"
import { useI18n } from 'vue-i18n'



export const usePersonsStore = defineStore('persons', () => {
  const secretKey = 'TuClaveSecreta'
  const authStore = useAuthStore()
  
  
  //parseInt(user);
  const API_URL = 'http://127.0.0.1:8088/api'
  const SEC_API_IRL = 'http://127.0.0.1:8000/api'
  const persons = ref([])
  
  const { t } = useI18n()
 const readUserLocal = ()=>{
  const user = CryptoJS.AES.decrypt(localStorage.getItem('id'), secretKey).toString( CryptoJS.enc.Utf8 )
  return user

 }  
 readUserLocal();
 const readPersonDetailsById = async () => {
  if (!readUserLocal() || !authStore.token) {
    window.location.href = 'http://localhost:5173/logout';
      
    }
  try {
    const res = await axios({
      url: `${API_URL}/profile/8/${readUserLocal()}`,
      method: 'GET',    
      headers: {
        Authorization: 'Bearer ' + authStore.token
      }
    })
   
    persons.value = res.data.data
    console.log(persons.value)
    try{
      const response = await axios({
        url: `${SEC_API_IRL}/students/${persons.value.per_document}`,
        method: 'GET',    
        headers: {
          Authorization: 'Bearer ' + authStore.token
        }
      })

      persons.value = response.data.data.data
      console.log(persons.value)
      
    }catch(e){
      handleError(e)
    }
    } catch (error) {
      handleError(error)
    }
  }
  const updatePassword = async (currentPassword, newPassword, confirmPassword) => {
    try {
      const res = await axios({
        url: `${API_URL}/update/password/8/${readUserLocal()}`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + authStore.token
        },
        data: {
          use_password: currentPassword,
          new_password: newPassword,
          password_confirmation: confirmPassword
        }
      })
      handleResponse(
        res,
        null,
        t('messageSuccess.Update'),
        t('errors.duplicateAlert'),
        t('errors.passActual'),
        t('errors.passIqual'),
        
      )
      return res.data.status
   
      
    
    } catch (error) {
      // console.log(error.response.data.message)
      
      if (error.request) {
        let messageToShow  = error.response.data.message
        
        if (messageToShow.includes('Password does not match')) {
          showSwalAlert(null, "la contraseña no coincide", 'error');
          
        } 
        // console.error('Error de solicitud:', error.response.data);
      } else {
        // Otros tipos de errores
        showSwalAlert({
          icon: 'error',
          title: 'Error',
          text: 'Error: Se produjo un error inesperado'
        });
        // console.error('Error inesperado:', error.message);
      }
    }
  }
  
  const updatePhoto= async (newPhoto) => {
    try {
      const res = await axios.post(`http://127.0.0.1:8088/api/update/photo/${readUserLocal()}`, newPhoto, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + authStore.token // Asegúrate de tener un mecanismo seguro para obtener y pasar el token de autenticación
        }
      });
    
      handleResponse(
        res,
        null,
        t('messageSuccess.Update'),
        t('errors.duplicateAlert'),
        t('errors.passActual')
      )
      
      readPersonDetailsById()
    
    } catch (error) {
      // console.log(error.response.data.message)
      
      if (error.request) {
        let messageToShow  = error.response.data.message
        
        if (messageToShow.includes('Password does not match')) {
          showSwalAlert(null, "la contraseña no coincide", 'error');
          
        } 
        // console.error('Error de solicitud:', error.response.data);
      } else {
        // Otros tipos de errores
        showSwalAlert({
          icon: 'error',
          title: 'Error',
          text: 'Error: Se produjo un error inesperado'
        });
        // console.error('Error inesperado:', error.message);

      }
    }
  }

  const updateEmergencyContacts = async (con_id, con_name, con_mail, con_telephone, rel_id, per_id) => {
    try {
      console.log(con_id, con_name, con_mail, con_telephone, rel_id, per_id)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token;
      const res = await axios({
        url: `${API_URL}/contacts/${con_id}`, 
        method: 'PUT', 
        headers: {
          Authorization: 'Bearer ' + authStore.token
        },
        data: {
          con_name: con_name,
          con_mail: con_mail,
          con_telephone: con_telephone,
          rel_id: rel_id,
          per_id: per_id,
          use_id: readUserLocal()
        }
      });
      
      if (res.data.status === false) {
        showSwalAlert(res.data.message, 'error','error');
      } else if (res.data.status === true) {
        showSwalAlert(res.data.message, 'success','success');
        console.log(res.data.message);
      }

     readPersonDetailsById()
    } catch (error) {
    console.error(error.response?.data || error);
    handleError(error);
    }
  };

  const updateContactInfo = async (mai_id, mai_mail, mai_description, per_id) => {
    try {
      console.log(mai_id, mai_mail, mai_description, per_id)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token;
      const res = await axios({
        url: `${API_URL}/mails/${mai_id}`, 
        method: 'PUT', 
        headers: {
          Authorization: 'Bearer ' + authStore.token
        },
        data: {
          mai_mail: mai_mail,
          mai_description: mai_description,
          per_id: per_id,
          use_id: readUserLocal()
        }
      });
      
      if (res.data.status === false) {
        showSwalAlert(res.data.message, 'error','error');
      } else if (res.data.status === true) {
        showSwalAlert(res.data.message, 'success','success');
        console.log(res.data.message);
      }

     readPersonDetailsById()
    } catch (error) {
    console.error(error.response?.data || error);
    handleError(error);
    }
  };

  const uploadFiles = async (doc_url, doc_type, doc_status, doc_date, stu_id) =>{
    try {
      console.log(doc_url, doc_type, doc_status, doc_date, stu_id)
      const formData = new FormData();
      formData.append('doc_url', doc_url);  // doc_url debería ser un objeto File
      formData.append('doc_type', doc_type);
      formData.append('doc_status', doc_status);
      formData.append('doc_date', doc_date);
      formData.append('stu_id', stu_id);
      formData.append('use_id', readUserLocal());
      formData.append('acc_administrator', 1);

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token;
      const res = await axios({
        url: `/documents`, 
        method: 'POST', 
        headers: {
          Authorization: 'Bearer ' + authStore.token,
           'Content-Type': 'multipart/form-data'
        },
        data: formData
        
      });
      
      if (res.data.status === false) {
        showSwalAlert(res.data.message, 'error','error');
      } else if (res.data.status === true) {
        showSwalAlert(res.data.message, 'success','success');
        console.log(res.data.message);
      }

     readPersonDetailsById()
    } catch (error) {
    console.error(error.response?.data || error);
    handleError(error);
    }
  
  }




  return {
    readPersonDetailsById,
    updatePassword,
    updatePhoto,
    usePersonsStore,
    persons,
    updateEmergencyContacts,
    updateContactInfo,
    uploadFiles
  }
})
