import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { LeftOutlined, DownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import CartItem from '../components/CartItem'
import cartjson from '../public/cart-items.json'
import Link from 'next/link'
import VoucherModal from '../components/VoucherModal'


const Home: NextPage = () => {

  const [cartItems, setCartItems] = useState(cartjson)
  const [voucherModal, setVoucherModal] = useState(false)

  return (
    <>
      <VoucherModal visible={voucherModal} onClose={() => {setVoucherModal(false)}} />

        <div className="flex flex-col justify-between relative">
        <div>
          <div className="bg-black h-20 flex justify-center items-center">
            <Image className="bg-white" src="/amazon.svg" height={40} width={80}></Image>
          </div>
          <div className="bg-black w-full flex flex-row justify-between items-center px-5 py-5 sticky top-0 z-10">
            <LeftOutlined style={{ color: "white" }} height={30} width={30} />
            <h1 className="text-white font-bold text-xl">
              MY CART
          </h1>
            <ShoppingCartOutlined style={{ color: "white" }} />
          </div>
          <div className="flex flex-col mb-36">
            {
              cartItems.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                )
              })
            }
            <div className="flex flex-col gap-4 py-4 border-yellow-500">
              <div className="w-full text-center border-b border-yellow-300">
                Items You May Like
              </div>

              <div className="flex flex-row w-screen py-2 px-2 overflow-y-auto">

                <div className="flex flex-col items-start relative w-36">
                  <Image src="/senheiser.jpg" width={60} height={60} />
                  <a href="#" className="text-blue-400">
                    Senheiser stuff
                  </a>
                  <div className="flex flex-row items-start text-yellow-600">
                    <div>S$</div>
                    <div className="">1200.00</div>
                  </div>

                  <div className="absolute right-0 bottom-0">
                    Hello
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end fixed w-full bottom-0 h-36 bg-white">
          <div className="flex flex-row items-center justify-between items-center border-t border-b py-4 px-2 h-1/2">
            <div className="font-bold text-xs">
              Bank Exclusive Vouchers
            </div>

            <div className="text-xs text-green-400"
            onClick={() => {
              setVoucherModal(true)
            }}>
              $20 off has been applied
            </div>
          </div>

          <div className="flex flex-row justify-between items-center border-t border-b py-4 px-2 h-1/2">
            <div className="font-bold text-xs">
              SELECT ALL
            </div>

            <div className="font-bold text-xs">
              SUBTOTAL: $2,743.00
            </div>

            <Link href="/payment">
              <button className="font-bold text-xs px-2 py-2 bg-yellow-300 shadow-xl hover:bg-yellow-400">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
