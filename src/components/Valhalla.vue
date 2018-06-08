<template>
  <div>
    <el-tooltip effect="dark" content="幻星英灵殿" placement="top">
      <h1>{{ title }}</h1>
    </el-tooltip>
    <el-row v-for="year in years" :key="year">
      <h2>{{ year }}</h2>
      <hr>
      <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:6}" v-for="(servant, key) in servants" :key="key" v-if="servant.year===year">
        <el-card class="servant-card" shadow="hover" :body-style="{padding: '10px'}">
          <div slot="header">
            <span>{{ servant.name }}</span> &nbsp;
            <el-tag type="info" size="mini" v-if="servant.nickname">{{ servant.nickname }}</el-tag>
            <el-tag class="right-tag" type="success" size="mini" v-if="servant.department">{{ servant.department }}</el-tag>
            &nbsp;
            <el-tag class="right-tag" v-for="(position, key) in servant.positions" :key="key" size="mini">
              {{ position }}
            </el-tag>
          </div>
          <div>
            <p v-html="servant.description"></p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import servants from '../assets/json/servants.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Valhalla',
      servants,
      years: [
        2014,
        2015,
        2016,
        2017,
        2018
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 5px;
}

.servant-card {
  text-align: left;
  margin: 10px;
  min-height: 150px;

  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
  }
}
.right-tag {
  float: right;
  margin-left: 5px;
}
</style>
