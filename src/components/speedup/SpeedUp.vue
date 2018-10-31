<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('horeca.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("horeca.input")}}</div>
                </div>
                <div class="btn-primary">{{$t("horeca.btn_change")}}</div>
            </form>
            <div class="subtitle" v-html="$t('horeca.second_subtitle')"></div>
            <transition name="fade">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

