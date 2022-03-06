import Image from 'next/image'
import { LeftOutlined, DownOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons'
import numeral from 'numeral'

interface props {
    image: string
    title: string
    price: number
}

const Item = (props:props) => {
    return (
    <div className="flex flex-col items-start relative w-1/3">
                  <Image src={props.image} width={60} height={60} />
                  <a href="#" className="text-blue-400">
                    {props.title}
                  </a>
                  <div className="flex flex-row items-start text-yellow-600">
                    <div>S$</div>
                    <div className="">{numeral(props.price).format('0.00')}</div>
                  </div>

                  <div className="absolute right-0 bottom-0">
                  <ShoppingOutlined />
                  </div>
                </div>

    )
}

export default Item