<template>
  <div>
    <DocumentHeader title="Bodyweight" subtitle="Track your body weight and set goals" />

    <FormKit type="form" @submit="submitMeasurement">
      <FormKit name="measured_at" label="Measured at" type="date" :value="new Date().toISOString().substring(0, 10)"
        validation="required|date_after:2023-01-01" validation-visibility="live" />

      <FormKit name="bodyweight_kg" label="Bodyweight (kg)" type="number" value="70" step="0.1" :plugins=[castNumber]
        validation="min:10|max:999" validation-visibility="live" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { FormKitNode } from '@formkit/core';

const castNumber = (node: FormKitNode) => {
  node.hook.input((value, next) => next(Number(value)))
}

const submitMeasurement = async (fields: Object) => {
  const response = await useFetch("/api/bodyweight/postNew", {
    method: "POST",
    body: fields
  })

  console.log(response)
}
</script>

<style scoped></style>