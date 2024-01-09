
import type { UAvatar } from '#build/components';

import type { NuxtLink } from '#build/components';
<template>
    <header class="flex justify-between items-center mt-5">
        <NuxtLink to="/" class="text-xl font-bold">
            Finance Tracker
        </NuxtLink>
        <div>
            <UAvatar alt="Logo"></UAvatar>
        </div>
    </header>
</template>