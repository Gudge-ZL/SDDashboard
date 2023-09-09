<template>
    <iframe id="SD" scrolling="false" style="width: 100%;height: 100%;">
    </iframe>
</template>

<script>
import config from '../../config.json';
    export default {
        name: 'SDView',
        mounted() {
            this.setSrc();
        },
        methods: {
            setSrc() {
                const sdUrl = config.sdUrl;
                const sdElement = document.getElementById('SD');
                if (sdElement) {
                    sdElement.src = `http://${sdUrl}/?__theme=day`;
                }
            }
        }
    }
</script>