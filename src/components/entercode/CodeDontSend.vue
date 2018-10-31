<template>
    <div class="navigation">
        <span class="nav-item" @click="$router.push('/voice-login')">{{$t("enter_code.navigation.voice")}}</span>
        <span class="nav-item" @click="$router.push('/ttk-account-login')">{{$t("navigation.enter")}}</span>
        <span class="nav-item">{{$t("navigation.auth")}}</span>
    </div>
</template>
