<template>
  <main>
    <div class="container">
      <table>
        <tbody>
          <tr>
            <td class="product-name">
              <img alt="Pink Funnel Collar Puffer Jacket" class="product-image" height="60"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-20CWVPXEHcaBh5P1vZv1FNN3.png?st=2024-09-07T06%3A59%3A38Z&amp;se=2024-09-07T08%3A59%3A38Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-06T21%3A23%3A43Z&amp;ske=2024-09-07T21%3A23%3A43Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=bpeeyoNjyuYsiD07Byldv4Nn6EsOJ1GqPXsJqnIcTaI%3D"
                width="60" />
              Funnel Collar Puffer Jacket
            </td>
            <td class="price">
              $39.00
            </td>
            <td>
              <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
              </button>
              <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="clear-all">Clear All</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'wishlistComp',
};
</script>

<style scoped>
main {
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

.container {
  background-color: #fff;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  display: block;
  text-align: right;
  margin: 8px;
}

th {
  text-transform: uppercase;
  font-size: 14px;
  color: #666;
}

tr {
  border-bottom: 1px solid #0f0e0e;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  vertical-align: middle;
}

.product-name {
  display: flex;
  align-items: center;
}

.product-name img {
  margin-right: 15px;
}

.price {
  font-size: 14px;
  font-weight: bold;
}

.btn {
  color: #074c1a;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
}
 .btn:hover {
  background-color: orange;
}

.clear-all {
  margin-top: 10px;
  color: #073616;
  float: left;
  border: none;
}

.clear-all:hover {
  text-decoration: underline; 
  background-color: orange;
}

@media (max-width: 768px) {

  th,
  td {
    display: block;
    text-align: right;
  }

  th {
    text-align: left;
  }

  td {
    border-top: none;
    border-bottom: 1px solid #eee;
    padding: 10px 5px;
  }

  .product-name {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-name img {
    margin-bottom: 10px;
  }

  .add-to-cart,
  .select-option {
    width: 100%;
    margin-top: 10px;
  }

  .remove {
    margin-top: 10px;
  }
}
</style>