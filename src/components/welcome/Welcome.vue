<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <transition 
                    name="fade" 
                    mode="out-in"
                    :css="true">
                <router-view/>
            </transition>
        </div>
    </div>
</template>


