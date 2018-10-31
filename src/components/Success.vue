<template>
    <div class="container">
        <div class="content">
            <div class="title">{{$t('success.title')}}</div>
            <form>
                <div class="btn-primary" @click="$router.push('speedup')">{{$t("success.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item">{{$t("success.navigation.to_browser")}}</span>
            </div>
        </div>
    </div>
</template>
