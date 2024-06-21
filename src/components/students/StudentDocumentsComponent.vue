<template>

  <div class="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
    <div class="row shadow col-12 p-3 bg-body mb-5 rounded">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th class="blue-color-bg text-light text-center">
              {{ $t('modalCompCreate.documents') }}
            </th>
            <th class="blue-color-bg text-light text-center">
              {{ $t('modalCompCreate.actions') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i class="ri-file-pdf-2-line icon-red"></i> CCB</td>
            <td>
              <input class="form-control form-control-sm" id="formFileSm" ref="ccb" type="file" />
            </td>
          </tr>
          <tr>
            <td><i class="ri-file-pdf-2-line icon-red"></i> RUT</td>
            <td>
              <input class="form-control form-control-sm" id="formFileSm" ref="rut" type="file" />
            </td>
          </tr>
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i> {{ $t('modalCompCreate.covenant') }}
            </td>
            <td>
              <input
                class="form-control form-control-sm"
                id="formFileSm"
                ref="convenio"
                type="file"
              />
            </td>
          </tr>
          <tr>
            <td>
              <i class="ri-file-pdf-2-line icon-red"></i>
              {{ $t('modalCompCreate.companiesDocRepresentative') }}
            </td>
            <td>
              <input
                class="form-control form-control-sm"
                id="formFileSm"
                ref="convenio"
                type="file"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blue-color-bg {
  background-color: var(--blue-color);
}
.icon-red {
  color: red;
}
</style>
