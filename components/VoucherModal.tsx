import { Modal } from 'antd'
import Image from 'next/image'
import numeral from 'numeral'

interface props {
    visible: boolean
    onClose: () => void
}

const VoucherModal = (props: props) => {

    return (
        <Modal visible={props.visible} footer={null} onCancel={props.onClose}>
            <div className="flex flex-col mt-5 h-72">
                <div className="border h-1/3 flex flex-row justify-between items-center gap-2 px-2 py-1">
                    <Image src="/Citibank.svg" width={80} height={80} />

                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-start">
                            <div>S$</div>
                            <div className="text-xl font-bold">{numeral(12).format('0.00')}</div>
                        </div>

                        <div className="text-xs text-center">
                            Amazon.sg Gift Card
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <ul className="text-xxs list-disc list-inside">
                            <li>
                                Min. 100 spend
                            </li>
                            <li>
                                Pay with a Citibank card
                            </li>
                        </ul>

                        <button className="bg-yellow-500 px-2 py-1 text-xs w-4/6 shadow-xl">
                            Applied
                        </button>
                    </div>
                </div>

                <div className="border h-1/3 flex flex-row justify-between items-center gap-2 px-2 py-1">
                    <Image src="/Citibank.svg" width={80} height={80} />

                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-start">
                            <div>S$</div>
                            <div className="text-xl font-bold">{numeral(12).format('0.00')}</div>
                        </div>

                        <div className="text-xs text-center">
                            Amazon.sg Gift Card
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <ul className="text-xxs list-disc list-inside">
                            <li>
                                Min. 100 spend
                            </li>
                            <li>
                                Pay with a Citibank card
                            </li>
                        </ul>

                        <button className="bg-yellow-300 whitespace-nowrap px-2 py-1 text-xs w-5/6 shadow-xl">
                            Use Instead
                        </button>
                    </div>
                </div>

                <div className="border h-1/3 flex flex-row justify-between items-center gap-2 px-2 py-1">
                    <Image src="/Citibank.svg" width={80} height={80} />

                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-start">
                            <div>S$</div>
                            <div className="text-xl font-bold">{numeral(12).format('0.00')}</div>
                        </div>

                        <div className="text-xs text-center">
                            Amazon.sg Gift Card
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <ul className="text-xxs list-disc list-inside">
                            <li>
                                Min. 100 spend
                            </li>
                            <li>
                                Pay with a Citibank card
                            </li>
                        </ul>

                        <button className="bg-yellow-300 px-2 py-1 text-xs w-5/6 shadow-xl">
                            Use Instead
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default VoucherModal