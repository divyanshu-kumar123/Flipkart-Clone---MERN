# 🛍️ Flipkart Clone

A full-stack **Flipkart-inspired e-commerce platform** built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse products, manage their cart, place orders (from cart or individual products), and view their order history — all within a smooth and responsive UI.

---

## 🚀 Key Features

### 👤 User Experience
- Sign Up and Login (session-based)
- Persistent cart per user
- Real-time stock validation
- Clean, collapsible card-based Order Summary flow

### 🛒 Cart & Checkout
- Add/remove products from cart
- Increase/decrease item quantity
- Place orders from:
  - Entire cart
  - Directly from product page (via "Order Now")
- Dynamic price calculation including discounts & delivery
- Order cancellation with automatic stock restoration

### 📦 Orders & Delivery
- Multi-step collapsible **Order Page** with:
  - Hardcoded location selection
  - Editable cart section
  - Payment mode selection (Cash on Delivery)
- Order tracking via backend
- Delivery charges waived over ₹500

---

## 🧰 Tech Stack

| Category     | Tools & Libraries                          |
|--------------|---------------------------------------------|
| Frontend     | React.js, React Router, Axios, Bootstrap/MUI |
| Backend      | Node.js, Express.js                        |
| Database     | MongoDB, Mongoose                          |
| Others       | JWT (optional), Postman, GitHub, REST APIs |

---

## 📸 UI Screenshots

Here are a few screenshots from the project to give you a visual overview:

- 🛒 **Home Page** ![image](https://github.com/user-attachments/assets/bd925c8a-16ac-446d-862e-1bd701aa73a4)

- 📦 **Product details page** ![image](https://github.com/user-attachments/assets/46844fa3-e557-43d7-8c0a-03fcd7a851cb)

- 🧾 **Cart Page** ![image](https://github.com/user-attachments/assets/3f7d609e-d17e-4129-8a04-72624d0ea395)

- ✅ **Order Confirmation Page**![image](https://github.com/user-attachments/assets/0c70d776-b460-4392-bd08-f9587903f28d)

- 🔐 **Login and Register Pages**![image](https://github.com/user-attachments/assets/f4ebb7ee-b3cb-4911-8c3a-9c4da87a3454)![image](https://github.com/user-attachments/assets/67fa779a-aed9-498a-acd6-c4969f2c6451)

---

## 🛠️ Getting Started


 Create a `.env` file with the following contents:

   ```env
   PORT=8080
   DB_URL=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your_jwt_secret_key
   ```


### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flipkart-clone.git 
cd flipkart
````

### 2. Install Dependencies

Install both backend and frontend packages:

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 3. Start the Application

Open two terminal windows or tabs:

#### 🖥️ Terminal 1: Start the Backend

```bash
cd backend
node server.js
```


#### 🌐 Terminal 2: Start the Frontend

```bash
cd frontend
npm run dev
```

---

## 💡 Planned Improvements

* Razorpay/Stripe Payment Integration
* Dynamic Address Management
* Admin Dashboard for Inventory


---

