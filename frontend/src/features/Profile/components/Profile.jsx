import React from 'react'
import styles from '../profile.module.css'

const Profile = () => {

    const OrderList = () => {


    }
  return (
    <main className="mx-auto max-w-7xl ">
<div className="flex items-baseline justify-between border-b border-gray-200 pb-12 pt-24 bg-[#c7dde8]">
            <h1 className="sm:text-4xl lg:text-4xl ml-7 mb-7 font-bold tracking-tight text-gray-900 ">Orders</h1>
      </div>
      
    <div className={styles.container}>
        {/* <div className={styles.leftContainer}>
            <div className="userDashboard">
                <button>Dashboard</button>
            </div>
            <div className="userOrders">
            <button>Orders</button>
            </div>
            <div className="userAddress">
            <button>Address</button>
            </div>
        </div> */}
        <div className={styles.rightContainer}>
        <div className={styles.titles}>
            <h3 className={styles.order}>Order</h3>
            <h3 className={styles.date}>Date</h3>
            <h3 className={styles.status}>Status</h3>
            <h3 className={styles.total}>Total</h3>
            {/* <h3 className={styles.action}></h3> */}
</div>
            <div className={styles.OrderItem}>
            <div className={styles.OrderList}>
        <h3>1</h3>
        <h3>Item</h3>
        <h3>date</h3>
        <h3>date</h3>
        {/* <h3>date</h3> */}
    </div>
            </div>
          </div>
        </div>
      
  
    </main>
  )
}

export default Profile
