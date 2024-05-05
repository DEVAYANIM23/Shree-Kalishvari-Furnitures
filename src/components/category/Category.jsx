import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://hometown.gumlet.io/media/cms/categories/furniture/Rectangle_2460@2x.png?w=400&dpr=1.3',
        name: 'Sofas'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/icons/shopbyCat22.jpg?w=400&dpr=1.3',
        name: 'Recliners'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/icons/shopbyCat23.jpg?w=400&dpr=1.3',
        name: 'Dining Set'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/categories/furniture/shopbyCat5.png?w=400&dpr=1.3',
        name: 'Beds'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/categories/furniture/shopbyCat10.png?w=400&dpr=1.3',
        name: 'Office chairs'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/icons/shopbyCat112.jpg?w=400&dpr=1.3',
        name: 'Book Shelves'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/categories/furniture/shopbyCat6.png?w=400&dpr=1.3',
        name: 'Wardrobes'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/icons/shoe33.jpg?w=400&dpr=1.3',
        name: 'Shoeracks'
    },
    {
        image: 'https://hometown.gumlet.io/media/cms/icons/storage22.jpg?w=400&dpr=1.3',
        name:'Storage Cabinets'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-8">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-green-10 transition-all cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;