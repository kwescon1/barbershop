export const UtilityService = {
    extractErrorMessages(errorResponse) {
        const errors = [];
        if (errorResponse.errors) {
            for (const property in errorResponse.errors) {
                if (errorResponse.errors.hasOwnProperty(property)) {
                    const propertyError = errorResponse.errors[property];
                    propertyError.forEach((error) => errors.push(error));
                }
            }
        }
        return errors;
    },

    handleResponseErrors(error) {
        let responseErrors = [];
        if (error?.response?.data) {
            if (error?.response?.data?.error) {
                responseErrors.push(error.response.data.error);
                return responseErrors;
            } else {
                responseErrors = this.extractErrorMessages(error.response.data);
                return responseErrors;
            }
        } else {
            responseErrors.push(
                "Something unexpected happened. Please try again!"
            );
            return responseErrors;
        }
    },
};
