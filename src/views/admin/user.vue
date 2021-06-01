<template>
  <div>
    <a-cascader
      :options="optionData.options"
      placeholder="Please select"
      @change="onChange"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const optionData = reactive({
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children1: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children1: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
    });
    const onChange=(value)=> {
      console.log(value);
    }
    return {
      optionData,
      onChange
    };
  },
};
</script>

<style scoped lang="less">
</style>
