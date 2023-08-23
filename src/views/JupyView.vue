<template>
    <iframe id="Jupy" src="" scrolling="false" style="width: 100%;height: 100%;">
    </iframe>
</template>

<script>
    export default {
        name: 'JupyView',
    }

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://127.0.0.1:8888/tree#notebooks');
    xhr.onreadystatechange = handler;
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Authorization', 'token ' + 'argon2:$argon2id$v=19$m=10240,t=10,p=8$Not2SwB6oTuZL96/+SkFOQ$L0jHwbAg+F6lGOoRf6uTrTSIyOjEuOoRK7xNcqEe8IM');
    xhr.send();

    function handler() {
    if (this.readyState === this.DONE) {
        if (!this.status === 200) {
        // this.response is a Blob, because we set responseType above
        var data_url = URL.createObjectURL(this.response);
        document.querySelector('#Jupy').src = data_url;
        } else {
        console.error('no pdf :(');
        }
    }
    }
</script>