/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-green-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/256/9131/9131529.png" />
                                <p className="leading-relaxed">First and foremost, the selection of furniture available at Shree Kalishwari Furniture Shop is outstanding. From luxurious pieces to more budget-friendly options, there's something for every taste and budget. I appreciated the fact that they carry a diverse range of styles and brands, allowing customers to compare and choose the best fit for their needs.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Devayani</h2>
                                <p className="text-gray-500">Financial Manager</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">I recently visited Shree Kalishwari Furnitures to purchase some new furniture, and I am beyond impressed with my experience. From the moment I stepped in, I was greeted by friendly and knowledgeable staff who guided me through their extensive range of furniture options.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Dazzle Dharshini</h2>
                                <p className="text-gray-500">Advocate</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/png;base64,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" />
                                <p className="leading-relaxed">I recently had the pleasure of shopping at Shree Kalishwari Furnitures, and I must say, it was a fantastic experience from start to finish. From their wide selection of furniture pieces to their impeccable customer service, everything about my visit exceeded my expectations.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Gunaseelan</h2>
                                <p className="text-gray-500">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial