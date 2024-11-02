import { useEffect, useState } from "react"
import apiInstance from "../config/Apis/ApiInstance"
import FATable from "../Components/FATable"

export default function Users() {

    const [listData, setListData] = useState([])
    const [loader, showLoader] = useState(false)

    const getData = () => {
        showLoader(true)
        apiInstance.get('users')
            .then((res) => {
                console.log(res.data)
                setListData([...res.data])
                showLoader(false)
            })
            .catch((err) => {
                console.log(err, 'not get data')
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div>
                <div>
                    <div>
                        {loader ? (
                            <div className="flex justify-center items-start">
                                <img
                                    className="max-w-full h-auto" 
                                    alt="Loader"
                                    src="https://miro.medium.com/v2/resize:fit:882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                                />
                            </div>
                        ) : (
                            <FATable
                                data={listData}
                                columns={[
                                    {
                                        key: "name",
                                        label: "User Name",
                                    },
                                    {
                                        key: "phone",
                                        label: "Contact Number",
                                    },
                                    {
                                        key: "email",
                                        label: "Email",
                                    },
                                ]}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}