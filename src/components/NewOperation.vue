<template>
  <div class="container mt-5">
    <h2>Perform a New Operation</h2>
    <form @submit.prevent="performOperation">
      <!-- Operation Type Dropdown -->
      <div class="mb-3">
        <label for="operationType" class="form-label">Operation Type</label>
        <select
          v-model="form.operationType"
          id="operationType"
          class="form-select"
        >
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
          <option value="square_root">Square Root</option>
          <option value="random_string">Random String</option>
        </select>
      </div>

      <!-- Inputs -->
      <div class="mb-3" v-for="(input, index) in inputs" :key="index">
        <label :for="'input' + index" class="form-label"
          >Input {{ index + 1 }}</label
        >
        <input
          v-model.number="inputs[index]"
          type="number"
          class="form-control"
          :id="'input' + index"
          :placeholder="'Enter number ' + (index + 1)"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- Response -->
    <div v-if="result" class="alert alert-success mt-3">
      <strong>Result:</strong> {{ result }}
    </div>

    <!-- Error -->
    <div v-if="error" class="alert alert-danger mt-3">
      <strong>Error:</strong> {{ error }}
    </div>
  </div>
</template>

<script>
import axiosInstance from "@/interceptors/axiosInstance";

export default {
  data() {
    return {
      form: {
        operationType: "addition",
      },
      inputs: [null, null],
      result: null,
      error: null,
    };
  },
  watch: {
    "form.operationType"(newType) {
      if (newType === "square_root" || newType === "random_string") {
        this.inputs = [null];
      } else {
        this.inputs = [null, null];
      }
    },
  },
  methods: {
    async performOperation() {
      try {
        this.error = null; // Clear error
        this.result = null; // Clear previous result

        const response = await axiosInstance.post(
          `/operations/${
            this.form.operationType
          }?inputs=${this.inputs.filter((i) => i !== null).join("&inputs=")}`,
          null
        );
        this.result = response.data; // Assume the API returns the result
      } catch (err) {
        this.error =
          err.response?.data?.message ||
          "An error occurred while performing the operation.";
      }
    },
  },
};
</script>

<style>
/* Custom styling for better visuals */
.container {
  max-width: 600px;
}
</style>
