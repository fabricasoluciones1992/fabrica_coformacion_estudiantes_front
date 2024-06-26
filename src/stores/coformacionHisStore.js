//import CryptoJS from 'crypto-js';
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
//import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router'
import { useAuthStore } from './authStore.js'
import {showSwalAlert} from '../validations'
//import { rewriteDefault } from 'vue/compiler-sfc';

export const useCoformacionHisStore = defineStore('coformacionHis', () => {
 // const { t } = useI18n();
  const router = useRouter()
 // const secretKey = 'TuClaveSecreta';
  const authStore = useAuthStore()
//  const user = CryptoJS.AES.decrypt(localStorage.getItem('id'), secretKey).toString(CryptoJS.enc.Utf8);
  const URL_COFORMACION= `/coformacions`
  const URL_PROCESS = `/coformacion/processes`
  const coformacion = ref([])
  const processes = ref([])

//   // Esta función se utiliza para registrar las enfermedades 
//   const registerDisease = async (dis_name,) => {
//     try {
//       const res = await axios({
//         url: URL_DISEASES,
//         method: 'POST',
//         headers: {
//           Authorization: 'Bearer ' + authStore.token
//         },
//         data: {
//             dis_name: dis_name,
//             use_id:user
//         }
//       })
//       readDisease()
//       handleResponse(
//         res,
//         dis_name,
//         t('diseases.messageSuccess'),
//         t('diseases.duplicateAlert'),
//         t('errors.invalidFormat'),
//         t('errors.validateCharacter')
//       )
//       disease.value.push(res.data.data.newregisterDisease)
      
//     } catch (error) {
//       handleResponse(
//         { data: { status: false, message: [error.message] } },
//         dis_name,
//         t('diseases.messageSuccess'),
//         t('diseases.duplicateAlert'),
//         t('errors.invalidFormat'),
//         t('errors.validateCharacter')
//       )
//     }
//   }


// // Esta función se utiliza para editar las EPS
// const updateDisease = async (dis_id, new_disease_name) => {
//   try {
//     const res = await axios({
//       url: `${URL_DISEASES}/${dis_id}`, 
//       method: 'PUT', 
//       headers: {
//         Authorization: 'Bearer ' + authStore.token
//       },
//       data: {
//         dis_name: new_disease_name,
//         use_id:user
//       }
//     });
    
//     handleResponse(
//       res,
//       new_disease_name,
//       t('diseases.edited'),
//       t('diseases.duplicateAlert'),
//       t('errors.invalidFormat'),
//       t('errors.validateCharacter')
//     )
//       readDisease();
    
//   } catch (error) {
//     console.error(error.response?.data || error);
//     handleError(error);
//   }
// };

// Esta función se utiliza para leer el proceso de coformación
const readCoformacion = async (per_document) => {
  try {
    axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
    const response = await axios.get(`${URL_COFORMACION}/${per_document}`);
    coformacion.value = response.data.data
    console.log(coformacion.value)
  } catch (error) {
    handleError(error);
  }
};

const readProcess = async (per_document) => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const response = await axios.get(`${URL_PROCESS}/${per_document}`);
        processes.value = response.data.data
        console.log(processes.value)
    } catch (error) {
      handleError(error);
    }
  };


const handleError =(error)=>{
  if (error.response && error.response.status === 401) {
    router.push({ name: 'login', query: { redirect: router.currentRoute.fullPath } });
    authStore.logout()
  } else if (error.response) {
    showSwalAlert(null, error.response.data.message, 'error');
  } else if (error.request) {
    showSwalAlert('Error de solicitud:', error.request, 'error');
  } else {
    showSwalAlert('Error inesperado:', error.message, 'error');
  }
}
 

  return {
    readCoformacion,
    readProcess,
    useCoformacionHisStore,
    coformacion,
    processes
  }
})
