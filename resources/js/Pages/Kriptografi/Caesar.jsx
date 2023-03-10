import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import PreviewImages from "@/Components/PreviewImages";
import { Head } from "@inertiajs/inertia-react";
import { useRef, useState } from "react";

export default function Caesar(props) {
    const [text, setText] = useState("")
    const [key, setKey] = useState(0)
    const ref = useRef(null)

    const handleText = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleKey = (e) => {
        e.preventDefault()
        setKey(e.target.value)
    }

    const handleEncrypt = () => {
        let form = new FormData()
        form.append("kata", text)
        form.append("kunci", key)

        fetch("/api/caesar/encrypt", {
            method: "POST",
            body: form
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                ref.current.innerHTML += `
                <div class="mb-5">
                    <div class="text-lg font-medium">Jarak kunci : <span class="font-bold">${key}</span> </div>
                    <div class="text-lg font-medium">Text asli : <span class="font-bold">${text}</span> </div>
                    <div class="text-lg font-medium">Hasil Encrypt : <span class="font-bold">${res.hasil}</span> </div>
                </div>
            `
            })
            .catch(err => console.log(err))
    }

    const handleDecrypt = () => {
        let form = new FormData()
        form.append("kata", text)
        form.append("kunci", key)

        fetch("/api/caesar/decrypt", {
            method: "POST",
            body: form
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                ref.current.innerHTML += `
                <div class="mb-5">
                    <div class="text-lg font-medium">Jarak kunci : <span class="font-bold">${key}</span> </div>
                    <div class="text-lg font-medium">Text asli : <span class="font-bold">${text}</span> </div>
                    <div class="text-lg font-medium">Hasil Decrypt : <span class="font-bold">${res.hasil}</span> </div>
                </div>
            `
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Head title="Caesar" />
            <Navbar />
            <div className="container mx-auto">
                <div className="lg:grid grid-cols-2">
                    <div>
                        <h1 className="text-3xl font-bold">Encrypt dan Decrypt Caesar Cipher</h1>
                        <p className="text-lg my-3">Kodingannya dibuat menggunakan PHP</p>
                        <p className="text-md">Untuk melihat kodingan PHP encrypt <label className="text-blue-500 hover:text-blue-800" htmlFor="encrypt">klik disini</label></p>
                        <p className="text-md">Untuk melihat kodingan PHP decrypt <label className="text-blue-500 hover:text-blue-800" htmlFor="decrypt">klik disini</label></p>
                        <div className="flex flex-col items-start py-3">
                            <label className="mx-3">Kunci :</label>
                            <input
                                type="number"
                                name="kunci"
                                className="input input-bordered"
                                placeholder="0"
                                onChange={handleKey}
                            />
                        </div>

                        <div className="flex flex-col items-start py-3">
                            <label className="mx-3">Text :</label>
                            <input
                                type="text"
                                name="text"
                                className="input input-bordered"
                                placeholder="Masukkan text yang ingin di encrypt/decrypt"
                                onChange={handleText}
                                pattern="/^\S*$/"
                                onKeyPress={(event) => {
                                    if (event.key === " ") {
                                        event.preventDefault()
                                    }
                                }}
                            />
                        </div>

                        <div className="flex items-start py-3">
                            <button className="btn btn-primary" onClick={handleEncrypt}>Encrypt</button>
                            <button className="btn btn-primary mx-3" onClick={handleDecrypt}>Decrypt</button>
                        </div>
                    </div>
                    <div id="hasil" className="py-5 border px-5 overflow-auto lg:h-92" ref={ref}>
                        <h1 className="text-4xl font-bold mb-5">Result:</h1>
                    </div>
                </div>

            </div>
            <Footer />
            <div>
                <input type="checkbox" id="encrypt" className="modal-toggle" />
                <label htmlFor="encrypt" className="modal cursor-pointer">
                    <img src="/images/caesar/encrypt.png" className="modal-box cursor-pointer" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="decrypt" className="modal-toggle" />
                <label htmlFor="decrypt" className="modal cursor-pointer">
                    <img src="/images/caesar/decrypt.png" className="modal-box cursor-pointer" />
                </label>
            </div>
        </>
    )
}