<template>
  <div>
    <DocumentHeader title="Bodyweight" subtitle="Track your body weight and set goals" />

    <FormKit type="form">
      <FormKit
        name="measured_at"
        label="Measured at"
        type="date"
        :value="new Date().toISOString().substring(0, 10)"
        validation="required|date_after:2023-01-01"
        validation-visibility="live"
      />

      <FormKit
        name="bodyweight_kg"
        label="Bodyweight (kg)"
        type="number"
        value="70"
        step="0.1"
        :plugins=[castNumber]
        validation="min:10|max:999"
        validation-visibility="live"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const castNumber = (node) => {
  node.hook.input((value, next) => next(Number(value)))
}

const submitMeasurement = async (fields) => {
  alert(JSON.stringify(fields))
}
</script>

<style scoped>

</style>