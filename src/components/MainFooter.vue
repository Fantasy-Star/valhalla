<template>
  <div>
    <span id="/valhalla/" class="leancloud-visitors" data-flag-title="访问量统计">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-eye"></use>
      </svg>
      &nbsp;
      <span class="leancloud-visitors-count">0</span>
    </span>
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
        logo: '#icon-star',
        link: 'https://fantasy-star.github.io/valhalla/',
        color: '#0078E7'
      },
      links: [
        {
          name: 'github',
          color: 'black',
          icon: '#icon-github',
          label: 'GitHub 项目代码',
          href: 'https://github.com/Fantasy-Star/valhalla'
        },
        {
          name: 'weibo',
          color: '#DB2828',
          icon: '#icon-weibo',
          label: '微博：上海海事大学幻星科幻协会',
          href: 'https://weibo.com/u/3784345967'
        },
        {
          name: 'weixin',
          color: '#62b900',
          icon: '#icon-weixin',
          label: '微信公众号：幻星科幻',
          href: './qrcode/weixin.webp'
        },
        {
          name: 'email',
          color: '#409EFF',
          icon: '#icon-envelope',
          label: '邮箱：smuhxxh@163.com',
          href: 'mailto:smuhxxh@163.com'
        },
        {
          name: 'blog',
          color: '#6435C9',
          icon: '#icon-globe',
          label: 'fantasy-star.github.io',
          href: 'https://fantasy-star.github.io'
        },
      ]
    }
  }
}
</script>

<style>

</style>
