<template>
  <button
    type="button"
    class="-m-2 p-2 hover:text-pink-300 relative"
    @click="open = true"
  >
    <span
      class="cart-counter bg-pink-400 absolute rounded-full h-5 w-5 text-sm text-white left-5 bottom-5"
      >{{ cartItemsCount }}</span
    >
    <i class="fa-solid fa-cart-shopping"></i>
  </button>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                >
                  <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Shopping cart</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li
                            v-for="product in cartItems"
                            :key="product.id"
                            class="flex py-6"
                          >
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                            >
                              <img
                                :src="product.thumbnail"
                                :alt="product.title"
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex justify-between text-base font-medium text-gray-900"
                                >
                                  <h3>
                                    {{ product.title }}
                                  </h3>
                                  <p class="ml-4">${{ product.price }}.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ product.brand }}
                                </p>
                              </div>
                              <div
                                class="flex flex-1 items-end justify-between text-sm"
                              >
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                  <button
                                    @click="
                                      () =>
                                        store.dispatch(
                                          'removeProductFromCart',
                                          product.id
                                        )
                                    "
                                    type="button"
                                    class="font-medium hover:text-red-500 border hover:bg-red-200 rounded-lg p-1"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>Subtotal</p>
                      <p>${{ totalPrice }}.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div class="mt-6" @click="open = false">
                      <div
                        class="ml-3 flex h-7 items-center"
                        @click="handleCheckout"
                      >
                        <button
                          type="button"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500 w-full"
                        >
                          <a
                            @click="handleCheckout"
                            class="rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >Checkout</a
                          >
                        </button>
                      </div>
                    </div>
                    <div
                      class="mt-6 flex justify-center text-center text-sm text-gray-500"
                    >
                      <p>
                        or
                        <button
                          type="button"
                          class="font-medium text-indigo-600 hover:text-indigo-500"
                          @click="open = false"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import store from "../store/index";
import { ref, computed } from "vue";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const router = useRouter();

// ------------- functions -------------- //
function handleCheckout() {
  let storeToken = store.state.userToken;

  if (!storeToken) router.push("/login");
  else router.push("/checkout");
}
// a computed ref
const cartItemsCount = computed(() => {
  return store.state.cart.length;
});
const cartItems = computed(() => {
  return store.state.cart;
});
const totalPrice = computed(() => {
  let priceArray = [];
  store.state.cart.forEach((item) => priceArray.push(item.price));
  return priceArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

let open = ref(false);
</script>
