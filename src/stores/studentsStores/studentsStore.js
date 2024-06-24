import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../authStore.js'
import Swal from 'sweetalert2'

// import {show_alerta} from "../funtions.js"

export const useStudentStore = defineStore('students', () => {
  const authStore = useAuthStore()
 const API_URL = 'http://127.0.0.1:8088/api'
  const SEC_API_IRL = 'http://127.0.0.1:8000/api'
  const students = ref([])
  const student = ref([]) 

  // Esta función se utiliza para leer los Estudiantes
  const readStudents = async () => {
    try {
      const res = await axios({
        url: `${SEC_API_IRL}/students`,
        method: 'GET',    
        headers: {
          Authorization: 'Bearer ' + authStore.token
        }
      })
      console.log(res.data.data)
      students.value = res.data.data
      
      // .data.map((item) => {
      //   return {
      //     stu_id: item.stu_id,
      //     per_document: item.per_document,
      //     doc_typ_id: item.doc_typ_id,
      //     doc_typ_name: item.doc_typ_name,
      //     doc_typ: item.doc_typ,
      //     per_name: item.per_name,
      //     per_lastname: item.per_lastname,
      //     career: item.career,
      //     stu_enr_semester: item.stu_enr_semester,
      //     pro_name: item.pro_name,
      //     mon_sta_name: item.mon_sta_name,
      //     stu_enr_status: item.stu_enr_status,
      //     car_name: item.car_name
      //   }
      // })
      for (var i = 0; i <= students.value.length - 1; i++) {
        switch (students.value[i].doc_typ_id) {
          case 1:
            console.log('C.C')
            students.value[i].doc_typ = 'C.C'
            break
          case 2:
            console.log('T.I')
            students.value[i].doc_typ = 'T.I'
            break
          default:
            students.value[i].doc_typ = 'No doc type found'
            break
        }
      }
      console.log(students.value)

      return students.value
    } catch (error) {
      handleError(error)
    }
  }

  const showStudent = async (stu_id) => {
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token
      const res = await axios({
        url: `${SEC_API_IRL}/students/${stu_id}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + authStore.token
        }
      })
      console.log(res.data.data.data)
      student.value = res.data.data.data

      student.value.doc_typ_acortation = ''

      console.log(student.value)
      return student.value
    } catch (error) {
      handleError(error)
    }
  }
  // // Esta función se utiliza para registrar las Eps lcth
  // const registerDoctypes = async (doc_typ_name,) => {
  //   try {
  //     axios.defaults.headers.common['Authorization'] ='Bearer ' + authStore.token
  //     const res = await axios({
  //       url: '/doctypes',
  //       method: 'POST',
  //       headers: {
  //         Authorization: 'Bearer ' + authStore.token
  //       },
  //       data: {
  //         doc_typ_name: doc_typ_name
  //       }
  //     })
  //     readStudents()
  //     if(res.data.status == false){
  //       show_alerta(res.data.message,'error')
  //     }
  //     if(res.data.status == true){
  //       show_alerta(res.data.message,'success')
  //     }
  //     doctypes.value.push(res.data.data.newregisterDoctypes)

  //   } catch (error) {

  //     console.log(error.response?.data || error)
  //   }
  // }

  // Esta función se utiliza para editar las EPS
  // const updateDoctypes = async (doc_typ_id, new_doc_typ_name) => {
  //   try {
  //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.token;
  //     const res = await axios({
  //       url: `/doctypes/${doc_typ_id}`,
  //       method: 'PUT',
  //       headers: {
  //         Authorization: 'Bearer ' + authStore.token
  //       },
  //       data: {
  //         doc_typ_name: new_doc_typ_name
  //       }
  //     });
  //     if (res.data.status === false) {
  //       show_alerta(res.data.message, 'error');
  //     } else if (res.data.status === true) {
  //       show_alerta(res.data.message, 'success');
  //       readStudents()
  //     }
  //   } catch (error) {
  //     console.error(error.response?.data || error);
  //     handleError(error);
  //   }
  // };


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
    readStudents,
    students,
    student,
    showStudent
  }
})
