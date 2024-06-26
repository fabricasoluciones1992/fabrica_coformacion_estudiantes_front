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
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i> {{ $t('students.documentsFiles.CV') }}
            </td>
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
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i>
              {{ $t('students.documentsFiles.documentCopy') }}
            </td>
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
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i
              >{{ $t('students.documentsFiles.epsCertification') }}
            </td>
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
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i>
              {{ $t('students.documentsFiles.bankCertification') }}
            </td>
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
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i>
              {{ $t('students.documentsFiles.blankPhoto') }}
            </td>
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

  <modalDocuments
  :doc_url="doc_url"
  :edition="true"
  />
</template>




<script setup>

import { ref } from 'vue'
import modalDocuments from '@/components/students/studentsDocuments/ModalDocuments.vue'


const doc_url = ref('src/uuuu')
</script>
<style lang="scss" scoped>
.blue-color-bg {
  background-color: var(--blue-color);
}
.icon-red {
  color: red;
}
</style>
