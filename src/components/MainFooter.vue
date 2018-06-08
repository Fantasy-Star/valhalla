<template>
  <div>
    <vue-about-me :copyright="copyright" :links="links"></vue-about-me>
    <br>
  </div>
</template>

<script>
import VueAboutMe from 'vue-about-me'
export default {
  name: 'MainFooter',
  components: {
    VueAboutMe
  },
  data () {
    return {
      copyright: {
        name: 'Valhalla',
        repoName: 'valhalla',
        author: 'Fantasy-Star',
        logo: 'iconfont icon-star'
      },
      links: [
        {
          name: 'github',
          color: 'black',
          icon: 'iconfont icon-github',
          label: 'GitHub 项目代码',
          href: 'https://github.com/Fantasy-Star/valhalla'
        },
        {
          name: 'weibo',
          color: '#DB2828',
          icon: 'iconfont icon-weibo',
          label: '微博：上海海事大学幻星科幻协会',
          href: 'https://weibo.com/u/3784345967'
        },
        {
          name: 'weixin',
          color: '#62b900',
          icon: 'iconfont icon-weixin',
          label: '微信公众号：幻星科幻',
          href: './qrcode/weixin.webp'
        },
        {
          name: 'email',
          color: '#409EFF',
          icon: 'iconfont icon-envelope',
          label: '邮箱：smuhxxh@163.com',
          href: 'mailto:smuhxxh@163.com'
        },
        {
          name: 'blog',
          color: '#6435C9',
          icon: 'iconfont icon-globe',
          label: '博客：yunyoujun.cn',
          href: 'https://fantasy-star.github.io'
        },
      ]
    }
  }
}
</script>

<style>

</style>
