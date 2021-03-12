<template>
  <table class="w-screen">
    <thead>
      <tr class="bg-gray-800 border-b-2 border-gray-400 text-white text-base">
        <th>
          <span>Ranking</span>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Market Cap.</th>
        <th>24 hours var.</th>
        <th>More info</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in assets"
        :key="a.id"
        class="border-b bg-gray-400 border-black-200 hover:bg-gray-100 hover:bg-orange-100 text-base"
      >
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <div>
            <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
          <div class="inline">
            <img :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`" :alt="a.name" class="w-6 h-6">
          </div>
          <div class="inline">
            {{ a.name }}
          </div>
            </router-link>
            </div>
            </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | dollarPercent }}
        </td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }">
            <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
             Currency details </button> </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PxAssetsTable',

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  font-family: 'Pricedown', Helvetica, Arial, sans-serif;
  padding: 1px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  font-family: 'Pricedown', Helvetica, Arial, sans-serif;
  padding: 1px;
  font-size: 1rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 12px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
