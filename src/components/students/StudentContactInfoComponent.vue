
<template>
 
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <div class="row shadow pb-3 mb-5 bg-body rounded">
      <div class="row col-6 col-sm-12 col-md-6 mt-3 ms-2">
        <label class="form-label">{{ $t('modalStudCreate.contactTelephone') }}</label>
        <div class="input-group">
          <select disabled
            class="form-select col-md-3 col-sm-2 col-3 col-xl-2 shadow"
            v-model="defaultCountry"
          >
            <option v-for="country in countriesList" :key="country.code" :value="country.dial_code">
              {{ country.dial_code }} ({{ country.name }})
            </option>
          </select>

          <input disabled class="form-control shadow" v-model="tel_personal" />
        </div>

        <label class="form-label mt-3">{{ $t('profile.personalEmail') }}</label>
        <div>
          <input disabled class="form-control shadow" v-model="mai_personal" />
        </div>

        <label class="form-label mt-3">{{ $t('profile.email') }}</label>
        <div>
          <input disabled class="form-control shadow" v-model="mai_institutional" />
        </div>
      </div>

      <div class="row col-6 col-sm-12 col-md-6 mt-3">
        <label class="form-label">{{ $t('modalStudCreate.contactTelephoneBackup') }}</label>
        <div class="input-group">
          <select disabled
            class="form-select col-md-3 col-sm-2 col-3 col-xl-2 shadow"
            v-model="defaultCountry"
          >
            <option v-for="country in countriesList" :key="country.code" :value="country.dial_code">
              {{ country.dial_code }} ({{ country.name }})
            </option>
          </select>

          <input disabled class="form-control shadow" v-model="tel_backup" />
        </div>
        <label class="form-label mt-3">{{ $t('profile.personalSupportEmail') }}</label>
        <div>
          <input disabled class="form-control shadow" v-model="mai_backup" />
        </div>

        <label class="form-label mt-3">{{ $t('modalStudCreate.landLineTelephone') }}</label>
        <div>
          <input disabled class="form-control shadow" v-model="tel_landline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watchEffect } from 'vue'
// import { useGeneralStore } from '../../stores/generalStore.js'
import { countriesList } from '../../countryCode.js'

const props = defineProps({
  studentContactInfo: {
    type: Object,
    required: true
  },
  loading: Boolean
})

const defaultCountry = '+57'
const mai_personal = ref(props.studentContactInfo ? props.studentContactInfo.mai_personal || '' : '')
const mai_backup = ref(props.studentContactInfo ? props.studentContactInfo.mai_backup || '' : '')
const mai_institutional = ref(props.studentContactInfo ? props.studentContactInfo.mai_institutional || '' : '')
const tel_personal = ref(props.studentContactInfo ? props.studentContactInfo.tel_personal || '' : '')
const tel_backup = ref(props.studentContactInfo ? props.studentContactInfo.tel_backup || '' : '')
const tel_landline = ref(props.studentContactInfo ? props.studentContactInfo.tel_landline || '' : '')
const telephoneInfoArray = ref([])
const mailInfoArray = ref([])

watchEffect(() => {

  if (props.studentContactInfo) {
    mai_personal.value = props.studentContactInfo.mai_personal || ''
    mai_backup.value = props.studentContactInfo.mai_backup || ''
    mai_institutional.value = props.studentContactInfo.mai_institutional || ''
    tel_personal.value = props.studentContactInfo.tel_personal || ''
    tel_backup.value = props.studentContactInfo.tel_backup || ''
    tel_landline.value = props.studentContactInfo.tel_landline || ''
  }

  if (props.studentContactInfo && props.studentContactInfo.mails && Array.isArray(props.studentContactInfo.mails)) {
    mailInfoArray.value = props.studentContactInfo.mails.map((stu_mails) => ({
      mai_id: stu_mails.mai_id || '',
      mai_mail: stu_mails.mai_mail || '',
      mai_description: stu_mails.mai_description || ''
    }))
  } else {
    mailInfoArray.value = ['No mails found']
  }
  if (props.studentContactInfo && props.studentContactInfo.mails && Array.isArray(props.studentContactInfo.mails)) {
    telephoneInfoArray.value = props.studentContactInfo.telephones.map((stu_telephones) => ({
      tel_id: stu_telephones.tel_id || '',
      tel_number: stu_telephones.tel_number || '',
      tel_description: stu_telephones.tel_description || ''
    }))
  } else {
    telephoneInfoArray.value = ['No telephones found']
  }
})
</script>

<style lang="scss" scoped></style>
