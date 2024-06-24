<template>
    <div
      class="tab-pane fade show active"
      id="actualCompany"
      role="tabpanel"
      aria-labelledby="actual-company-tab"
    >
      <div class="row">
        <div class="col-12 me-5">
          <div class="row shadow p-3 bg-body rounded">
            <div class="col-4 mb-3">
              <img
                class="figure-img border rounded shadow img-fluid object-fit-cover img_height"
                :alt="$t('profile.photoAlt')"
              />
            </div>

            <div class="row col-8">
              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-5">{{
                  $t('cofHistory.companies.name')
                }}</label>
                <input
                  disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>

              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.companyName')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>
  
              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.address')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>
            </div>
  
            <div class="row mt-4">
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.startDate')
                }}</label>
                <input
                disabled
                  type="date"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.endDate')
                }}</label>
                <input
                disabled
                  type="date"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.workDays')
                }}</label>
                 <div class="row">
                <div class="col-5">
                  <input
                  disabled
                    type="text"
                    class="form-select shadow"
                    aria-describedby="NameHelp"
                  />
                </div>
                {{  $t('cofHistory.companies.to') }}
                <div class="col-5">
                  <input
                  disabled
                    type="text"
                    class="form-select shadow"
                    aria-describedby="NameHelp"
                  />
                </div>
              </div>
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.workSchedule')
                }}</label>
                 <div class="row">
                <div class="col-5">
                  <input
                  disabled
                    type="text"
                    class="form-select shadow"
                    aria-describedby="NameHelp"
                  />
                </div>
                {{  $t('cofHistory.companies.to') }}
                <div class="col-5">
                  <input
                  disabled
                    type="text"
                    class="form-select shadow"
                    aria-describedby="NameHelp"
                  />
                </div>
              </div>
              </div>

              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.contractType')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-select shadow"
                  aria-describedby="NameHelp"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.stipend')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>

              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.payType')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-select shadow"
                  aria-describedby="NameHelp"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.payFrecuency')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-select shadow"
                  aria-describedby="NameHelp"
                />
              </div>

              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.compSup')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>
  
              <div class="col-6">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.academicAd')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                  aria-describedby="NameHelp"
                />
              </div>

              <div class="col-12">
                <label for="exampleInputName1" class="form-label mt-3">{{
                  $t('cofHistory.companies.reason')
                }}</label>
                <input
                disabled
                  type="text"
                  class="form-control shadow"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </template>