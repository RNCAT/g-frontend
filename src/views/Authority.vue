<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table
          :authorities="authorities"
          :isLoaded="isLoading"
          v-on:toggle:add="toggleAddForm"
          v-on:update:authority="toggleUpdateForm"
          v-on:delete:authority="deleteAuthority"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div v-if="showAddForm">
          <AddForm v-on:add:authority="addAuthority" />
        </div>
        <div v-if="showUpdateForm">
          <UpdateForm
            :updateAuthority="selectedAuthority"
            v-on:update:authority="updateAuthority"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/authority/Table.vue'
import AddForm from '@/components/authority/AddForm.vue'
import UpdateForm from '@/components/authority/UpdateForm.vue'

import axios from 'axios'

export default {
  name: 'Authority',
  components: {
    Table,
    AddForm,
    UpdateForm,
  },

  data() {
    return {
      authorities: [],
      isLoading: true,
      showAddForm: false,
      showUpdateForm: false,
      selectedAuthority: null,
    }
  },

  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm
      this.showUpdateForm = false
    },

    toggleUpdateForm(authority) {
      this.showUpdateForm = true
      this.showAddForm = false

      this.selectedAuthority = authority
    },

    async getAuthorities() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/authorities`)
      this.isLoading = false

      this.authorities = data
    },

    async addAuthority(authority) {
      await axios.post(`${import.meta.env.VITE_API_URL}/authorities`, authority)

      this.$buefy.notification.open({
        message: 'เพิ่มข้อมูลเจ้าหน้าที่สำเร็จ!',
        type: 'is-success',
      })

      this.showAddForm = false

      this.getAuthorities()
    },

    async updateAuthority(authority) {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/authorities/${authority.authority_id}`,
        authority
      )

      this.$buefy.notification.open({
        message: 'แก้ไขข้อมูลเจ้าหน้าที่สำเร็จ!',
        type: 'is-success',
      })

      this.showUpdateForm = false

      this.getAuthorities()
    },

    async deleteAuthority(authority) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/authorities/${authority.authority_id}`)

      this.$buefy.notification.open({
        message: 'ลบข้อมูลเจ้าหน้าที่สำเร็จ!',
        type: 'is-success',
      })

      await this.getAuthorities()
    },
  },

  async mounted() {
    await this.getAuthorities()
  },
}
</script>

<style></style>
