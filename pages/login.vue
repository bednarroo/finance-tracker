<template>
  <UCard v-if="!success">
    <template #header> Sign-in to Finance Tracker </template>
    <form>
      <UFormGroup
        labe="Email"
        name="email"
        class="mb-4"
        required="true"
        help="You will receive an email with the confirmation link"
      >
        <UInput type="email" placeholder="Email" required />

        <UButton type="submit" variant="solid" color="black">Sign-in</UButton>
        />
      </UFormGroup>
    </form>
  </UCard>
</template>

<script setup>
const success = ref(false);
</script>