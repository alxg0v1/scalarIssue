<template>
  <div>
    <h3>Sandbox</h3>
    <div v-for="platform in sdkPlatform" :key="platform">
      <table class="download-sdk" v-if="filteredSdkList(sdkList.sandbox, platform).length > 0">
        <caption><strong>{{ platform }}</strong></caption>
        <thead>
          <tr>
            <th>Version</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sdk in filteredSdkList(sdkList.sandbox, platform)" :key="sdk">
            <td>{{ platform }} - {{ parseVersion(sdk) }}</td>
            <td><a @click="download(sdk)" class="disabled" href="#">Download</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Production</h3>
    <div v-for="platform in sdkPlatform" :key="platform">
      <table class="download-sdk" v-if="filteredSdkList(sdkList.production, platform).length > 0">
        <caption><strong>{{ platform }}</strong></caption>
        <thead>
          <tr>
            <th>Version</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sdk in filteredSdkList(sdkList.production, platform)" :key="sdk">
            <td>{{ platform }} - {{ parseVersion(sdk) }}</td>
            <td><a @click="download(sdk)" class="disabled" href="#">Download</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sdkList = ref({ production: [], sandbox: [] });
const sdkPlatform = ['reactNative', 'ios', 'android', 'capacitor', 'flutter'];

const fetchData = () => {
  fetch('https://rm6lpiuxoj.execute-api.eu-west-3.amazonaws.com/prd/list')
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      sdkList.value = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

const filteredSdkList = (list, platform) => {
  return list.filter((sdkName) => sdkName.includes(platform));
};

const parseVersion = (sdkName) => {
  if (sdkName.includes('reactNative') || sdkName.includes('capacitor') || sdkName.includes('flutter')) {
    let [type, platform, version, ts] = sdkName.split('-');
    return version;
  }

  if (sdkName.includes('ios') || sdkName.includes('android')) {
    let [env, mywebsite, version, date, id] = sdkName.split('-');
    return version;
  }
};

const download = (sdkFile) => {
  let downloadCode = prompt('Enter your download code', '');
  if (downloadCode != null && downloadCode !== '') {
    fetch(
      `https://rm6lpiuxoj.execute-api.eu-west-3.amazonaws.com/prd/download?file=${encodeURIComponent(
        sdkFile
      )}&downloadCode=${downloadCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        window.open(data.signedUrl, '_blank');
      });
  }
};

onMounted(fetchData);
</script>