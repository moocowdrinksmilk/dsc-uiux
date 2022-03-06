import Image from 'next/image'
import { LeftOutlined, DownOutlined, ShoppingCartOutlined, ShoppingOutlined, CheckCircleFilled } from '@ant-design/icons'

const CheckoutOutPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-black h-20 flex justify-center items-center">
                <Image className="bg-white" src="/amazon.svg" height={40} width={80}></Image>
            </div>
            <div className="bg-black w-full flex flex-row justify-between items-center px-5 py-5 sticky top-0 z-30">
                <LeftOutlined style={{ color: "white" }} height={30} width={30} />
                <h1 className="text-white font-bold text-xl">
                    ORDER CONFIRMATION
          </h1>
                <ShoppingCartOutlined style={{ color: "white" }} />
            </div>

            <div className="h-full flex flex-col justify-center items-center gap-4 px-20">
                <CheckCircleFilled style={{
                    fontSize: '40px',
                    color: 'greem'
                }} />

                <div className="text-center font-semibold">
                    Thank you for shopping at Amazon Singapore!
            </div>

                <div className="text-center">
                    Your order #BE12345 has been placed.            
                </div>

                <div className="text-center mt-10">
                    We sent an email to orders@banuelson.com with your order confirmation and bill. 
                </div>

                <button className="bg-yellow-300 px-4 py-2">
                    Back to shopping
                </button>
            </div>
        </div>
    )
}

export default CheckoutOutPage