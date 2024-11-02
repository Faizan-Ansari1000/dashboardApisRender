import { Button, Flex } from 'antd';



export default function FAButton(props) {

    const { onClick, loading, className, label } = props;

    return (
        <>
            <div>
                <Button onClick={onClick}
                    className={className}
                >{label}</Button>
            </div>
        </>
    )
}