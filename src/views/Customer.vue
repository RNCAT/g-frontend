<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table
          :customers="customers"
          :isLoaded="isLoading"
          v-on:toggle:add="toggleAddForm"
          v-on:update:customer="toggleUpdateForm"
          v-on:delete:customer="deleteCustomer"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div v-if="showAddForm">
          <AddForm v-on:add:customer="addCustomer" />
        </div>
        <div v-if="showUpdateForm">
          <UpdateForm :updateCustomer="selectedCustomer" v-on:update:customer="updateCustomer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/customer/Table.vue'
import AddForm from '@/components/customer/AddForm.vue'
import UpdateForm from '@/components/customer/UpdateForm.vue'

import axios from 'axios'

export default {
  name: 'Customer',
  components: {
    Table,
    AddForm,
    UpdateForm,
  },

  data() {
    return {
      customers: [],
      isLoading: true,
      showAddForm: false,
      showUpdateForm: false,
      selectedCustomer: null,
    }
  },

  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm
      this.showUpdateForm = false
    },

    toggleUpdateForm(customer) {
      this.showUpdateForm = true
      this.showAddForm = false

      this.selectedCustomer = customer
    },

    async getCustomers() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/customers`)
      this.isLoading = false

      this.customers = data
    },

    async addCustomer(customer) {
      await axios.post(`${import.meta.env.VITE_API_URL}/customers`, customer)

      this.$buefy.notification.open({
        message: 'เพิ่มข้อมูลลูกค้าสำเร็จ!',
        type: 'is-success',
      })

      this.showAddForm = false

      this.getCustomers()
    },

    async updateCustomer(customer) {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/customers/${customer.customer_id}`,
        customer
      )

      this.$buefy.notification.open({
        message: 'แก้ไขข้อมูลลูกค้าสำเร็จ!',
        type: 'is-success',
      })

      this.showUpdateForm = false

      this.getCustomers()
    },

    async deleteCustomer(customer) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/customers/${customer.customer_id}`)

        this.$buefy.notification.open({
          message: 'ลบข้อมูลลูกค้าสำเร็จ!',
          type: 'is-success',
        })

        this.getCustomers()
      } catch (error) {
        this.$buefy.notification.open({
          message: 'ไม่สามารถลบข้อมูลลูกค้าที่เคยจองได้!',
          type: 'is-danger',
        })
      }
    },
  },

  async mounted() {
    await this.getCustomers()
  },
}
</script>
