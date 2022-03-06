import { ShoppingCartOutlined, CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons"
import React, { useEffect, useState, useRef } from "react"
import Image from 'next/image'
import numeral from 'numeral'
import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import { useSwipeable } from 'react-swipeable';


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
    const [swiped, setSwiped] = useState(false)
    const clickRef = useRef(null)

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                setSwiped(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickRef]);

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

    const slide = (swipe: boolean) => {
        setSwiped(swipe)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => slide(true),
        onSwipedRight: () => slide(false),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });


    
    return (
        <div {...handlers} className="border-b-2 border-gray-300 py-2 mx-1 flex flex-row justify-between items-center relative bg-white" onBlur={() => {setSwiped(false)}}>
            <div  ref={clickRef} className={`flex flex-row items-center justify-between w-full transform transition-all ease-in-out duration-300 bg-white z-10 ${swiped ? "-ml-20" : "ml-0"}`}>
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
            
            <div className="w-20 bg-red-500 absolute h-20 right-0 z-0">

            </div>
        </div>
    )
}

export default CartItem