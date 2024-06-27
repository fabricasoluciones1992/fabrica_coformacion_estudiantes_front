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
              {{ $t('students.updatedFiles') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(document, index) in documents" :key="index">
            <td><i class="ri-file-pdf-2-line icon-red"></i> {{document.document}}</td>
            <td>
              <button
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

  <modalDocuments :editing="true" />
</template>

<script setup>
import modalDocuments from '@/components/students/studentsDocuments/ModalDocuments.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const documents = ref([
{
  document: ref(t('students.documentsFiles.CV'))
},
{
  document: t('students.documentsFiles.documentCopy')
}
,
{
  document: t('students.documentsFiles.epsCertification')
}
,
{
  document: t('students.documentsFiles.bankCertification')
}
,
{
  document: t('students.documentsFiles.blankPhoto')
}
])

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
