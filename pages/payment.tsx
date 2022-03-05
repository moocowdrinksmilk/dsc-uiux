import Image from 'next/image'
import { LeftOutlined, DownOutlined, ShoppingCartOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons'
import { Switch } from 'antd';
import numeral from 'numeral';


const Payment = () => {
    return (
        <div>
            <div className="bg-black h-20 flex justify-center items-center">
                <Image src="/amazon.png" height={40} width={80}></Image>
            </div>
            <div className="bg-black w-full flex flex-row justify-between items-center px-5 py-5 sticky top-0 z-10">
                <LeftOutlined style={{ color: "white" }} height={30} width={30} />
                <h1 className="text-white font-bold text-xl">
                    Confirmation of Details
                </h1>
                <ShoppingCartOutlined style={{ color: "white" }} />
            </div>

            <div className="flex flex-col px-4 gap-4">
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-lg">
                        Payment Method
                    </h3>

                    <div className="flex flex-row gap-4 items-center">
                        <div>
                            Card icon
                        </div>

                        <div>
                            1234 1234 1234 1234
                        </div>
                    </div>

                    <a href="">
                        Change your method of payment
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="text-lg">
                            Delivery address
                        </h3>

                        <a href="">
                            Change
                        </a>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <HomeOutlined />

                        <div className="text-gray-500">
                            <p>
                                9, Marina Bay Sands,
                            </p>
                            <p>
                                S(12345), Singapore
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <CarOutlined />

                        <div className="text-gray-500">
                            <p>
                                est. delivery 3-5 days
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center">
                    <h3 className="text-lg">
                        Non-contact Delivery
                    </h3>

                    <Switch defaultChecked checkedChildren="Yes" className="" />
                </div>
            </div>

            <div className="flex flex-col gap-8 mt-6 px-10">
                <div className="flex flex-row gap-2">
                    <div className="p-2">
                        <Image src="/senheiser.jpg" width={100} height={100} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-midaf line-clamp-2">
                            Sennheiser bullshit Sennheiser bullshit Sennheiser bullshit
                        </h2>

                        <div className="flex flex-row items-start">
                            <div>S$</div>
                            <div className="text-xl font-bold">{numeral(285.98).format('0.00')}</div>
                        </div>

                        <div className="text-gray-500">
                            <p>
                                Variation: White
                            </p>

                            <p>
                                Quantity: 4
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                        <div className="text-gray-500">
                            Sub total
                        </div>

                        <div>
                            $2843.00
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="text-gray-500">
                            Savings
                        </div>

                        <div>
                            $2843.00
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="text-gray-500">
                            Delivery
                        </div>

                        <div>
                            $2843.00
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div>
                        Total
                    </div>

                    <div className="text-xl font-bold">
                        $2743.00
                    </div>
                </div>

                <button className="bg-yellow-300 mx-10 py-2 text-xl hover:bg-yellow-400">
                    Pay
                </button>
            </div>
        </div>
    )
}

export default Payment