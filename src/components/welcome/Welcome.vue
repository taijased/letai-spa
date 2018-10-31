<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <transition name="fade">
                <router-view/>
            </transition>
        </div>
    </div>
</template>


