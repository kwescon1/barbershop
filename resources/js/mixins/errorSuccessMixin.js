import { UtilityService } from "../services/utility";

export default {
    data() {
        return {
            hasErrors: false,
            server_errors: {},
            manual_validation_errors: "",
        };
    },

    methods: {
        presentErrorAlert(error) {
            console.log(error);
            this.hasErrors = true;
            if (error?.response?.status !== 422) {
                this.manual_validation_errors = error?.response?.data.error;
            } else {
                this.server_errors = UtilityService.handleResponseErrors(error);
            }
        },

        presentSuccessAlert(stringMessage) {
            this.hasErrors = false;
            this.$swal("Success", stringMessage, "success");
        },
    },
};
