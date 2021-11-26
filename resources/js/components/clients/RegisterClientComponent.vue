<template>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img
                :src="imageSource"
                class="img-fluid"
                style="
                  border-top-left-radius: 0.25rem;
                  border-bottom-left-radius: 0.25rem;
                "
              />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Client registration form</h3>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example1m"
                        >First name</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example1n"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example1n"
                        >Last name</label
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example1m1"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example1m1"
                        >Other Names</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example1n1"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form3Example1n1"
                        >Mobile Number</label
                      >
                    </div>
                  </div>
                </div>

                <div
                  class="
                    d-md-flex
                    justify-content-start
                    align-items-center
                    mb-4
                    py-2
                  "
                >
                  <h6 class="mb-0 me-4">Gender:</h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      value="option1"
                    />
                    <label class="form-check-label" for="femaleGender"
                      >Female</label
                    >
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      value="option2"
                    />
                    <label class="form-check-label" for="maleGender"
                      >Male</label
                    >
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      value="option3"
                    />
                    <label class="form-check-label" for="otherGender"
                      >Other</label
                    >
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    class="form-control form-control-lg"
                    readonly
                    v-model="form.clientNumber"
                  />
                  <label class="form-label" for="form3Example8"
                    >Client Unique Number</label
                  >
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="button" class="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CLIENT_CALLS from "../../services/clientService";
export default {
  data() {
    return {
      imageSource: "../../images/image.png",

      form: {
        firstName: "",
        lastName: "",
        otherNames: "",
        mobileNumber: "",
        gender: "",
        clientNumber: "",
      },
    };
  },

  created() {
    this.genClientNumber();
  },

  methods: {
    async genClientNumber() {
      try {
        let response = await CLIENT_CALLS.genClientNumber();

        this.form.clientNumber = response?.data?.data;
      } catch (error) {
        this.presentErrorAlert(error);
      }
    },
  },
};
</script>

<style>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 4px;
}
</style>