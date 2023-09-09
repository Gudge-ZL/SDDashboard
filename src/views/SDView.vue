<template>
    <iframe id="SD" scrolling="false" style="width: 100%;height: 100%;">
    </iframe>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'SDView',
        mounted() {
            this.setSrc();
        },
        methods: {
            setSrc() {
                const sdElement = document.getElementById('SD');
                if (sdElement) {
                    sdElement.src = 'http://'+axios.defaults.baseURL+':7860/?__theme=day';
                }
            }
        }
    }
</script>