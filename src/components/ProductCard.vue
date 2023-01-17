<template>
    <img v-if="loading" class='mx-auto block' src="../assets/images/spinner.gif" alt="spinner" />
    <div v-else-if="products.length <= 0" class="my-10 text-center text-3xl text-gray-500">No products found!</div>
  <div v-else class="row justify-content-center p-3 p-md-5">
    <div v-for="(product,index) in products" :key="product.id" class="col-md-4" >
      <div class="card my-3 drop-shadow-2xl">
        <div style="height: 15rem">
          <img
            :src="product.thumbnail"
            style="
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              object-fit: fill;
            "
            class="img-fluid h-100 w-100"
            :alt="title"
          />
        </div>
        <div class="card-body pb-0">
          <div class="d-flex justify-content-between">
            <div>
              <p>
                <h5 class="text-dark">{{ product.title }}</h5>
              </p>

              <p>
                <span class="text-dark">${{ product.price }}</span>
              </p>
            </div>
            <div>
              <p class="small text-muted">Rated {{ product.rating }}/5</p>
              <p class="small text-muted">{{ product.category }}</p>
            </div>
          </div>
        </div>

        <hr class="my-0" />
        <div class="card-body">
          <div class="flex justify-between items-center pb-2">
            <router-link
              :to="{ name: 'SingleProduct', params: { id: product.id } }"
              type="button"
              class="py-1 px-3 rounded-md bg-[#764af1] text-white shadow-xl hover:scale-110 transition-all"
              >Get Info</router-link
            >
            <button @click="deleteProduct(product.id,index)" ><i class="fa-solid fa-trash border p-2 rounded-md text-red-600 bg-red-200 hover:bg-red-300 cursor-pointer"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pagination
      :totalPages="12"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
</template>

<script>
import Pagination from './Pagination.vue'
import { deleteProduct, getAllProducts } from '@/services/service';
export default {
  components:{
    Pagination,
  },
  data() {
    return {
      products: [], // to be filled with api data
      loading: false, // for displaying spinner while data is being fetched
      currentPage: 1,
      limit: 9,
      skip: 0,
    };
  },
  methods: {
    getAllProducts() {
      this.loading = true;
      getAllProducts(this.limit, this.skip)
        .then((data) => {
          console.log(data);
          this.products = data.products;
          this.loading = false;
        });
    },

    deleteProduct(id, index){
      deleteProduct(id).then(data => {
        alert(`${data.title} has successfully been deleted`);
        this.products.splice(index, 1);  
    })
    },
    onPageChange(page) {
      this.currentPage = page;
      if(page){
        this.skip = this.limit*(page-1);
      }

      this.getAllProducts();
    }
  },

  created() {
    this.getAllProducts();
  },
};
</script>
