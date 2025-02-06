<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.body.classList.add('not-found-page');
});

onUnmounted(() => {
  document.body.classList.remove('not-found-page');
});
</script>

<template>
<div class="img-absolute">
        <img src="/assets/img/code-white.png" alt="code block">
</div>
<div class="not-found">
    <div class="title">
        <h1 class="center">This article might be lost</h1>
        <p class="center">Don’t worry, the knowledge you seek is available in the documentation.</p>
    </div>
    <div class="section">
            <a class="button-card" href="/api-reference/api-endpoints.html">
                <div>
                <h3>API Reference</h3>
                <p>Browse the API Endpoints documentation.</p>
                </div>
                <span class="vpi-chevron-right"></span>
            </a>
            <hr>
            <a class="button-card" href="/guide/overview/getting-started.html">
                <div>
                <h3>Guides</h3>
                <p>Learn from detailed articles about Mywebsite features.</p>
                </div>
                <span class="vpi-chevron-right"></span>
            </a>
            <hr>
            <a class="button-card" href="/use-cases/prerequisites/introduction.html">
                <div>
                <h3>Use Cases</h3>
                <p>Practice with step-by-step examples of common use cases.</p>
                </div>
                <span class="vpi-chevron-right"></span>
            </a>
    </div>
    <p class="action center">
        <a href="/" class="VPButton button-primary m">
                Back to Home
        </a>
    </p>
</div>
</template>

<style>
.not-found-page{
    background-color: var(--vp-c-bg-alt);
}
.not-found {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 660px;
    margin:auto;
}
.not-found .section{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.not-found h1{
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
}
.not-found .button-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.not-found .button-card p{
    margin:8px 0 0;
}
.not-found hr {
    border: 1px solid var(--vp-c-gutter);
    width: 100%;
}
.not-found-page header.VPNav {
  display: none;
} 
.not-found-page .img-absolute{
    z-index:-1;
    width: auto;
    max-width: 400px;
    opacity: 0.8;
    bottom: 0;
    right: 0px;
}
</style>