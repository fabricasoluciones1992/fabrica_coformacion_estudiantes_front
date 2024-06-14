import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './authStore.js'
import { ref } from 'vue'
import Swal from 'sweetalert2'

export const useGeneralStore = defineStore('general_store', () => {
  const authStore = useAuthStore()
  const URL_GENERAL = `http://127.0.0.1:8088/api`
  const docTypes = ref([])
  const contactType = ref([])
  const contacts = ref([])
  const countries = ref([])
  const activities = ref([])
  const industries = ref([])
  const localities = ref([])
  const careers = ref([])
  const genders = ref([])
  const relationships = ref([])

  const readDocTypes = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token
      const res = await axios.get(URL_GENERAL + `/doc/types`)
      docTypes.value = res.data.data
      return docTypes.value
    } catch (error) {
      handleError(error)
    }
  }

  //  lectura de contactos de las Empresas
  const readContactType = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token
      const res = await axios.get(URL_GENERAL + `/contact/companies/type`)
      contactType.value = res.data.data.map((item) => {
        return {
          con_com_typ_id: item.con_com_typ_id,
          con_com_typ_name: item.con_com_typ_name
        }
      })
      return contactType.value
    } catch (error) {
      handleError(error)
    }
  }

  const readContacts = async (per_id) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token
      const res = await axios.get(URL_GENERAL + `/contacts/` + per_id)
      contacts.value = res.data.data;
      console.log(contacts.value)
      return contacts.value
    } catch (error) {
      handleError(error)
    }
  }

  // Esta función se utiliza para leer las localidades
  const readCountries = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token
      const res = await axios.get(URL_GENERAL + `/country/`)
      countries.value = res.data.data.map((item) => {
        return {
          cou_id: item.cou_id,
          cou_name: item.cou_name
        }
      })
      return countries.value
    } catch (error) {
      handleError(error)
    }
  }

  const readActivities = async () => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const res = await axios.get(URL_GENERAL + `/activity/`);
      activities.value = res.data.data.map((item) => {
        return {
            acti_id: item.acti_id,
            acti_name: item.acti_name
          };
    });
      return activities.value;
    } catch (error) {
      handleError(error)
    }
  };

  const readIndustries = async () => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const res = await axios.get(URL_GENERAL + `/industry/`);
      industries.value = res.data.data.map((item) => {
        return {
            ind_id: item.ind_id,
            ind_name: item.ind_name
          };
    });
      return industries.value;
    } catch (error) {
      handleError(error)
    }
  };

// Esta función se utiliza para leer las localidades
const readLocalities = async () => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const res = await axios.get(URL_GENERAL + `/localities/`);
      localities.value = res.data.data.map((item) => {
        return {
            loc_id: item.loc_id,
            loc_name: item.loc_name
          };
    });
      return localities.value;
    } catch (error) {
      handleError(error)
    }
  };

  const readCareers = async () => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const res = await axios.get(URL_GENERAL + `/career/`);
      careers.value = res.data.data.map((item) => {
        return {
            car_id: item.car_id,
            car_name: item.car_name,
            car_typ_id: item.car_typ_id
          };
    });
      return careers.value;
    } catch (error) {
      handleError(error)
    }
  };

  const readGenders = async () => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const res = await axios.get(URL_GENERAL + `/genders/`);
      genders.value = res.data.data;
      return genders.value;
    } catch (error) {
      handleError(error)
    }
  };

  const readRelationships = async () => {
    try {
      axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token;
      const res = await axios.get(URL_GENERAL + `/relationships/`);
      relationships.value = res.data.data;
      console.log(relationships.value);
      return genders.value;
    } catch (error) {
      handleError(error)
    }
  };

  const handleError = (error) => {
    if (error.response) {
      // Error de respuesta (por ejemplo, error HTTP)
      Swal.fire(`Error: ${error.response.status} - ${error.response.statusText}`)
      console.error('Error de respuesta:', error.response.data)
    } else if (error.request) {
      // Error de solicitud (por ejemplo, problema de red)
      Swal.fire('Error: No se pudo realizar la solicitud')
      console.error('Error de solicitud:', error.request)
    } else {
      // Otros tipos de errores
      Swal.fire('Error: Se produjo un error inesperado')
      console.error('Error inesperado:', error.message)
    }
  }

  return {
    readDocTypes,
    docTypes,
    readContactType,
    contactType,
    readContacts,
    contacts,
    readCountries,
    countries,
    readActivities,
    activities,
    readIndustries,
    industries,
    readLocalities,
    localities,
    readCareers,
    careers,
    readGenders,
    genders,
    readRelationships,
    relationships,
  }
})
