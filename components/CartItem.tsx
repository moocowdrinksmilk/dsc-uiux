import { ShoppingCartOutlined, CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import Image from 'next/image'
import numeral from 'numeral'
import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons'


interface Cart {
    image: string,
    title: string,
    price: number,
    checked?: boolean
    index: number
    changeChecked: (index: number) => void
    changeDetection: () => void
}



const CartItem = (props: Cart) => {

    const [variation, setVariation] = useState("White")
    const [quantity, setQuantity] = useState(1)

    const quantityList = [0, 1, 2, 3, 4, 5, 6]
    const variationMenu = (
        <Menu>
            <Menu.Item>
                <div onClick={() => { setVariation("White") }}>
                    White
                </div>
            </Menu.Item>
            <Menu.Item>
                <div onClick={() => { setVariation("Black") }}>
                    Black
                </div>
            </Menu.Item>
        </Menu>
    )

    const quantityMenu = (
        <Menu>
            {
                quantityList.map((item, index) => {
                    return (
                        <Menu.Item key={index}>
                            <div onClick={() => { setQuantity(item) }}>
                                {item}
                            </div>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
    return (
        <div className="border-b-2 border-gray-300 py-2 flex flex-row justify-around items-center">
            <div onClick={() => {props.changeChecked(props.index); props.changeDetection()}}>
                {
                    props.checked ?
                        <CheckCircleFilled style={{ fontSize: '20px' }} />
                        :
                        <CheckCircleOutlined style={{ fontSize: '20px' }} />

                }
            </div>

            <Image src={props.image} width={60} height={60} />

            <div className="flex flex-col gap-2">
                <h2>
                    {props.title}
                </h2>

                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-start">
                            <div>S$</div>
                            <div className="text-xl font-bold">{numeral(props.price).format('0.00')}</div>
                        </div>

                        <div className="text-xs text-gray-500">
                            Eligible for FREE Delivery
                        </div>

                        <div className="text-xs text-green-600 font-light">
                            In stock
                        </div>

                        <div className="flex flex-row justify-between gap-4">
                            <div className="flex flex-row gap-2 items-center text-xs">
                                <label htmlFor="">Variation</label>
                                <Dropdown overlay={variationMenu} trigger={["click"]}>
                                    <div className="flex flex-row gap-1 items-center px-2 cursor-pointer text-center bg-gray-200">
                                        {variation} <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>

                            <div className="flex flex-row gap-2 text-xs">
                                <label htmlFor="">Quantity</label>
                                <Dropdown overlay={quantityMenu} trigger={["click"]}>
                                    <div className="flex flex-row gap-1 items-center px-5 cursor-pointer text-center bg-gray-200">
                                        {quantity} <DownOutlined />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem