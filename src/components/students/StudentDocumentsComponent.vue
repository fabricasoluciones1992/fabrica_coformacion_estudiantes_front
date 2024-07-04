<template>
  <div class="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
    <div class="row shadow col-12 p-3 bg-body mb-5 rounded">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th class="blue-color-bg text-light text-center">
              {{ $t('students.documents') }}
            </th>
            <th class="blue-color-bg text-light text-center">
              {{ $t('students.status') }}
            </th>
            <th class="blue-color-bg text-light text-center">
              {{ $t('students.updatedFiles') }}
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(document, index) in documents.value" :key="index">
            <td>
             {{ document.document }}
              <p> <i class="ri-file-pdf-2-line icon-red"></i><a :href="document.docUrl">{{ document.docName }}</a></p>
            </td>
            <td>
              <i>{{defineStatus(document.status)}}</i>
      
         
            </td>
            <td>
              <button
                @click="prepareEditForm(document)"
                class="shadow btn btn-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#docModal"
              >
                {{ $t('buttons.edit') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <modalDocuments :docUpdating="fullDoc" :name="doc" :editing="update" />
</template>

<script setup>
import modalDocuments from '@/components/students/studentsDocuments/ModalDocuments.vue'
import { ref, defineProps, watchEffect, onMounted } from 'vue'
import { useGeneralStore } from '@/stores/generalStore'

const generalStore = useGeneralStore()
const allDocs = ref('')
const documents = ref([])
const doc = ref('')
const fullDoc = ref('')
const update = ref(false)


const props = defineProps({
  studentItem: Object
})
onMounted(async () => {
  await generalStore.readDocuments(props.studentItem.stu_id)
  allDocs.value = generalStore.documents
  console.log(allDocs.value)
  for (let i = 0; i < allDocs.value.length; i++) {
    if (allDocs.value[i].doc_type == 'HOJA DE VIDA') {
      documents.value.value[0].docId = allDocs.value[i].doc_id
      documents.value.value[0].docUrl = allDocs.value[i].doc_url
      documents.value.value[0].status = allDocs.value[i].doc_status
      documents.value.value[0].docName = allDocs.value[i].doc_name
    }
    if (allDocs.value[i].doc_type == 'COPIA DOCUMENTO IDENTIDAD') {
      documents.value.value[1].docId = allDocs.value[i].doc_id
      documents.value.value[1].docUrl = allDocs.value[i].doc_url
      documents.value.value[1].status = allDocs.value[i].doc_status
      documents.value.value[1].docName = allDocs.value[i].doc_name
    }
    if (allDocs.value[i].doc_type == 'CERTIFICADO EPS') {
      documents.value.value[2].docId = allDocs.value[i].doc_id
      documents.value.value[2].docUrl = allDocs.value[i].doc_url
      documents.value.value[2].status = allDocs.value[i].doc_status
      documents.value.value[2].docName = allDocs.value[i].doc_name
    }
    if (allDocs.value[i].doc_type == 'CERTIFICADO BANCARIO') {
      documents.value.value[3].docId = allDocs.value[i].doc_id
      documents.value.value[3].docUrl = allDocs.value[i].doc_url
      documents.value.value[3].status = allDocs.value[i].doc_status
      documents.value.value[3].docName = allDocs.value[i].doc_name
    }
    if (allDocs.value[i].doc_type == 'FOTO FONDO BLANCO') {
      documents.value.value[4].docId = allDocs.value[i].doc_id
      documents.value.value[4].docUrl = allDocs.value[i].doc_url
      documents.value.value[4].status = allDocs.value[i].doc_status
      documents.value.value[4].docName = allDocs.value[i].doc_name
    }
   
   
  }
})



const defineStatus = (status) =>{
  switch (status) {
    case 0:
      return 'Documento rechazado'
    case 1:
      return 'Pendiente por aprobación'
    case 2:
      return 'Documento aprovado'
    default:
      return 'Sin subir'
  }
}
documents.value = ref([
      {
        docId: null,
        document: 'Hoja de vida',
        docUrl: null,
        status: null,
        docName:null
      },
      {
        docId: null,
        document: 'Copia documento identidad',
        docUrl: null,
        status: null,
        docName:null
      },
      {
        docId: null,
        document: 'Certificado EPS',
        docUrl: null,
        status: null,
        docName:null
      },
      {
        docId: null,
        document: 'Certificado bancario',
        docUrl: null,
        status: null,
        docName:null
      },
      {
        docId: null,
        document: 'Foto fondo blanco',
        docUrl: null,
        status: null,
        docName:null
      }
    ])

const prepareEditForm = (document) => {
  if(document.docUrl == null){
    doc.value = document.document
  console.log(doc.value, document.document)
   update.value = false
  }else{
    fullDoc.value = document
    console.log(fullDoc.value, document.document)
    update.value = true
  }
  
}
console.log(documents.value)
// documentCopy: t('students.documentsFiles.documentCopy'),
//   epsCertification: t('students.documentsFiles.epsCertification'),
//   bankCertification: t('students.documentsFiles.bankCertification'),
//   blankPhoto: t('students.documentsFiles.blankPhoto')
</script>
<style lang="scss" scoped>
.blue-color-bg {
  background-color: var(--blue-color);
}
.icon-red {
  color: red;
}
</style>
