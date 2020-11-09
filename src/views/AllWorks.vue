<template>
  <div class="home">
    <portfolio-list></portfolio-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioList from '../components/PortfolioList'

export default {
  name: 'AllWorks',
  components: {
    PortfolioList
  }
}
</script>
